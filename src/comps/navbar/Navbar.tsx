import { Box, Button, Grid, styled } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { FC } from "react";
import { Link } from "react-router-dom";

const Navbar: FC = () => {
  return (
    <>
      <GridWrapper container>
        <GridAboveWrapper item xs={12}>
          <GridRight item xs={8}>
            <h6>Меню</h6>
            <h6 style={{ marginLeft: 30 }}>Блог</h6>
            <h6 style={{ marginLeft: 30 }}>О Нас</h6>
            <h6 style={{ marginLeft: 30 }}>Контакты</h6>
            <h6 style={{ marginLeft: 30, marginRight: "auto" }}>Бонусы</h6>
          </GridRight>
          <GridRight item xs={4}>
            <h6 style={{ marginLeft: "auto" }}>+7 (700) 110 10 59</h6>
            <h6 style={{ marginLeft: 30 }}>Меню</h6>
          </GridRight>
        </GridAboveWrapper>
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
              <ButtonStyled variant="outlined">Sign In</ButtonStyled>
              <ButtonStyled1 variant="contained">
                <ShoppingBasketIcon />
                My Recipes
              </ButtonStyled1>
            </GridRight>
          </GridBelowWrapper>
        </BoxStyled>
      </GridWrapper>
    </>
  );
};
const ButtonStyled = styled(Button)`
  padding: 8px;
  border-radius: 50px;
  font-size: 13px;
  margin-left: auto;
  color: black;
  outline: 1px #ffffff;
  background: white;
`;
const ButtonStyled1 = styled(Button)`
  background: #b84484;
  padding: 8px;
  border-radius: 50px;
  font-size: 13px;
  margin-left: 8px;
`;
const GridWrapper = styled(Grid)`
  margin: 0;
  width: 100%;
  min-width: 1245px;
`;
const GridAboveWrapper = styled(Grid)`
  margin: 0px 8%;
  display: flex;
  align-items: center;
  height: 35px;
`;

const GridRight = styled(Grid)`
  display: flex;
  align-items: center;
`;

const BoxStyled = styled(Box)`
  width: 100%;
  background: #68a4a4;
`;
const GridBelowWrapper = styled(Grid)`
  margin: 0px 8%;
  display: flex;
  align-items: center;
  height: 55px;
`;

export default Navbar;
