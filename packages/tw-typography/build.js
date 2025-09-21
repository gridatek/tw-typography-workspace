// Simple build script for tw-typography package
const fs = require('fs');
const path = require('path');

console.log('🏗️  Building tw-typography package...');

// Create dist directory
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy CSS file
const srcCSS = path.join(__dirname, 'src', 'typography.css');
const distCSS = path.join(distDir, 'typography.css');

if (fs.existsSync(srcCSS)) {
  fs.copyFileSync(srcCSS, distCSS);
  console.log('✅ Copied typography.css');
} else {
  console.log('⚠️  typography.css not found in src/');
}

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
  files: ['typography.css', 'index.js'],
  keywords: ['css', 'typography', 'tailwindcss', 'css-variables'],
  license: 'MIT',
};

fs.writeFileSync(path.join(distDir, 'package.json'), JSON.stringify(packageJson, null, 2));

console.log('✅ Build complete!');
console.log('📦 Package ready in dist/');
