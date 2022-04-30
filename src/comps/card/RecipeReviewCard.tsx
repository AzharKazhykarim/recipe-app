import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
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
  strMeal: string;
  strMealThumb: string;
  strYoutube: string;
  strIngredients: string[];
  strInstructions: string;
}

const RecipeReviewCard: React.FC<CardProps> = ({
  strMeal,
  strMealThumb,
  strYoutube,
  strIngredients,
  strInstructions,
}) => {
  const [recipe] = useState<string>(strMeal);
  const { token } = useUserContext();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const addToFavorites = () => {
    users.map((user) => {
      if (user.email === token) {
        user.listRecipes.push(recipe);
        //TODO: ALERT
      }
    });
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={
          strMeal.length > 24 ? strMeal.slice(0, 20).concat("...") : strMeal
        }
      />
      <CardMedia
        component="img"
        height="194"
        image={strMealThumb}
        alt={strMeal}
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {/* TODO: here will be recipe list */}
        </Typography>
      </CardContent>

      <CardActionsStyled disableSpacing>
        <IconButton aria-label="add to favorites" onClick={addToFavorites}>
          <FavoriteIconStyled />
        </IconButton>
        <IconButton aria-label="share">
          <a
            style={{ color: "#92acbe", display: "flex", alignItems: "center" }}
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
          <ExpandMoreIcon sx={{ color: "#92acbe" }} />
        </ExpandMore>
      </CardActionsStyled>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Ingredients:</Typography>
          {strIngredients
            .filter((ingredient) => ingredient !== "null - null")
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
  color: #92acbe;
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
