const fs = require('fs');

const files = [
  'c:/Users/Jeetesh/Desktop/AntiGravity/website_next/src/components/FounderStory.jsx',
  'c:/Users/Jeetesh/Desktop/AntiGravity/website_next/src/components/ProblemStatement.jsx',
  'c:/Users/Jeetesh/Desktop/AntiGravity/website_next/src/app/about/page.jsx'
];

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  if (!content.includes('use client')) {
    fs.writeFileSync(f, '"use client";\n' + content, 'utf8');
    console.log(`Added "use client" to ${f}`);
  }
});
