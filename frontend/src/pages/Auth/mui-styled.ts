import styled from "@emotion/styled";
import { Button, InputLabel } from "@mui/material";

export const KakaoLoginButton = styled(Button)({
  backgroundColor: "#fee500",
  color: "#000",
  fontSize: "14px",
  width: "100%",
  height: "50px",
  "&:hover": {
    backgroundColor: "#fee500",
    boxShadow: "none",
  },
});

export const NaverLoginButton = styled(Button)({
  backgroundColor: "#1ec800",
  color: "#fff",
  fontSize: "14px",
  width: "100%",
  height: "50px",
  "&:hover": {
    backgroundColor: "#1ec800",
    boxShadow: "none",
  },
});

export const GoogleLoginButton = styled(Button)({
  backgroundColor: "#f9f7f7",
  color: "#000",
  fontSize: "14px",
  width: "100%",
  height: "50px",
  "&:hover": {
    backgroundColor: "#f9f7f7",
    boxShadow: "none",
  },
});

export const LocalAuthButton = styled(Button)({
  color: "black",
});

export const AuthInputLabel = styled(InputLabel)({
  display: "flex",
  marginBottom: "15px",
});
