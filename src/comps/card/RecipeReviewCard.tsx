import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useUserContext } from "../../contexts/UserContext";
import { users } from "../../db/users";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { useState } from "react";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
interface CardProps {
  idMeal: number;
  strMeal: string;
  strMealThumb: string;
  strYoutube: string;
  strIngredients: string[];
  strInstructions: string;
}

const RecipeReviewCard: React.FC<CardProps> = ({
  idMeal,
  strMeal,
  strMealThumb,
  strYoutube,
  strIngredients,
}) => {
  const { token } = useUserContext();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  let complete =
    strIngredients[0] + ", " + strIngredients[1] + ", " + strIngredients[2];
  complete = complete.length > 35 ? complete.slice(0, 35) : complete;

  const addToFavorites = () => {
    users.map((user) => {
    
      if (user.email === token) {
        if (!contains(user.listRecipes, strMeal)) {
          user.listRecipes.push(strMeal);
          alert("Added");
        } else {
          alert("Already in Favs");
        }
      }
    });
  };

  return (
    <Card
      sx={{ maxWidth: 345, width: 310, margin: "10px", borderRadius: "9px" }}
    >
      <CardMedia
        component="img"
        height="194"
        image={strMealThumb}
        alt={strMeal}
      />

      <CardContent>
        <Typography sx={{ fontSize: "25px" }}>
          <b>
            {" "}
            {strMeal.length > 22
              ? strMeal.slice(0, 18).concat("...")
              : strMeal}{" "}
          </b>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {expanded === false ? complete + "..." : null}
        </Typography>
      </CardContent>

      <CardActionsStyled disableSpacing>
        <IconButton aria-label="add to favorites" onClick={addToFavorites}>
          <FavoriteIconStyled />
        </IconButton>
        <IconButton aria-label="share">
          <a
            style={{ color: "#353130", display: "flex", alignItems: "center" }}
            href={strYoutube}
            target="_blank"
          >
            <SlowMotionVideoIcon />
          </a>
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon sx={{ color: "#353130" }} />
        </ExpandMore>
      </CardActionsStyled>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Ingredients:</Typography>
          {strIngredients
            .filter((ingredient) => ingredient !== "null -")
            .map((ingredient) => (
              <Typography key={ingredient} paragraph>
                {ingredient}
              </Typography>
            ))}
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default RecipeReviewCard;

const FavoriteIconStyled = styled(FavoriteIcon)`
  color: #353130;
`;
const CardActionsStyled = styled(CardActions)`
  display: flex;
  align-items: center;
  background: "#000";
`;

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function contains(arr: Array<string>, elem: string) {
  for (const element of arr) {
    if (element === elem) {
      return true;
    }
  }
  return false;
}
