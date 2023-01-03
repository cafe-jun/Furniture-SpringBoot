import React from "react";
import {
  MainAuthItem,
  MainBody,
  MainContentItem,
  MainHeader,
  MainLogo,
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

  return (
    <div>
      <Container maxWidth="lg" className={classes.mainContainer}>
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
          <Grid xs={3}>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextInput
                name="productionSearch"
                variant="outlined"
                placeholder="상품검색"
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Grid>
          <Grid xs={1}>
            {!getCookie(ACCESS_TOKEN) ? (
              <MainAuthItem>
                <AuthButton variant="text" href="/auth/sign_in">
                  로그인
                </AuthButton>
              </MainAuthItem>
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
        {/* <SliderBody> */}
        <SimpleSlider />
        {/* </SliderBody> */}
      </Container>
    </div>
  );
};

export default Main;
