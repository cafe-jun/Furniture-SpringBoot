import "./SignIn.css";
import React, { useEffect } from "react";
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
import { GoogleLogo, NaverLogo, KakaoLogo } from "./socialLogo";
import { SignInPayload } from "@payload/auth/auth";
import TextInput from "@components/control/TextInput";

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
      <div className="main-content-wrapper">
        <div className="page-content-inner pt--75 pb--80">
          <div className="container">
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <div className="login-box">
                  <h3 className="heading__terriary mb--30">
                    로그인
                    <form
                      className="form form--login"
                      method="post"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <div className="form__group mb--20">
                        <TextInput
                          label="이메일"
                          name="email"
                          value={email}
                          onChange={onChangeEmail}
                        />
                      </div>
                      <div className="form__group mb--20">
                        <TextInput
                          label="패스워드"
                          name="password"
                          value={password}
                          onChange={onChangePassword}
                        />
                      </div>
                      <div className="d-flex align-items-center mb--20">
                        <div className="form__group mr--30">
                          <input
                            type="submit"
                            value="로그인"
                            className="btn btn-fullwidth"
                          />
                        </div>
                      </div>
                      <div className="form__group">
                        <label
                          className="form__label checkbox-label"
                          htmlFor="store_session"
                        >
                          <input
                            type="checkbox"
                            name="store_session"
                            id="store_session"
                          />
                          <span>아이디 저장</span>
                        </label>
                        <br />
                      </div>
                      <a className="forgot-pass" href="/signup">
                        <b>&nbsp;&nbsp;회원가입&nbsp;&nbsp;</b>
                      </a>
                      <a className="forgot-pass" href="/">
                        <b>&nbsp;&nbsp;패스워드 찾기&nbsp;</b>
                      </a>
                    </form>
                  </h3>
                  <br />
                  <div className="social-login">
                    <a
                      className="btn btn-block social-btn google"
                      href={GOOGLE_AUTH_URL}
                    >
                      <img src={GoogleLogo} alt="Google" />
                    </a>

                    <a
                      className="btn btn-block social-btn kakao"
                      href={KAKAO_AUTH_URL}
                    >
                      <img src={KakaoLogo} alt="Kakao" />
                    </a>
                    <a
                      className="btn btn-block social-btn naver"
                      href={NAVER_AUTH_URL}
                    >
                      <img src={NaverLogo} alt="Naver" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
