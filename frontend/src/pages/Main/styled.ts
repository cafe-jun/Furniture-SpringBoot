import styled from "styled-components";

export const MainBody = styled.div`
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: left;
  background: white;
  height: 100px;
`;
export const MainHeader = styled.div`
  background-size: contain;
  max-width: 1256px;
  margin-left: 300px;
  margin-right: 300px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MainLogo = styled.div``;

export const MainContentItem = styled.div`
  display: block;
`;

export const MainAuthItem = styled.div``;

export const MainLogoImg = styled.img.attrs({
  src: `${require("../../assets/img/logo/kaare.jpg")}`,
  width: "230px",
  height: "40px",
})``;
