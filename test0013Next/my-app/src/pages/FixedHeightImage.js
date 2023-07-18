import { useState, useEffect } from 'react';
import Image from 'next/image';

const FixedHeightImage = () => {
  const [aspectRatio, setAspectRatio] = useState(0);

  useEffect(() => {
    const img = new Image();
    img.src = '/imo_toreca.jpg';
    img.onload = () => {
      const { width, height } = img;
      const imageAspectRatio = width / height;
      setAspectRatio(imageAspectRatio);
    };
  }, []);

  const targetHeight = 400; // 固定したい縦サイズ

  const targetWidth = targetHeight * aspectRatio;

  return (
    <Image
      src="/imo_toreca.jpg"
      width={targetWidth}
      height={targetHeight}
      layout="responsive"
      alt="おいもトレカ"
    />
  );
};

export default FixedHeightImage;
