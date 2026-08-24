const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

walkDir(path.join(__dirname, 'src/app'), (filePath) => {
  if (filePath.endsWith('.jsx') || filePath.endsWith('.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    // Remove import useSEO from ...
    content = content.replace(/import\s+useSEO\s+from\s+['"][^'"]+['"];?/g, '');
    // Remove useSEO({ ... }) calls
    content = content.replace(/useSEO\(\{[\s\S]*?\}\);?/g, '');
    // Remove useSEO('...') calls
    content = content.replace(/useSEO\([^)]*\);?/g, '');

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Removed useSEO from ${filePath}`);
    }
  }
});
