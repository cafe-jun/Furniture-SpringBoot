import React from "react";
import {
  MainAuthItem,
  MainBody,
  MainContentItem,
  MainHeader,
  MainLogo,
  MainLogoImg,
} from "./styled";
import { Box, Button, Grid, InputAdornment, TextField } from "@mui/material";
import { AuthButton, ContentButton } from "./mui-styed";
import TextInput from "@components/control/TextInput";
import { getCookie } from "@common/util/cookie";
import { ACCESS_TOKEN } from "@components/member/oauth2/oAuth2RedrectUrl";
import SearchIcon from "@mui/icons-material/Search";

const Main = () => {
  return (
    <div>
      <MainBody>
        {/* <Grid container spacing={3}> */}
        <MainHeader>
          <MainLogo>
            <MainLogoImg />
          </MainLogo>
          <MainContentItem>
            <ContentButton variant="text" href="/auth/sign_up">
              커뮤니티
            </ContentButton>
            <ContentButton variant="text" href="/auth/sign_up">
              가구
            </ContentButton>
          </MainContentItem>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "20ch" },
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
          {!getCookie(ACCESS_TOKEN) ? (
            <MainAuthItem>
              <AuthButton variant="text" href="/auth/sign_in">
                로그인
              </AuthButton>
              <AuthButton variant="text" href="/auth/sign_up">
                회원가입
              </AuthButton>
            </MainAuthItem>
          ) : (
            <div>로그인 완료</div>
          )}
        </MainHeader>
        {/* </Grid> */}
      </MainBody>
    </div>
  );
};

export default Main;
