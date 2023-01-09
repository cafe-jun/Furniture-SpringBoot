import React from "react";
import {
  MainLogoImg,
  MainMemberProfile,
  // SliderBody,
} from "./styled";
import {
  Box,
  Button,
  Container,
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material";
import { AuthButton, ContentButton } from "./mui-styed";
import TextInput from "@components/control/TextInput";
import { getCookie } from "@common/util/cookie";
import { ACCESS_TOKEN } from "@components/member/oauth2/oAuth2RedrectUrl";
import SearchIcon from "@mui/icons-material/Search";
import { useQuery } from "react-query";
import { PROFILE_KEY } from "@common/key";
import { Profile } from "@api/member/member";
import SimpleSlider from "@components/slider/Slider";
import { makeStyles } from "@mui/styles";
import ProdcutionTabs, { RadioItemModel } from "@components/prd-tabs";

const useStyles = makeStyles({
  mainContainer: {
    marginTop: "50px",
  },
  contentGrid: {
    display: "flex",
    justifyContent: "space-around",
  },
});

const Main = () => {
  const classes = useStyles();
  const { data } = useQuery(PROFILE_KEY, Profile);
  const seriesItems: RadioItemModel[] = [
    {
      lable: "201",
      value: "201",
    },
    {
      lable: "301",
      value: "301",
    },
    {
      lable: "401",
      value: "401",
    },
  ];

  const modelItems: RadioItemModel[] = [
    {
      lable: "SOFA",
      value: "SOFA",
    },
    {
      lable: "TABLE",
      value: "TABLE",
    },
    {
      lable: "CHAIR",
      value: "CHAIR",
    },
  ];

  return (
    <div>
      <Container maxWidth="md" className={classes.mainContainer}>
        <Grid container spacing={1}>
          <Grid xs={4}>
            <MainLogoImg />
          </Grid>
          <Grid xs={4} className={classes.contentGrid}>
            <ContentButton variant="text" href="/auth/sign_in">
              커뮤니티
            </ContentButton>
            <ContentButton variant="text" href="/auth/sign_up">
              상품
            </ContentButton>
            <ContentButton variant="text" href="/auth/sign_up">
              팔로워
            </ContentButton>
          </Grid>
          <Grid xs={1} className={classes.contentGrid}>
            {!getCookie(ACCESS_TOKEN) ? (
              <AuthButton variant="text" href="/auth/sign_in">
                로그인
              </AuthButton>
            ) : (
              <MainMemberProfile
                src={
                  !data?.information.imageUrl
                    ? require("../../assets/img/others/avatar-large-2.png")
                    : data.information.imageUrl
                }
              />
            )}
          </Grid>
        </Grid>
        <hr />
        <SimpleSlider />
        <hr />
        <Grid>
          <ProdcutionTabs items={seriesItems} title={"SERIES"} />
        </Grid>
        <Grid>
          <ProdcutionTabs items={modelItems} title={"MODEL"} />
        </Grid>
      </Container>
    </div>
  );
};

export default Main;
