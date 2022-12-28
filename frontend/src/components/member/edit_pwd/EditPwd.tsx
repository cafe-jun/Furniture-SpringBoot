import React from "react";
import useInput from "@hook/useInput";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { editPassword } from "@api/member/member";

const EditPwd = () => {
  const [newPassword, onChangeNewPassword, SetNewPassword] = useInput("");
  const [checkPassword, onChangeCheckPassword, setCheckPassword] = useInput("");

  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });
  const { mutate, isLoading } = useMutation(editPassword, {
    onSuccess: (data) => {},
    onError: () => {
      alert("에러 발생");
    },
    onSettled: () => {
      // queryClient.invalidateQueries("create");
    },
  });
  const onSubmit = (data: any) => {
    mutate({ newPassword, checkPassword });
  };

  return (
    <div>
      <div className="main-content-wrapper">
        <div className="page-content-inner pt--75 pb--80">
          <div className="container">
            <div className="row">
              <div className="col-md-4"></div>
              <div className="form__group mb--20">
                <div className="login-box">
                  <form
                    className="form form--login"
                    method="post"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <input type="hidden" name="email" />
                    <div className="form__group mb--20">
                      <label className="form__label" htmlFor="new_password">
                        <b>새 패스워드</b>
                      </label>
                      <input
                        type="password"
                        className="form__input"
                        id="new_password"
                        name="pwd"
                        value={newPassword}
                        onChange={onChangeNewPassword}
                      />
                    </div>
                    <div className="form__group mb--20">
                      <label
                        className="form__label"
                        htmlFor="new_check_password"
                      >
                        <b>패스워드 확인</b>
                      </label>
                      <input
                        type="password"
                        className="form__input"
                        id="new_check_password"
                        name="pwdcheck"
                        value={checkPassword}
                        onChange={onChangeCheckPassword}
                      />
                    </div>
                    <div className="form__group mb--20">
                      <input
                        type="submit"
                        className="btn btn-fullwidth"
                        value="회원가입"
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

export default EditPwd;
