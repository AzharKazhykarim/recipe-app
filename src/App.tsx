import Navbar from "./comps/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardWrapperList from "./comps/cardWrapper/CardWrapperList";
import Login from "./comps/login/Login";
import SearchPage from "./comps/searchbar/SearchPage";
// @ts-ignore
import image1 from "./assets/slide1.jpg";
// @ts-ignore
import image2 from "./assets/slide2.jpg";
// @ts-ignore
import image3 from "./assets/slide3.jpg";
// @ts-ignore
import image4 from "./assets/slide4.jpg";
// @ts-ignore
import image5 from "./assets/slide5.jpg";
import { Box, styled } from "@mui/material";

import SearchedRecipes from "./comps/cardWrapper/SearchedRecipes";
import Slider from "./comps/slider/Slider";
import Recipes from "./comps/recipes/Recipes";
const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
`;
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
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
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/search/search/:input" element={<SearchedRecipes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
