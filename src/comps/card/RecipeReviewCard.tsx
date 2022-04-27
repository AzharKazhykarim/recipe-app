import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useUserContext } from "../../contexts/UserContext";
import { users } from "../../db/users";
import { useState } from "react";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
interface CardProps {
  title: string;
  strMealThumb: string;
  strYoutube: string;
  strIngredients: string[];
}

const RecipeReviewCard: React.FC<CardProps> = ({
  title,
  strMealThumb,
  strYoutube,
  strIngredients,
}) => {
  const [recipe] = useState<string>(title);
  const { token } = useUserContext();

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
      <CardHeader title={title} />
      <CardMedia
        component="img"
        height="194"
        image={strMealThumb}
        alt={title}
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {/* TODO: here will be recipe list */}
          Heat 1/2 cup of the broth in a pot until simmering, add saffron and
          set aside for 10 minutes.
        </Typography>
      </CardContent>
      <CardActionsStyled disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIconStyled onClick={addToFavorites} />
        </IconButton>
        <IconButton aria-label="share">
          <a style={{ color: "#68a4a4", display:'flex', alignItems:'center'}} href={strYoutube} target="_blank">
            <SlowMotionVideoIcon />
          </a>
        </IconButton>
      </CardActionsStyled>
    </Card>
  );
};

export default RecipeReviewCard;

const FavoriteIconStyled = styled(FavoriteIcon)`
  color: #68a4a4;
`;
const CardActionsStyled = styled(CardActions)`
  display: flex;
  align-items: center;
  background: "#000";
`;
