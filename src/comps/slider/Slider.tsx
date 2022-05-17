import { Box, styled } from "@mui/material";
import { FC, useEffect, useState } from "react";
interface SliderProps {
  images: Array<string>;
  autoPlay: boolean;
  autoPlayTime: number;
  children: JSX.Element;
}
const IndicatorWrapper = styled(Box)`
  display: flex;
  flex-wrap: nowrap;
  position: absolute;
  bottom: 15px;
  right: 15px;
`;

const Dot = styled(Box)`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: white;
  margin: 5px;
  transition: 750ms all ease-in-out;
`;
// @ts-ignore
const Indicator = ({ currentSlide, amountSlides, nextSlide }) => {
  // @ts-ignore
  // @ts-ignore
  return (
    <IndicatorWrapper>
      {Array(amountSlides)
        .fill(1)
        .map((_, i) => (
          <Dot
            key={i}
            sx={{ opacity: currentSlide === i ? 1 : 0.5 }}
            onClick={() => nextSlide(i)}
          />
        ))}
    </IndicatorWrapper>
  );
};
const Wrapper = styled(Box)`
  height: 640px;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
  position: relative;
`;

const Slide = styled(Box)`
  height: 100%;
  width: 100vw;
  flex-shrink: 0;
  background-position: center;
  background-size: cover;
  transition: 750ms all ease-in-out;
`;

const ChildrenWrapper = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Gradient = styled(Box)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Slider: FC<SliderProps> = ({
  images = [],
  autoPlay = true,
  autoPlayTime = 3000,
  children,
}) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  function nextSlide(slideIndex = currentSlide + 1) {
    const newSlideIndex = slideIndex >= images.length ? 0 : slideIndex;
    setCurrentSlide(newSlideIndex);
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, autoPlayTime);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <>
      <Wrapper>
        {images.map((imageUrl, index) => (
          <Slide
            key={index}
            style={{
              backgroundImage: `url(${imageUrl})`,
              marginLeft: index === 0 ? `-${currentSlide * 105}%` : undefined,
            }}
          />
        ))}
        <Gradient />
        <Indicator
          currentSlide={currentSlide}
          amountSlides={images.length}
          nextSlide={nextSlide}
        />
        <ChildrenWrapper>{children}</ChildrenWrapper>
      </Wrapper>
    </>
  );
};
export default Slider;
