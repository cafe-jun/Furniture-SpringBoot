import React from "react";

const SearchPws = () => {
  return (
    <div className="main-content-wrapper">
      <div className="page-content-inner pt--75 pb--80">
        <div className="container">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <div className="login-box">
                <h3 className="heading__terriary mb--30">패스워드찾기</h3>
                <form
                  className="form form--login"
                  method="post"
                  name="searchPassword"
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
                    />
                    <div className="form__group mb--20">
                      <input
                        type="button"
                        className="form__input"
                        value="이메일로비밀번호찾기"
                      />
                    </div>
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

export default SearchPws;
