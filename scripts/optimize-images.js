const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public/images');
const outputDir = path.join(__dirname, '../public/images/optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const images = [
  'about-us.png',
  'abstract.png',
  'portfolio-1.png',
  'portfolio-2.jpg',
  'portfolio-autosell.png',
  'tech-pattern.jpg'
];

async function optimizeImages() {
  console.log('Starting image optimization...');
  
  for (const imageName of images) {
    const inputPath = path.join(imagesDir, imageName);
    const outputPath = path.join(outputDir, imageName.replace(/\.(png|jpg|jpeg)$/, '.webp'));
    
    try {
      console.log(`Optimizing ${imageName}...`);
      
      await sharp(inputPath)
        .resize(1200, 800, { 
          fit: 'inside',
          withoutEnlargement: true 
        })
        .webp({ quality: 80 })
        .toFile(outputPath);
        
      const originalSize = fs.statSync(inputPath).size;
      const optimizedSize = fs.statSync(outputPath).size;
      const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
      
      console.log(`✅ ${imageName}: ${(originalSize / 1024).toFixed(1)}KB → ${(optimizedSize / 1024).toFixed(1)}KB (${savings}% savings)`);
      
    } catch (error) {
      console.error(`❌ Error optimizing ${imageName}:`, error.message);
    }
  }
  
  console.log('Image optimization complete!');
}

optimizeImages();
