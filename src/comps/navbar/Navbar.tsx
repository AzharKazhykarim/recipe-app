import { AppBar, IconButton, Toolbar, Typography, styled } from "@mui/material";
import { ShoppingBasket } from "@mui/icons-material";
import { FC } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
interface Props {
  // beefSection:()=>void,
}
const Navbar: FC<Props> = ({}) => {
  return (
    <>
      <AppBarStyled position="sticky">
        <Toolbar>
          <NavLink
            to="/"
            style={{ color: "#fff", textDecoration: "none", flexGrow: 6 }}
          >
            <Typography
              variant="h6"
              component="span"
              sx={{
                fontFamily: `'Oleo Script Swash Caps', cursive`,
                fontSize: "30px",
                marginLeft: "20px",
              }}
            >
              Nibble
            </Typography>
          </NavLink>
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
          <NavLink to="/favorites">
            <IconButton color="inherit" sx={{ color: "#fff" }}>
              <ShoppingBasket />
            </IconButton>
          </NavLink>
        </Toolbar>
      </AppBarStyled>
    </>
  );
};

export default Navbar;
const AppBarStyled = styled(AppBar)`
  background: #353130;
`;
