import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import sharp from 'sharp';

const svg = readFileSync('public/og-image.svg', 'utf-8');

await sharp(Buffer.from(svg))
  .resize(1200, 630)
  .png()
  .toFile('dist/og-image.png');

console.log('✅ og-image.png generated');
