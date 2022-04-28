import { FC, useEffect, useState } from "react";
import { useUserContext } from "../../contexts/UserContext";
import { users } from "../../db/users";
import { RecipeType } from "../../models/RecipeType";


const Favorites: FC = () => {
  const { token } = useUserContext();
  const [favorites, setFavorites] = useState<string[]>([]);
  const [recipes, setRecipes] = useState<RecipeType>();
  useEffect(() => {
    users.map((user) => {
      if (user.email === token) setFavorites(user.listRecipes);
    });
  }, []);

  const getRecipes = async (name: string) => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    );

    const data = await api.json();
    setRecipes(data.meals)
    console.log(recipes)
    if (data.meals === null) {
      //   setIsAlertOpened(true);
      //   setInterval(async () => setIsAlertOpened(false), 3000);
    }
  };
  
  return <></>;
};
export default Favorites;
