// Simple build script for tw-typography package
const fs = require('fs');
const path = require('path');

console.log('🏗️  Building tw-typography package...');

// Create dist directory
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy CSS files
const files = ['index.css', 'typography.css', 'theme.css'];

files.forEach((file) => {
  const srcFile = path.join(__dirname, 'src', file);
  const distFile = path.join(distDir, file);

  if (fs.existsSync(srcFile)) {
    fs.copyFileSync(srcFile, distFile);
    console.log(`✅ Copied ${file}`);
  } else {
    console.log(`⚠️  ${file} not found in src/`);
  }
});

// Create a simple index.js for the package
const indexJS = `// tw-typography package
module.exports = {
  version: '1.0.0'
};
`;

fs.writeFileSync(path.join(distDir, 'index.js'), indexJS);

// Create package.json for the built package
const packageJson = {
  name: 'tw-typography',
  version: '1.0.0',
  description: 'CSS Variables Typography System for Tailwind CSS v4',
  main: 'index.js',
  files: ['index.css', 'typography.css', 'theme.css', 'index.js'],
  keywords: ['css', 'typography', 'tailwindcss', 'css-variables'],
  license: 'MIT',
};

fs.writeFileSync(path.join(distDir, 'package.json'), JSON.stringify(packageJson, null, 2));

console.log('✅ Build complete!');
console.log('📦 Package ready in dist/');
