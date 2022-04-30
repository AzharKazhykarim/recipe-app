import { Button, Container, styled, TextField } from "@mui/material";
import { FC, useEffect, useRef, useState } from "react";

import { useNavigate } from "react-router-dom";
const SearchPage: FC = () => {
  const [inputSearch, setInputSearch] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null!);
  const navigate = useNavigate();

  const getRecipe = async () => {
    navigate(`/search/search/${inputSearch}`);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <>
      <ContainerStyled fixed>
        <TextFieldStyled
          ref={inputRef}
          id="outlined-basic"
          label="Search for..."
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <ButtonStyled variant="contained" onClick={getRecipe}>
          Search
        </ButtonStyled>
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
const ButtonStyled = styled(Button)`
  background: #b84484;
  display: flex;
  align-items: center;
  justtify-content: space-between;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
  margin-top: 15px;
  width: 20%;
  font-family: "Montserrat", sans-serif;
`;
