import { FC, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import { users } from "../../db/users";
import { useUserContext } from "../../contexts/UserContext";

const Login: FC = () => {
  const { setToken } = useUserContext();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    users.map((user) => {
      if (user.email === email && user.password === password) {
        setToken(email);
      }
    });
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <GridStyled item xs={false} sm={4} md={7} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <BoxStyled sx={{ my: 8, mx: 4 }}>
          <AvatarStyled sx={{ m: 1 }}>
            <LockOutlinedIcon />
          </AvatarStyled>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 5 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email Address"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <ButtonStyled
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </ButtonStyled>
          </Box>
        </BoxStyled>
      </Grid>
    </Grid>
  );
};
export default Login;

const GridStyled = styled(Grid)`
  background-image: url("https://pbs.twimg.com/media/EDOM0hCWwAA1LiV.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
const BoxStyled = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AvatarStyled = styled(Avatar)`
  background: #68a4a4;
`;
const ButtonStyled = styled(Button)`
  background: #68a4a4;
`;
