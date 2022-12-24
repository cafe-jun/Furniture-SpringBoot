import React from "react";
import ChangePwd from "./ChangePwd";

const Profile = () => {
  return (
    <div className="main-content-wrapper">
      <div className="page-content-inner pt--75 pb--80">
        <div className="container">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <div className="login-box">
                <h3 className="heading__terriary mb--30">회원수정</h3>
                <form
                  className="form form--login"
                  name="register"
                  method="post"
                >
                  <div className="form__group mb--20">
                    <label className="form__label" htmlFor="email">
                      <b>이메일주소</b>
                    </label>
                    <input
                      type="text"
                      className="form__input"
                      id="email"
                      name="email"
                    />

                    <div className="form__group mb--20">
                      <label className="form__label" htmlFor="name">
                        <b>이 름</b>
                      </label>
                      <input
                        type="text"
                        className="form__input"
                        id="name"
                        name="name"
                      />
                    </div>
                    <ChangePwd />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
