import { RecipeInterface } from "../models/RecipeInterface";

export const formation = (recipe: RecipeInterface) => {
  var arr: Array<string> = [];
  arr.push(recipe.strIngredient1 + " - " + recipe.strMeasure1);
  arr.push(recipe.strIngredient2 + " - " + recipe.strMeasure2);
  arr.push(recipe.strIngredient3 + " - " + recipe.strMeasure3);
  arr.push(recipe.strIngredient4 + " - " + recipe.strMeasure4);
  arr.push(recipe.strIngredient5 + " - " + recipe.strMeasure5);
  arr.push(recipe.strIngredient6 + " - " + recipe.strMeasure6);
  arr.push(recipe.strIngredient7 + " - " + recipe.strMeasure7);
  arr.push(recipe.strIngredient8 + " - " + recipe.strMeasure8);
  arr.push(recipe.strIngredient9 + " - " + recipe.strMeasure9);
  arr.push(recipe.strIngredient10 + " - " + recipe.strMeasure10);
  arr.push(recipe.strIngredient11 + " - " + recipe.strMeasure11);
  arr.push(recipe.strIngredient12 + " - " + recipe.strMeasure12);
  arr.push(recipe.strIngredient13 + " - " + recipe.strMeasure13);
  arr.push(recipe.strIngredient14 + " - " + recipe.strMeasure14);
  arr.push(recipe.strIngredient15 + " - " + recipe.strMeasure15);
  arr.push(recipe.strIngredient16 + " - " + recipe.strMeasure16);
  arr.push(recipe.strIngredient17 + " - " + recipe.strMeasure17);
  arr.push(recipe.strIngredient18 + " - " + recipe.strMeasure18);
  arr.push(recipe.strIngredient19 + " - " + recipe.strMeasure19);
  arr.push(recipe.strIngredient20 + " - " + recipe.strMeasure20);
  return arr;
};
