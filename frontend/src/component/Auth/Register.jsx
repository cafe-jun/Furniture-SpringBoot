import React from "react";

const Register = () => {
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
                  <h3
                    className="heading__terriary mb--30"
                    // style="text-align: center"
                  >
                    회원가입
                  </h3>
                  <form
                    className="form form--login"
                    name="register"
                    method="post"
                  >
                    <div className="form__group mb--20">&nbsp;</div>
                    <div className="form__group mb--20">
                      <label className="form__label" for="email">
                        <b>이메일주소</b>
                      </label>
                      <input
                        type="text"
                        className="form__input"
                        id="email"
                        name="email"
                        // style="size: 50px"
                      />
                    </div>
                    <div className="form__group mb--20">
                      <label className="form__label" for="password">
                        <b>패스워드</b>
                      </label>
                      <input
                        type="password"
                        className="form__input"
                        id="password"
                        name="pwd"
                      />
                    </div>
                    <div className="form__group mb--20">
                      <label className="form__label" for="name">
                        <b>이 름</b>
                      </label>
                      <input
                        type="text"
                        className="form__input"
                        id="name"
                        name="name"
                      />
                    </div>
                    <div className="form__group mb--20">
                      <label className="form__label">
                        <b>휴대전화</b>
                      </label>
                      <select id="phone1" name="phone1" className="form__input">
                        <option value="010">010</option>
                        <option value="011">011</option>
                        <option value="016">016</option>
                        <option value="017">017</option>
                        <option value="018">018</option>
                        <option value="019">019</option>
                      </select>
                      <input
                        type="text"
                        className="form__input"
                        id="phone2"
                        name="phone2"
                        maxlength="8"
                        placeholder="'-'를 제외하고 입력하세요"
                      />
                    </div>
                    <div className="form__group mb--20">&nbsp;</div>
                    <div className="form__group mb--20">
                      <input
                        type="text"
                        id="sample4_detailAddress"
                        name="addr3"
                        placeholder="상세주소"
                        className="form__input"
                        //  style="height: 50px"
                      />
                      <br />
                    </div>

                    <div className="form__group mb--20">
                      <input
                        type="button"
                        className="form__input"
                        value="회원가입"
                        // style="background-color: #FF5151; font-size:13pt; color:#ffffff;"
                      />
                      <a href="home.fu">
                        <input
                          type="button"
                          className="form__input"
                          value="회원가입취소"
                          //   style="background-color: #FF5151; font-size:13pt; color:#ffffff;"
                        />
                      </a>
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
