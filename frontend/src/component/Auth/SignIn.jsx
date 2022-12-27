import React, { useEffect } from "react";
import { useMutation } from "react-query";
import useInput from "../../hook/useInput";
import { SignInApi, authLogin } from "../../common/api";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getCookie } from "../../common/cookie";
import {
  ACCESS_TOKEN,
  GOOGLE_AUTH_URL,
  KAKAO_AUTH_URL,
  NAVER_AUTH_URL,
} from "../../common/constrant";
import googleLogo from "../../common/img/social/google-logo.png";
import kakaoLogo from "../../common/img/social/kakao-logo.png";
import naverLogo from "../../common/img/social/naver-logo.png";
import "./SignIn.css";

const SignIn = () => {
  const [email, onChangeEmail, setEmail] = useInput("");
  const [password, onChangePassword, setPassword] = useInput("");
  const navigate = useNavigate();
  const { register, handleSubmit, errors } = useForm({
    mode: "onChange",
  });

  const { mutate, isLoading } = useMutation(SignInApi, {
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
  const onSubmit = (data) => {
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
                        <label className="form__label" htmlFor="username_email">
                          <b>이메일주소</b>
                        </label>
                        <input
                          type="text"
                          className="form__input"
                          id="username_email"
                          name="email"
                          value={email}
                          onChange={onChangeEmail}
                        />
                      </div>
                      <div className="form__group mb--20">
                        <label className="form__label" htmlFor="login_password">
                          <b>패스워드</b>
                        </label>
                        <input
                          type="password"
                          className="form__input"
                          id="login_password"
                          name="pwd"
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
                      <img src={googleLogo} alt="Google" />
                    </a>

                    <a
                      className="btn btn-block social-btn kakao"
                      href={KAKAO_AUTH_URL}
                    >
                      <img src={kakaoLogo} alt="Kakao" />
                    </a>
                    <a
                      className="btn btn-block social-btn naver"
                      href={NAVER_AUTH_URL}
                    >
                      <img src={naverLogo} alt="Naver" />
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
