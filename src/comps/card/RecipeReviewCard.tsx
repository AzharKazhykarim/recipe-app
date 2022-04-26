import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useUserContext } from "../../contexts/UserContext";
import { users } from "../../db/users";
import { useState } from "react";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
interface CardProps {
  title: string;
  strMealThumb: string;
  strInstructions: string;
  strIngredients: string[];
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

const RecipeReviewCard: React.FC<CardProps> = ({
  title,
  strMealThumb,
  strInstructions,
  strIngredients,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [recipe] = useState<string>(title);
  const { token } = useUserContext();

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
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon onClick={addToFavorites} sx={{ color: "#68a4a4" }} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon sx={{ color: "#68a4a4" }} />
        </IconButton>
        {/* TODO: Here by clicking to expandMore will open modal */}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          sx={{ color: "#68a4a4" }}
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
    </Card>
  );
};

export default RecipeReviewCard;
