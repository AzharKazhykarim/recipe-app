import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";
import { FC } from "react";

interface CardProps {
  title: string | undefined;
  strMealThumb: string | undefined;
  country: string | undefined;
}
const CardItem: FC<CardProps> = ({ title, strMealThumb, country }) => {
  return (
    <>
      <CardWrapper>
        <CardMedia
          component="img"
          image={strMealThumb}
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <CardContentStyled>
          <p style={{ fontSize: "15px" }}>{title}</p>
          <Typography gutterBottom variant="h6" component="div">
            {country}
          </Typography>
        </CardContentStyled>
        <CardActionsStyled>
          <ButtonStyled variant="contained">Save</ButtonStyled>
        </CardActionsStyled>
      </CardWrapper>
    </>
  );
};

export default CardItem;

const ButtonStyled = styled(Button)`
  background: #b84484;
  padding: 12px;
  border-radius: 50px;
  font-size: 12px;
  margin-bottom: 12px;
  width: 50%;
  "&:hover": {
    background: white;
  }
`;
const CardWrapper = styled(Card)`
  max-width: 280px;
  min-width: 200px;
  max-height: 500px;
  min-height: 380px;
  border-radius: 2px;
  margin: 0 18px;
`;
const CardContentStyled = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CardActionsStyled = styled(CardActions)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;
