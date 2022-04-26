import { createContext, useContext } from "react";

export type UserContent = {
  token: string | undefined;
  setToken: (c: string) => void;
};
export const UserContext = createContext<UserContent>({
  token: "",
  setToken: () => {},
});

export const useUserContext = () => useContext(UserContext);
