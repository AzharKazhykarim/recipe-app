import {
  Button,
  Container,
  Grid,
  Snackbar,
  styled,
  TextField,
} from "@mui/material";
import { FC, useEffect, useRef, useState } from "react";
import RecipeReviewCard from "../card/RecipeReviewCard";
import { RecipeType } from "../content/RecipeType";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

const SearchPage: FC = () => {
  const [inputSearch, setInputSearch] = useState<string>("");
  const [recipes, setRecipes] = useState<RecipeType>();
  const [isAlertOpened, setIsAlertOpened] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null!);

  const getRecipe = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputSearch}`
    );

    const data = await api.json();
    if (data.meals === null) {
      setIsAlertOpened(true);
      setInterval(async () => setIsAlertOpened(false), 3000);
    }
    setRecipes(data.meals);
    console.log(data);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <>
      <Snackbar open={isAlertOpened}>
        <Alert variant="filled" severity="warning">
          Sorry, do not have such recipe yet :(
        </Alert>
      </Snackbar>

      <ContainerStyled fixed>
        <TextFieldStyled
          ref={inputRef}
          id="outlined-basic"
          label="Search for..."
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <Button variant="contained" onClick={getRecipe}>
          Search
        </Button>
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
                strYoutube={recipe.strYoutube}
              />
            </GridStyled>
          );
        })}
      </ContainerStyled>
    </>
  );
};
export default SearchPage;

const ContainerStyled = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 100px;
`;
const TextFieldStyled = styled(TextField)`
  width: 50%;
  background: #fff;
  outline: none;
`;
const GridStyled = styled(Grid)`
  margin: 10px auto;
  width: 100%;
`;
