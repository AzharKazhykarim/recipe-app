export interface UserInterface {
  id: number;
  email: string;
  password: string;
  listRecipes: Array<string | null>;
}
