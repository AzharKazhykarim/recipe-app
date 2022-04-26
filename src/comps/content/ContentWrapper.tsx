import { Container, Grid, styled } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RecipeType } from "./RecipeType";
import RecipeReviewCard from "../card/RecipeReviewCard";

const ContentWrapper: FC = () => {
  const [recipes, setRecipes] = useState<RecipeType>();
  const { category } = useParams();

  useEffect(() => {
    getRecipes();
  }, [category]);

  const getRecipes = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${category}`
    );
    const data = await api.json();
    setRecipes(data.meals);
  };
  return (
    <>
      <Container fixed>
        <h2 style={{ marginLeft: 15 }}>{category}</h2>
        <Grid container>
          {recipes?.map((recipe) => {
            var arr: Array<string> = [];
            for (let i = 1; i <= 5; i++) {
              let strIngredient: string = "strIngredient";
              strIngredient = strIngredient + String(i);
              arr.push(recipe.strIngredient);
            }

            return (
              <GridStyled item xs={4} md={4} key={recipe.idMeal}>
                <RecipeReviewCard
                  title={recipe.strMeal}
                  strMealThumb={recipe.strMealThumb}
                  strIngredients={arr}
                  strInstructions={recipe.strInstructions}
                />
              </GridStyled>
            );
          })}
        </Grid>

        {/* <RecipeReviewCard/> */}
      </Container>
    </>
  );
};
export default ContentWrapper;

const GridStyled = styled(Grid)`
  margin: 10px auto;
  width: 100%;
`;
