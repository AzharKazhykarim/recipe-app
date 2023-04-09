import { Container, Grid, styled } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeReviewCard from "../card/RecipeReviewCard";
import { RecipeType } from "../../models/RecipeType";
import { formation } from "../../utils/util";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

interface Props {
  header: string;
}
const CardWrapperList: FC<Props> = ({ header }) => {
  const [recipes, setRecipes] = useState<RecipeType>();
  const { category } = useParams();

  useEffect(() => {
    getRecipes();
  }, [category]);

  const getRecipes = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${header}`
    );
    const data = await api.json();
    setRecipes(data.meals);
  };

  function slideRight() {
    var slider = document.getElementById("slider");
    if (!slider) return;
    slider.scrollLeft = slider?.scrollLeft + 800;
  }
  function slideLeft() {
    var slider = document.getElementById("slider");
    if (!slider) return;
    slider.scrollLeft = slider.scrollLeft - 800;
  }

  return (
    <>
      <Container fixed>
        <h2>{header}</h2>
        <Grid container>
          <ArrowCircleLeftIcon
            sx={{
              fontSize: "40px",
              cursor: "pointer",
            }}
            onClick={slideLeft}
          />
          <ArrowCircleRightIcon
            sx={{
              fontSize: "40px",
              cursor: "pointer",
            }}
            onClick={slideRight}
          />
          <div id="slider">
            {recipes?.map((recipe) => {
              var arr: Array<string> = formation(recipe);

              var filteredArr = arr.filter((str) => {
                return !str.startsWith(" - ");
              });
              return (
                <GridStyled item xs={4} md={4} key={recipe.idMeal}>
                  <RecipeReviewCard
                    idMeal={recipe.idMeal}
                    strMeal={recipe.strMeal}
                    strMealThumb={recipe.strMealThumb}
                    strIngredients={filteredArr}
                    strYoutube={recipe.strYoutube}
                    strInstructions={recipe.strInstructions}
                  />
                </GridStyled>
              );
            })}
          </div>
        </Grid>
      </Container>
    </>
  );
};
export default CardWrapperList;

const GridStyled = styled(Grid)`
  margin-left: 5px;
  margin-right: 5px;
`;
