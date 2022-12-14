import React, { useEffect } from "react";
import { useMutation, useQuery } from "react-query";
import useInput from "../../hook/useInput";
import { getHello, authLogin } from "../../common/api";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getCookie } from "../../common/cookie";

const Login = () => {
  const [email, onChangeEmail, setEmail] = useInput("");
  const [password, onChangePassword, setPassword] = useInput("");
  const navigate = useNavigate();
  const { state } = useLocation();
  const { register, handleSubmit, errors } = useForm({
    mode: "onChange",
  });

  const { mutate, isLoading } = useMutation(authLogin, {
    onSuccess: (data) => {},
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
    if (getCookie("access_token")) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <section
        className="page-title-area bg-image ptb--80"
        data-bg-image={require("../../assets/img/login/login.jpg")}
      >
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-4"></div>
            <div className="col-6 col-md-4">
              <h1 className="page-title">로그인</h1>
            </div>
          </div>
        </div>
      </section>
      <div className="main-content-wrapper">
        <div className="page-content-inner pt--75 pb--80">
          <div className="container">
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <div className="login-box">
                  <h3
                    className="heading__terriary mb--30"
                    // style="text-align: center"
                  >
                    로그인
                    <form
                      className="form form--login"
                      action="/login_ok.fu"
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
                          //   style="size: 50px"
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
                            className="btn btn-size-sm"
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
                      </div>
                      <a className="forgot-pass" href="/">
                        <b>&nbsp;&nbsp;회원가입&nbsp;&nbsp;</b>
                      </a>
                      <a className="forgot-pass" href="/">
                        <b>&nbsp;&nbsp;패스워드 찾기&nbsp;</b>
                      </a>
                    </form>
                  </h3>
                  <br />
                  <a href="https://kauth.kakao.com/oauth/authorize?client_id=31d857a43c06796d21fa6fd041d12cd6&redirect_uri=http://192.168.16.12:8080<%=cp%>/login.fu&response_type=code">
                    <img
                      src={require("../../assets/img/login/kakao_login.png")}
                      alt="Logo"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
