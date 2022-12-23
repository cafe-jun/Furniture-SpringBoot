import React from "react";
import useInput from "../../hook/useInput";
import { SignUp } from "../../common/api";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";

const Register = () => {
  const [email, onChangeEmail, setEmail] = useInput("");
  const [password, onChangePassword, setPassword] = useInput("");
  const [name, onChangeName, setName] = useInput("");
  const { register, handleSubmit, errors } = useForm({
    mode: "onChange",
  });
  const { mutate, isLoading } = useMutation(SignUp, {
    onSuccess: (data) => {},
    onError: () => {
      alert("there was an error");
    },
    onSettled: () => {
      // queryClient.invalidateQueries("create");
    },
  });
  const onSubmit = (data) => {
    mutate({ email, password, name });
  };

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
              <h1 className="page-title">회원가입</h1>
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
                  <h3 className="heading__terriary mb--30">회원가입</h3>
                  <form
                    className="form form--login"
                    name="register"
                    method="post"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="form__group mb--20">&nbsp;</div>
                    <div className="form__group mb--20">
                      <label className="form__label" htmlFor="email">
                        <b>이메일주소</b>
                      </label>
                      <input
                        type="text"
                        className="form__input"
                        id="email"
                        name="email"
                        value={email}
                        onChange={onChangeEmail}
                      />
                    </div>
                    <div className="form__group mb--20">
                      <label className="form__label" htmlFor="password">
                        <b>패스워드</b>
                      </label>
                      <input
                        type="password"
                        className="form__input"
                        id="password"
                        name="password"
                        value={password}
                        onChange={onChangePassword}
                      />
                    </div>
                    <div className="form__group mb--20">
                      <label className="form__label" htmlFor="name">
                        <b>이 름</b>
                      </label>
                      <input
                        type="text"
                        className="form__input"
                        id="name"
                        name="name"
                        value={name}
                        onChange={onChangeName}
                      />
                    </div>
                    <div className="form__group mb--20">&nbsp;</div>
                    <div className="form__group mb--20">
                      <input
                        type="submit"
                        className="form__input"
                        value="회원가입"
                      />
                      <input
                        type="button"
                        className="form__input"
                        value="회원가입취소"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
