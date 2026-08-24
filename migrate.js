const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../website/src/pages');
const destDir = path.join(__dirname, 'src/app');

// Map old pages to Next.js App Router paths
const routeMap = {
  'Home.jsx': 'page.jsx',
  'About.jsx': 'about/page.jsx',
  'Blog.jsx': 'blog/page.jsx',
  'ArticleView.jsx': 'blog/[id]/page.jsx',
  'Courses.jsx': 'courses/page.jsx',
  'Experience.jsx': 'experience/page.jsx',
  'Lessons.jsx': 'lessons/page.jsx',
  'LessonView.jsx': 'lessons/[id]/page.jsx',
  'PitchView.jsx': 'proposal/[pitchId]/page.jsx'
};

function processContent(content, isPage) {
  let newContent = content;
  
  // Replace imports
  newContent = newContent.replace(/import\s+\{([^}]*?)Link([^}]*?)\}\s+from\s+['"]react-router-dom['"];?/g, "import Link from 'next/link';");
  newContent = newContent.replace(/import\s+\{\s*Link\s*\}\s+from\s+['"]react-router-dom['"];?/g, "import Link from 'next/link';");
  newContent = newContent.replace(/<Link([^>]*?)to=/g, '<Link$1href=');
  
  // Rewrite relative imports to Next.js absolute path aliases
  newContent = newContent.replace(/from\s+['"]\.\.\/hooks\/([^'"]+?)['"]/g, "from '@/hooks/$1'");
  newContent = newContent.replace(/from\s+['"]\.\.\/data\/([^'"]+?)['"]/g, "from '@/data/$1'");
  newContent = newContent.replace(/from\s+['"]\.\.\/components\/([^'"]+?)['"]/g, "from '@/components/$1'");
  newContent = newContent.replace(/from\s+['"]\.\.\/utils\/([^'"]+?)['"]/g, "from '@/utils/$1'");
  
  // Replace useParams with Next.js params prop for pages
  if (isPage && newContent.includes('useParams')) {
    newContent = newContent.replace(/import\s+\{([^}]*?)useParams([^}]*?)\}\s+from\s+['"]react-router-dom['"];?/g, "import { use } from 'react';");
    newContent = newContent.replace(/const\s+\{\s*([a-zA-Z0-9_]+)\s*\}\s*=\s*useParams\(\);?/g, "const { $1 } = use(params);");
  }

  // Next.js pages often need "use client" if they use useState or useEffect or useSEO
  if (newContent.includes('useState') || newContent.includes('useEffect') || newContent.includes('use(') || newContent.includes('useSEO')) {
    newContent = '"use client";\n\n' + newContent;
  }
  
  return newContent;
}

// Ensure dir exists
function ensureDirSync(dirpath) {
  if (!fs.existsSync(dirpath)) {
    fs.mkdirSync(dirpath, { recursive: true });
  }
}

// Move pages
for (const [oldName, newRoute] of Object.entries(routeMap)) {
  const oldPath = path.join(srcDir, oldName);
  const newPath = path.join(destDir, newRoute);
  
  if (fs.existsSync(oldPath)) {
    ensureDirSync(path.dirname(newPath));
    const content = fs.readFileSync(oldPath, 'utf8');
    // For pages with dynamic params, we need to alter the component signature in Next 15 (params is a promise)
    // We'll just do a basic string replace for the signature if it has useParams
    let processedContent = processContent(content, true);
    
    if (processedContent.includes('use(params)')) {
      // Modify default export to accept { params }
      processedContent = processedContent.replace(/export default function ([A-Za-z0-9_]+)\(\)/, "export default function $1({ params })");
    }
    
    fs.writeFileSync(newPath, processedContent);
    console.log(`Migrated ${oldName} -> ${newRoute}`);
  }
}

// Also process components
const componentsDir = path.join(__dirname, 'src/components');
if (fs.existsSync(componentsDir)) {
  fs.readdirSync(componentsDir).forEach(file => {
    if (file.endsWith('.jsx')) {
      const compPath = path.join(componentsDir, file);
      let content = fs.readFileSync(compPath, 'utf8');
      content = processContent(content, false);
      fs.writeFileSync(compPath, content);
      console.log(`Processed component ${file}`);
    }
  });
}
