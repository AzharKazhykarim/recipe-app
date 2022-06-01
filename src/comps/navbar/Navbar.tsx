import { AppBar, IconButton, Toolbar, Typography, styled } from "@mui/material";
import { ShoppingBasket } from "@mui/icons-material";
import { FC } from "react";
import { Link } from "react-scroll";
interface Props {
  // beefSection:()=>void,
}
const Navbar: FC<Props> = ({}) => {
  return (
    <>
      <AppBarStyled position="sticky">
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

          <Link
            to="beef"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
            style={{
              flexGrow: 0.3,
              cursor: "pointer",
            }}
          >
            <Typography component="span">Beef</Typography>
          </Link>

          <Link
            to="chicken"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
            style={{
              flexGrow: 0.3,
              cursor: "pointer",
            }}
          >
            <Typography component="span">Chicken</Typography>
          </Link>

          <Link
            to="pork"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
            style={{
              flexGrow: 0.3,
              cursor: "pointer",
            }}
          >
            <Typography component="span">Pork</Typography>
          </Link>

          <Link
            to=" lamb"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
            style={{
              flexGrow: 0.3,
              cursor: "pointer",
            }}
          >
            <Typography component="span"> Lamb</Typography>
          </Link>

          <Link
            to="breakfast"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
            style={{
              flexGrow: 0.3,
              cursor: "pointer",
            }}
          >
            <Typography component="span">Breakfast</Typography>
          </Link>

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
