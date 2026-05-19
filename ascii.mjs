import { Jimp } from "jimp";

async function run() {
  const image = await Jimp.read('public/1779160397782.png');
  image.resize({w: 120}); // higher resolution ASCII
  const width = image.bitmap.width;
  const height = image.bitmap.height;
  
  const chars = ' .,:;i1tfLCG08@';
  
  let ascii = '';
  for (let y = 0; y < height; y += 2) {
    for (let x = 0; x < width; x++) {
      const idx = (width * y + x) << 2;
      const r = image.bitmap.data[idx];
      const g = image.bitmap.data[idx+1];
      const b = image.bitmap.data[idx+2];
      
      const brightness = (0.299*r + 0.587*g + 0.114*b) / 255;
      const charIdx = Math.floor((1 - brightness) * (chars.length - 1));
      ascii += chars[charIdx];
    }
    ascii += '\n';
  }
  console.log(ascii);
}
run().catch(console.error);
