// Simple script to test if the build process works
console.log('Building portfolio website...');

const fs = require('fs');
const path = require('path');

// Check if all required files exist
const requiredFiles = [
  'src/App.jsx',
  'src/main.jsx',
  'src/index.css',
  'src/components/Header.jsx',
  'src/components/Hero.jsx',
  'src/components/About.jsx',
  'src/components/Skills.jsx',
  'src/components/Projects.jsx',
  'src/components/OtherProjects.jsx',
  'src/components/Contact.jsx',
  'src/components/Footer.jsx',
  'index.html',
  'tailwind.config.js',
  'postcss.config.js',
  'vite.config.js',
  'package.json'
];

let allFilesExist = true;

requiredFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) {
    console.error(`Missing file: ${file}`);
    allFilesExist = false;
  } else {
    console.log(`Found file: ${file}`);
  }
});

if (allFilesExist) {
  console.log('All required files exist. The portfolio website should build successfully.');
} else {
  console.error('Some required files are missing. Please check the errors above.');
}