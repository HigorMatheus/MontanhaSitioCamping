import { useEffect, useState } from 'react';
import { Container, Img } from './styles';

interface CarrosselIgmProps {
  images: string[];
}
export function CarrosselIgm({ images }: CarrosselIgmProps) {
  const [data, setData] = useState<string[]>([]);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    setData(images);
  }, [images]);
  const plusSlides = (index: number) => {
    const maxIndex = data.length - 1;

    if (imageIndex === maxIndex && index === 1) {
      setImageIndex(0);
    } else if (index === 1) {
      setImageIndex((state) => state + index);
    } else if (imageIndex === 0 && index === -1) {
      setImageIndex(maxIndex);
    } else {
      setImageIndex((state) => state - 1);
    }
  };

  return (
    <Container>
      <div>
        <button type="button" className="prev" onClick={() => plusSlides(-1)}>
          &#10094;
        </button>
        {data.map((image, index) => {
          return <Img src={image} isActive={index === imageIndex} />;
        })}
        <button type="button" className="next" onClick={() => plusSlides(1)}>
          &#10095;
        </button>
      </div>
    </Container>
  );
}
