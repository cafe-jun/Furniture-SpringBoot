import { Button } from "@mui/material";
import styled from "styled-components";

export const AuthBody = styled.div`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  margin-top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: white;
  margin-top: -50px;
`;

export const AuthContainer = styled.div`
  position: relative;
  margin: 0;
  width: 500px;
  display: flex;
  justify-content: center;
`;

export const AuthBox = styled.div`
  height: 32.5rem;
  border-radius: 3px;
  background: #fff;
`;

export const AuthHeader = styled.div`
  display: block;
  width: 100%;
  height: 8.5rem;
  padding: 70px 1px;
  display: flex;
  flex-direction: column;
`;
export const SignInLogo = styled.div`
  margin-bottom: 30px;
  background-size: contain;
  text-align: center;
`;
export const AuthContent = styled.div`
  position: relative;
  width: 100%;
  font-size: 0;
  text-align: center;
  line-height: 2.1rem;
`;
export const AuthTitle = styled.div`
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  font-size: 25px;
`;
export const SignInImg = styled.img.attrs({
  src: `${require("../../assets/img/logo/kaare.jpg")}`,
  width: "290px",
  height: "60px",
})``;

export const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

export const SocialContent = styled.div``;
