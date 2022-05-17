import { Container, Grid, styled } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeReviewCard from "../card/RecipeReviewCard";
import { RecipeType } from "../../models/RecipeType";
import { formation } from "../../utils/util";
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
  return (
    <>
      <Container fixed>
        <h2>{header}</h2>
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
export default CardWrapperList;

const GridStyled = styled(Grid)`
  margin: 10px auto;
  width: 100%;
`;
