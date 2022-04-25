import CardItem from "../card/CardItem";
import { Container, Grid, styled } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RecipeType } from "./RecipeType";

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
    const categ = await fetch(
      `https://www.themealdb.com/api/json/v1/1/categories.php`
    );
    const data = await api.json();
    const some = await categ.json();
    setRecipes(data.meals);
    console.log(some);
  };
  return (
    <>
      <Container fixed>
        <h2 style={{ marginLeft: 15 }}>{category}</h2>
        <Grid container>
          {recipes?.map((recipe) => {
            return (
              <GridStyled item xs={6} md={3} key={recipe.idMeal}>
                <div>
                  <CardItem
                    title={recipe.strMeal}
                    strMealThumb={recipe.strMealThumb}
                    country={recipe.strArea}
                  />
                </div>
              </GridStyled>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};
export default ContentWrapper;

const GridStyled = styled(Grid)`
  margin: 10px auto;
  width: 100%;
`;
