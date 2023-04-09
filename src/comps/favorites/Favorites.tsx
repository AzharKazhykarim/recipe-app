import { Grid, styled } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { RecipeInterface } from "../../models/RecipeInterface";
import { formation } from "../../utils/util";
import RecipeReviewCard from "../card/RecipeReviewCard";
interface Props {
  favorites: string[];
}
const Favorites: FC<Props> = ({ favorites }) => {
    const [favs,setFavs] = useState(favorites)
  useEffect(() => {
    for(const element of favs){
        getRecipes(element);
    }
  }, []);

  const getRecipes = async (name:string) => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    );
    const data = await api.json();
    console.log(data);
  };

  return (
    <>
      {/* {favorites.map((fav) => {
        var arr: Array<string> = formation(fav);
        return (
          <>
            <GridStyled item xs={4} md={4} key={fav.idMeal}>
              <RecipeReviewCard
                idMeal={fav.idMeal}
                strMeal={fav.strMeal}
                strMealThumb={fav.strMealThumb}
                strIngredients={arr}
                strYoutube={fav.strYoutube}
                strInstructions={fav.strInstructions}
              />
            </GridStyled>
          </> */}
      {/* );
      })} */}
    </>
  );
};
export default Favorites;
const GridStyled = styled(Grid)`
  margin-left: 5px;
  margin-right: 5px;
`;
