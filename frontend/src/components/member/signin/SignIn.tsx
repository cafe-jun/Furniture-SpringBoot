import "./SignIn.css";
import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { useMutation } from "react-query";
import useInput from "@hook/useInput";
import { localSignIn } from "@api/auth/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getCookie } from "@common/util/cookie";
import {
  ACCESS_TOKEN,
  GOOGLE_AUTH_URL,
  KAKAO_AUTH_URL,
  NAVER_AUTH_URL,
} from "@components/member/oauth2/oAuth2RedrectUrl";

import { SignInPayload } from "@payload/auth/auth";
import TextInput from "@components/control/TextInput";
import MuiButton from "@components/control/Button";
import Box from "@mui/material/Box";

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
  const [email, onChangeEmail, setEmail] = useInput("");
  const [password, onChangePassword, setPassword] = useInput("");
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
    mutate({ email, password });
  };

  useEffect(() => {
    // access token
    if (getCookie("access_token")) {
      navigate("/");
    }
  }, []);

  return getCookie(ACCESS_TOKEN) ? (
    <Navigate replace to="/" />
  ) : (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          "& .MuiTextField-root": { width: "50ch" },
        }}
      >
        <div className="col-md-4">
          <div className="login-logo">
            <img src={require("@assets/img/logo/kaare.jpg")} />
          </div>

          <form className="form form--login" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <TextInput
                name="email"
                value={email}
                onChange={onChangeEmail}
                placeholder="이메일"
              />
            </div>
            <TextInput
              name="password"
              value={password}
              onChange={onChangePassword}
              placeholder="패스워드"
            />
            <div className="">
              <MuiButton text={"회원가입"} size="large" onClick={onSubmit} />
            </div>

            <a href="/search_password">패스워드 재설정</a>
            <a href="/signup">회원가입</a>
          </form>

          <br />
          <div className="social-login">
            <button></button>
            {/* <a
              className="btn btn-block social-btn google"
              href={GOOGLE_AUTH_URL}
            >
              <img src={GoogleLogo} alt="Google" />
            </a>

            <a className="btn btn-block social-btn kakao" href={KAKAO_AUTH_URL}>
              <img src={KakaoLogo} alt="Kakao" />
            </a>
            <a className="btn btn-block social-btn naver" href={NAVER_AUTH_URL}>
              <img src={NaverLogo} alt="Naver" />
            </a> */}
          </div>
        </div>
      </Box>
    </div>
  );
};

export default SignIn;
