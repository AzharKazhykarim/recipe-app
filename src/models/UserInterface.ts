import { RecipeInterface } from "./RecipeInterface";

export interface UserInterface {
  id: number;
  email: string;
  password: string;
  listRecipes: Array<RecipeInterface | null>;
}
