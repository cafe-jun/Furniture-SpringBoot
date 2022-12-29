import styled from "styled-components";

export const SignInBody = styled.div`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  margin-top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: white;
`;

export const SignInContainer = styled.div`
  position: relative;
  margin: 0;
  width: 500px;
`;

export const SignInBox = styled.div`
  height: 32.5rem;
  border-radius: 3px;
  background: #fff;
`;

export const SignInHeader = styled.div`
  display: block;
  width: 100%;
  height: 8.5rem;
  padding: 70px 1px;
`;
export const SignInLogo = styled.div`
  height: px;
  background-size: contain;
  margin: 0 3.5rem;
`;
export const SignInContent = styled.div`
  position: relative;
  width: 100%;
  font-size: 0;
  text-align: center;
  line-height: 2.1rem;
`;
export const SignTitle = styled.div`
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  font-size: 25px;
`;
export const SignInImg = styled.img.attrs({
  src: `${require("../../assets/img/logo/kaare.jpg")}`,
  width: "190px",
  height: "40px",
})``;

export const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

export const SocialContent = styled.div``;
