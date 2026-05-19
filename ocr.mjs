import Tesseract from 'tesseract.js';

async function run() {
  const width = 1264;
  const height = 848;
  const cols = 2; // wait, the 6 screenshots were maybe 2 cols x 3 rows? Or whatever. Let me try 3 cols x 2 rows
  const w = Math.floor(width / cols);
  const h = Math.floor(height / 3);

  // You know what, I have 5 images. Let's just OCR the whole image and find coordinates. Better to just slice it into 6.
  const rects = [
    {left: 0, top: 0, width: width/2, height: height/3},
    {left: width/2, top: 0, width: width/2, height: height/3},
    {left: 0, top: height/3, width: width/2, height: height/3},
    {left: width/2, top: height/3, width: width/2, height: height/3},
    {left: 0, top: height*2/3, width: width/2, height: height/3},
    {left: width/2, top: height*2/3, width: width/2, height: height/3},
  ];
  
  // Let's do 3x2 
  const rects2 = [
    {left: 0, top: 0, width: width/3, height: height/2},
    {left: width/3, top: 0, width: width/3, height: height/2},
    {left: width*2/3, top: 0, width: width/3, height: height/2},
    {left: 0, top: height/2, width: width/3, height: height/2},
    {left: width/3, top: height/2, width: width/3, height: height/2},
    {left: width*2/3, top: height/2, width: width/3, height: height/2},
  ];

  for (let i = 0; i < 6; i++) {
    const rect = rects2[i];
    try {
      const { data: { text } } = await Tesseract.recognize(
        'public/1779160397782.png',
        'por',
        { rectangle: rect }
      );
      console.log(`Grid 3x2, Cell ${i}: ${text.trim().substring(0, 100).replace(/\n/g, ' ')}`);
    } catch(e) {}
  }
}
run();
