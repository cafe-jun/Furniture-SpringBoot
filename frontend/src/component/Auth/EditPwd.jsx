import React from "react";

const EditPwd = () => {
  return (
    <div>
      <div className="form__group mb--20">
        <input type="hidden" name="email" />
        <label className="form__label" htmlFor="new_password">
          <b>새 패스워드</b>
        </label>
        <input
          type="password"
          className="form__input"
          id="new_password"
          name="pwd"
        />
        <label className="form__label" htmlFor="new_check_password">
          <b>패스워드 확인 </b>
        </label>
        <input
          type="password"
          className="form__input"
          id="new_check_password"
          name="pwdcheck"
        />
      </div>
    </div>
  );
};

export default EditPwd;
