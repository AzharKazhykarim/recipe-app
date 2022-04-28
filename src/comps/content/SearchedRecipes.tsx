import { Container, Grid, styled } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeReviewCard from "../card/RecipeReviewCard";
import { useSearchbarContext } from "../../contexts/SearchToggleContext";
import { RecipeType } from "../../models/RecipeType";
import { formation } from "../../utils/util";
const SearchedRecipes: FC = () => {
  const { isOpenSearchbar } = useSearchbarContext();
  const [recipes, setRecipes] = useState<RecipeType>();
  const { input } = useParams();

  useEffect(() => {
    getRecipes();
  }, [input]);

  const getRecipes = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
    );
    const data = await api.json();
    setRecipes(data.meals);
    console.log(data.meals)
  };
  return (
    <>
      <Container fixed>
        <Grid container>
          {recipes?.map((recipe) => {
            var arr: Array<string> = formation(recipe);
            var filteredArr = arr.filter((str) => {
              return !str.startsWith(" - ");
            });
            return (
              <GridStyled item xs={4} md={4} key={recipe.idMeal}>
                <RecipeReviewCard
                  strMeal={recipe.strMeal}
                  strMealThumb={recipe.strMealThumb}
                  strIngredients={filteredArr}
                  strYoutube={recipe.strYoutube}
                  strInstructions={recipe.strInstructions}
                />
              </GridStyled>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};
export default SearchedRecipes;

const GridStyled = styled(Grid)`
  margin: 10px auto;
  width: 100%;
`;
