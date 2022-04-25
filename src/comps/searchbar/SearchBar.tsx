import { styled, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { FC, useEffect, useState } from "react";
import { RecipeType } from "../content/RecipeType";
import CardItem from "../card/CardItem";

const SearchBar: FC = () => {
  const [inputRecipe, setInputRecipe] = useState("");
  //const inputRef = useRef();
  const [searchedRecipes, setSearchedRecipies] = useState<RecipeType>();

  useEffect(() => {
    getRecipe();
  }, []);

  const getRecipe = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputRecipe}`
    );
    const data = await api.json();
    setSearchedRecipies(data.meals);
    setInputRecipe("");
  };

  return (
    <>
      <BoxStyled>
        <TextFieldStyled
          id="outlined-basic"
          label="Search for..."
          variant="outlined"
          value={inputRecipe}
          onChange={(e) => setInputRecipe(e.target.value)}
        />
      </BoxStyled>
      <BoxStyledCards>
        {searchedRecipes
          ?.filter((recipe) =>
            recipe.strMeal
              ?.toLocaleLowerCase()
              .startsWith(inputRecipe?.toLocaleLowerCase())
          )
          .map((recipies) => (
            <div key={recipies.idMeal}>
              <CardItem
                title={recipies.strMeal}
                strMealThumb={recipies.strMealThumb}
                country={recipies.strArea}
              />
            </div>
          ))}
      </BoxStyledCards>
    </>
  );
};
export default SearchBar;
const BoxStyled = styled(Box)`
  margin: 3% 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TextFieldStyled = styled(TextField)`
  width: 40%;
`;
const BoxStyledCards = styled(Box)`
  display: flex;
  align-шtems: center;
  justify-сontent: space-between;
`;
