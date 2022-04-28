import { createContext, useContext } from "react";

export type SearchbarContent = {
  isOpenSearchbar: boolean;
  setIsOpenSearchbar: (c: boolean) => void;
};
export const SearchbarContext = createContext<SearchbarContent>({
  isOpenSearchbar: false,
  setIsOpenSearchbar: () => {},
});

export const useSearchbarContext = () => useContext(SearchbarContext);
