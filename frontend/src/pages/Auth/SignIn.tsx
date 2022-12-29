import "./SignIn.css";
import TextInput from "@components/control/TextInput";
import { PasswordOutlined, PersonPinCircleOutlined } from "@mui/icons-material";
import { Grid, InputAdornment } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect } from "react";
import {
  SignInBody,
  SignInBox,
  SignInContainer,
  SignInContent,
  SignInHeader,
  SignInImg,
  SignInLogo,
  SocialContent,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { localSignIn } from "@api/auth/auth";
import { getCookie } from "@common/util/cookie";
import MuiButton from "@components/control/Button";
import {
  GOOGLE_AUTH_URL,
  KAKAO_AUTH_URL,
  NAVER_AUTH_URL,
} from "@components/member/oauth2/oAuth2RedrectUrl";
import {
  GoogleLogo,
  KakaoLogo,
  NaverLogo,
} from "@components/member/signin/socialLogo";

const useStyles = makeStyles({
  signInForm: {
    justifyContent: "center",
  },
  root: {
    flexGrow: 1,
  },
  logoContainer: {
    width: "400px",
    height: "185px",
  },
  signInButton: {
    width: "84%",
    height: "50px",
  },
  signInBtnContainer: {
    marginTop: "2%",
  },
});

const SignIn = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  const { mutate, isLoading } = useMutation(localSignIn, {
    onSuccess: (data) => {
      console.log("로그인 성공 처리");
    },
    onError: () => {
      alert("there was an error");
    },
    onSettled: () => {
      // queryClient.invalidateQueries("create");
    },
  });
  const onSubmit = (data: any) => {
    console.log(data);
    // mutate({ email, password });
  };

  useEffect(() => {
    // access token
    if (getCookie("access_token")) {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <SignInBody>
        <SignInContainer>
          <SignInBox>
            <SignInHeader>
              <SignInLogo>
                <SignInImg />
              </SignInLogo>

              <SignInContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Grid container className={classes.signInForm} spacing={2}>
                    <Grid item xs={10}>
                      <TextInput
                        id="outlined-basic"
                        name="account"
                        label="계정"
                        variant="outlined"
                        placeholder="계정을 입력해주세요"
                        size="large"
                        fullWidth
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PersonPinCircleOutlined />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs={10}>
                      <TextInput
                        type="password"
                        id="outlined-basic"
                        label="패스워드"
                        name="password"
                        variant="outlined"
                        placeholder="패스워드을 입력해주세요"
                        size="large"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PasswordOutlined />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                  </Grid>
                  {/* {error && (
                    <ErrorMessage>ID 또는 패스워드를 확인해주세요</ErrorMessage> */}
                  {/* )} */}
                  <div className={classes.signInBtnContainer}>
                    <MuiButton
                      type="submit"
                      text="로그인"
                      color="primary"
                      className={classes.signInButton}
                    />
                  </div>
                </form>
                <SocialContent>
                  <Grid>
                    <a className="social-btn google" href={GOOGLE_AUTH_URL}>
                      <img src={GoogleLogo} alt="Google" />
                    </a>
                  </Grid>
                  <Grid>
                    <a className="social-btn kakao" href={KAKAO_AUTH_URL}>
                      <img src={KakaoLogo} alt="Kakao" />
                    </a>
                  </Grid>
                  <Grid>
                    <a className="social-btn naver" href={NAVER_AUTH_URL}>
                      <img src={NaverLogo} alt="Naver" />
                    </a>
                  </Grid>
                </SocialContent>
              </SignInContent>
            </SignInHeader>
          </SignInBox>
        </SignInContainer>
      </SignInBody>
    </div>
  );
};

export default SignIn;
