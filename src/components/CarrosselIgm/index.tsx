import { useEffect, useState } from 'react';
import { Container, Img } from './styles';

interface CarrosselIgmProps {
  images: string[];
}

export function CarrosselIgm({ images }: CarrosselIgmProps) {
  const [data, setData] = useState<string[]>([]);
  // const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    setData(images);
  }, [images]);
  // const plusSlides = (index: number) => {
  //   const maxIndex = data.length - 1;

  //   if (imageIndex === maxIndex && index === 1) {
  //     setImageIndex(0);
  //   } else if (index === 1) {
  //     setImageIndex((state) => state + index);
  //   } else if (imageIndex === 0 && index === -1) {
  //     setImageIndex(maxIndex);
  //   } else {
  //     setImageIndex((state) => state - 1);
  //   }
  // };

  return (
    <Container>
      <div id="items">
        {data.map((image, index) => {
          return (
            <div key={String(index)} className="item">
              <Img src={image} />
            </div>
          );
        })}
      </div>
    </Container>
  );
}
