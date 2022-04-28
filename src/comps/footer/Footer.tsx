import { Box, styled, Typography } from "@mui/material";
import { FC } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const Footer: FC = () => {
  return (
    <>
      <BoxStyled>
        <TypographyStyled variant="h4" gutterBottom>
          One Lab Project
        </TypographyStyled>
        <BoxInnerWrapper>
          <InstagramIcon />
          <TelegramIcon />
          <WhatsAppIcon />
        </BoxInnerWrapper>
      </BoxStyled>
    </>
  );
};
export default Footer;
const BoxStyled = styled(Box)`
  width: 100%;
  display: flex;
  margin-top: 25px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #92acbe;
  padding: 30px 0;
`;

const TypographyStyled = styled(Typography)`
  color: #fff;
  font-family: "Water Brush", cursive;
`;

const BoxInnerWrapper = styled(Box)`
  display: flex;
  align-items: center;
  color: #fff;
  justify-content: space-evenly;
  width: 125px;
`;
