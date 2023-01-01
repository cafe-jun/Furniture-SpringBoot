import TextInput from "@components/control/TextInput";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

import {
  AuthBody,
  AuthBox,
  AuthContainer,
  AuthContent,
  AuthHeader,
  SignInImg,
  SignInLogo,
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
  GoogleLoginButton,
  KakaoLoginButton,
  LocalAuthButton,
  NaverLoginButton,
} from "./mui-styled";
import { KakaoLogo } from "./KakaoLogo";
import { NaverLogo } from "./NaverLogo";
import { GoogleLogo } from "./GoogleLogo";
import useInput from "@hook/useInput";

const useStyles = makeStyles({
  signInForm: {
    justifyContent: "center",
  },
  root: {
    flexGrow: 1,
  },
  logoContainer: {
    width: "300px",
    height: "185px",
  },
  signInButton: {
    width: "75%",
    height: "50px",
  },
  signInBtnContainer: {
    marginTop: "2%",
  },
});

const SignIn = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [email, onChangeEmail, setEmail] = useInput("");
  const [password, onChangePassword, setPassword] = useInput("");
  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  const { mutate, isLoading } = useMutation(localSignIn, {
    onSuccess: (data) => {
      console.log("로그인 성공 처리");
      navigate("/");
    },
    onError: () => {
      alert("there was an error");
    },
    onSettled: () => {
      // queryClient.invalidateQueries("create");
    },
  });
  const onSubmit = (data: any) => {
    mutate({ email, password });
  };

  return (
    <div>
      <AuthBody>
        <AuthContainer>
          <AuthBox>
            <AuthHeader>
              <SignInLogo>
                <SignInImg />
              </SignInLogo>

              <AuthContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Grid container className={classes.signInForm} spacing={2}>
                    <Grid item xs={9}>
                      <TextInput
                        name="email"
                        variant="outlined"
                        placeholder="이메일을 입력해주세요"
                        size="large"
                        fullWidth
                        onChange={onChangeEmail}
                      />
                    </Grid>
                    <Grid item xs={9}>
                      <TextInput
                        name="email"
                        variant="outlined"
                        placeholder=" 입력해주세요"
                        size="large"
                        fullWidth
                        onChange={onChangePassword}
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
                <div className={classes.signInBtnContainer}>
                  <Grid container className={classes.signInForm} spacing={2}>
                    <Grid item xs={9}>
                      <LocalAuthButton variant="text" href="/auth/sign_up">
                        아이디찾기
                      </LocalAuthButton>
                      <LocalAuthButton variant="text">
                        비밀번호찾기
                      </LocalAuthButton>
                      <LocalAuthButton variant="text" href="/auth/sign_up">
                        회원가입
                      </LocalAuthButton>
                    </Grid>
                  </Grid>
                </div>
                <div className={classes.signInBtnContainer}>
                  <Grid container className={classes.signInForm} spacing={2}>
                    <Grid item xs={9}>
                      <KakaoLoginButton
                        startIcon={<KakaoLogo />}
                        href={KAKAO_AUTH_URL}
                      >
                        카카오로 로그인
                      </KakaoLoginButton>
                    </Grid>
                    <Grid item xs={9}>
                      <NaverLoginButton
                        startIcon={<NaverLogo />}
                        href={NAVER_AUTH_URL}
                      >
                        네이버로 로그인
                      </NaverLoginButton>
                    </Grid>
                    <Grid item xs={9}>
                      <GoogleLoginButton
                        startIcon={<GoogleLogo />}
                        href={GOOGLE_AUTH_URL}
                      >
                        구글로 로그인
                      </GoogleLoginButton>
                    </Grid>
                  </Grid>
                </div>
              </AuthContent>
            </AuthHeader>
          </AuthBox>
        </AuthContainer>
      </AuthBody>
    </div>
  );
};

export default SignIn;
