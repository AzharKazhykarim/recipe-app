import { Box, styled, Typography } from "@mui/material";
import { FC } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const Footer: FC = () => {
  return (
    <>
      <BoxStyled>
        <TypographyStyled variant="h5" gutterBottom>
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
  height: 150px;
  margin-top: 35px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #92acbe;
  padding-top: 20px;
`;

const TypographyStyled = styled(Typography)`
  color: #fff;
`;

const BoxInnerWrapper = styled(Box)`
display:flex;
align-items:center;
color:#fff;
justify-content:space-between;
`;