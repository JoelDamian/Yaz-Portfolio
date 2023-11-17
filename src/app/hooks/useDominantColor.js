'use client';
import { useEffect, useState } from 'react';
import Vibrant from 'node-vibrant';

function useDominantColor (imageUrl) {
  const [dominantColor, setDominantColor] = useState(null);

  useEffect(() => {
    console.log(imageUrl);
    const image = new Image();
    image.src = imageUrl;

    image.onload = async () => {
      Vibrant.from(image).getPalette().then((palette) => {
        const vibrantColor = palette.Vibrant.getHex();
        console.log(vibrantColor);
        setDominantColor(vibrantColor);
      });
    };
  }, [imageUrl]);

  return dominantColor;
}

export default useDominantColor;
