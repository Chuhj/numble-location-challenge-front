import { MouseEvent, useEffect, useRef, useState } from 'react';
import { CarouselWrap, Image, Dots, Dot } from './styles';

const WIDTH = 360;
const THRESHOLD = 90;

interface Props {
  images: { imagePath: string }[];
}

export default function Carousel({ images }: Props) {
  const [index, setIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [x, setX] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const viewerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLUListElement>(null);

  const handleMouseDown = ({ clientX }: MouseEvent) => {
    setIsMouseDown(true);
    const rect = viewerRef.current?.getBoundingClientRect();
    if (rect) {
      setStartX(clientX - rect.left);
    }
  };

  const handleMouseMove = ({ clientX }: MouseEvent) => {
    if (!isMouseDown) return;
    const rect = viewerRef.current?.getBoundingClientRect();
    if (rect) {
      const xCoord = clientX - rect.left;
      const distance = xCoord - startX;
      // -90 이하면 넘기기
      // 50 이상이면 되돌리기
      if (index === 0 && distance > THRESHOLD) {
        return;
      } else if (index === images.length - 1 && distance < -THRESHOLD) {
        return;
      } else {
        setX(-(WIDTH * index) + distance);
      }
    }
  };

  useEffect(() => {
    const handleMouseUp = () => {
      setIsMouseDown(false);
      const currentX = -(WIDTH * index);
      if (index === 0 && x > 0 && x <= THRESHOLD) {
        // 첫 이미지에서 이전으로 넘기는 경우
        setX(0);
      } else if (index === images.length - 1 && x >= currentX - THRESHOLD && x < currentX) {
        // 마지막 이미지에서 다음으로 넘기는 경우
        setX(currentX);
      } else if (x < currentX - THRESHOLD) {
        // 중간 이미지에서 다음으로 넘기는 경우
        setX(currentX - 360);
        setIndex((prev) => prev + 1);
      } else if (x >= currentX - THRESHOLD && x <= currentX + THRESHOLD) {
        // 중간 이미지에서 못넘기는 경우
        setX(currentX);
      } else if (x > currentX + THRESHOLD) {
        // 중간 이미지에서 이전으로 넘기는 경우
        setX(currentX + 360);
        setIndex((prev) => prev - 1);
      }
    };
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [x, index, images]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      const handleTransitionEnd = () => {
        slider.style.transition = 'none';
      };
      document.addEventListener('mouseup', () => {
        slider.style.transition = 'all 0.1s ease-in';
      });
      document.addEventListener('transitionend', handleTransitionEnd);
      return () => {
        document.removeEventListener('transitionend', handleTransitionEnd);
      };
    }
  }, []);

  return (
    <CarouselWrap
      ref={viewerRef}
      onDragStart={(e) => {
        e.preventDefault();
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
    >
      {/* 이미지가 보여지는 공간 */}
      <ul ref={sliderRef} style={{ display: 'flex', transform: `translateX(${x}px)` }}>
        {/* 이미지들을 가지고 있는 공간 */}
        {images.map(({ imagePath }) => (
          <li>
            <Image src={imagePath} alt="" />
          </li>
        ))}
      </ul>
      <Dots>{images.map((v, i) => (index === i ? <Dot current /> : <Dot />))}</Dots>
    </CarouselWrap>
  );
}
