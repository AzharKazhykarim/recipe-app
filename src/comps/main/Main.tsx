import { FC } from "react";
import Slider from "../slider/Slider";
import { Box, styled } from "@mui/material";
import Recipes from "../recipes/Recipes";
// @ts-ignore
import image1 from "../../assets/slide1.jpg";
// @ts-ignore
import image2 from "../../assets/slide2.jpg";
// @ts-ignore
import image3 from "../../assets/slide3.jpg";
// @ts-ignore
import image4 from "../../assets/slide4.jpg";
// @ts-ignore
import image5 from "../../assets/slide5.jpg";
const Main: FC = () => {
  return (
    <>
      <Slider
        images={[image2, image3, image4, image1, image5]}
        autoPlay={true}
        autoPlayTime={3000}
      >
        <Wrapper>
          <h1>Nibble</h1>
          <p>Nulla vitae elit libero, a pharetra augue.</p>
        </Wrapper>
      </Slider>
      <Recipes />
    </>
  );
};
export default Main;
const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
`;
