import { Box, Button, Grid, IconButton, styled } from "@mui/material";

import { FC } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchbarContext } from "../../contexts/SearchToggleContext";

const Navbar: FC = () => {
  const { isOpenSearchbar, setIsOpenSearchbar } = useSearchbarContext();

  return (
    <>
      <GridWrapper container>
        <BoxStyled>
          <GridBelowWrapper item xs={12}>
            <GridRight item xs={8}>
              <Link style={{ textDecoration: "none" }} to={"/categories/Beef"}>
                <h4>Beaf</h4>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                to={"/categories/Chicken"}
              >
                <h4>Chicken</h4>
              </Link>
              <Link style={{ textDecoration: "none" }} to={"/categories/Pork"}>
                <h4>Pork</h4>
              </Link>
              <Link style={{ textDecoration: "none" }} to={"/categories/Lamb"}>
                <h4>Lamb</h4>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                to={"/categories/Breakfast"}
              >
                <h4>Breakfast</h4>
              </Link>
            </GridRight>

            <GridRight item xs={4}>
              <Link
                style={{ textDecoration: "none", marginLeft: "auto" }}
                to={"/favorites"}
              >
                <ButtonStyled variant="contained">Favorites</ButtonStyled>
              </Link>
              <Link to={"/search"}>
                <IconButton
                  onClick={() => {
                    setIsOpenSearchbar(!isOpenSearchbar);
                  }}
                >
                  <SearchIconStyled />
                </IconButton>
              </Link>
            </GridRight>
          </GridBelowWrapper>
        </BoxStyled>
      </GridWrapper>
    </>
  );
};

const ButtonStyled = styled(Button)`
  background: #b84484;
  display: flex;
  align-items: center;
  justtify-content: space-between;
  padding: 8px;
  border-radius: 25px;
  font-size: 11px;
  font-family: "Montserrat", sans-serif;
`;
const GridWrapper = styled(Grid)`
  width: 100%;
  min-width: 1245px;
`;

const GridRight = styled(Grid)`
  display: flex;
  align-items: center;
`;

const BoxStyled = styled(Box)`
  width: 100%;
  background: #92acbe;
`;
const GridBelowWrapper = styled(Grid)`
  margin: 0px 8%;
  display: flex;
  align-items: center;
  height: 55px;
`;
const SearchIconStyled = styled(SearchIcon)`
  color: #ffffff;
  font-size: 30px;
`;

export default Navbar;
