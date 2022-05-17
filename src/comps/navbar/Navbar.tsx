import { AppBar, IconButton, Toolbar, Typography, styled } from "@mui/material";
import { ShoppingBasket } from "@mui/icons-material";
import { FC } from "react";
const Navbar: FC = () => {
  return (
    <>
      <AppBarStyled position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="span"
            sx={{
              flexGrow: 6,
              fontFamily: `'Oleo Script Swash Caps', cursive`,
              fontSize: "30px",
              marginLeft: "20px",
            }}
          >
            Nibble
          </Typography>
          <Typography component="span" sx={{ flexGrow: 0.3 }}>
            Beef
          </Typography>
          <Typography component="span" sx={{ flexGrow: 0.3 }}>
            Chicken
          </Typography>
          <Typography component="span" sx={{ flexGrow: 0.3 }}>
            Pork
          </Typography>
          <Typography component="span" sx={{ flexGrow: 0.3 }}>
            Lamb
          </Typography>
          <Typography component="span" sx={{ flexGrow: 0.3 }}>
            Breakfast
          </Typography>
          <IconButton color="inherit">
            <ShoppingBasket />
          </IconButton>
        </Toolbar>
      </AppBarStyled>
    </>
  );
};
const AppBarStyled = styled(AppBar)`
  background: #353130;
`;
export default Navbar;
