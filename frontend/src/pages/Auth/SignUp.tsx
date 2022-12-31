import TextInput from "@components/control/TextInput";
import { PasswordOutlined, PersonPinCircleOutlined } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import {
  AuthBody,
  AuthBox,
  AuthContainer,
  AuthContent,
  AuthHeader,
  SignInImg,
  SignInLogo,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { localSignIn, localSignUp } from "@api/auth/auth";
import { getCookie } from "@common/util/cookie";
import MuiButton from "@components/control/Button";
import { InputLabel } from "@mui/material";
import { AuthInputLabel } from "./mui-styled";
import MuiCheckBox from "@components/control/MuiCheckBox";
import useInput from "@hook/useInput";

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
    width: "75%",
    height: "50px",
  },
  signInBtnContainer: {
    marginTop: "2%",
  },
  label: {
    display: "flex",
    marginTop: "15px",
  },
});

const SignUp = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [email, onChangeEmail, setEmail] = useInput("");
  const [name, onChangeName, setName] = useInput("");
  const [password, onChangePassword, setPassword] = useInput("");
  const [passwordCheck, onChangePasswordCheck, setPasswordCheck] = useInput("");

  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  const { mutate, isLoading } = useMutation(localSignUp, {
    onSuccess: (data) => {
      console.log("회원가입 성공 처리");
    },
    onError: () => {
      alert("there was an error");
    },
    onSettled: () => {
      // queryClient.invalidateQueries("create");
    },
  });
  const onSubmit = (data: any) => {
    console.log(data);
    mutate({ email, name, password });
  };

  return (
    <div>
      <AuthBody>
        <AuthContainer>
          <AuthBox>
            <AuthHeader>
              <SignInLogo>
                <SignInImg />
              </SignInLogo>
              <AuthContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Grid container className={classes.signInForm} spacing={2}>
                    <Grid item xs={9}>
                      <AuthInputLabel>이메일</AuthInputLabel>
                      <TextInput
                        id="outlined-basic"
                        name="email"
                        variant="outlined"
                        placeholder="이메일"
                        size="large"
                        fullWidth
                        value={email}
                        onChange={onChangeEmail}
                      />
                    </Grid>
                    <Grid item xs={9}>
                      <AuthInputLabel>이름</AuthInputLabel>
                      <TextInput
                        id="outlined-basic"
                        name="name"
                        variant="outlined"
                        placeholder="이름"
                        size="large"
                        fullWidth
                        value={name}
                        onChange={onChangeName}
                      />
                    </Grid>
                    <Grid item xs={9}>
                      <AuthInputLabel>패스워드</AuthInputLabel>
                      <TextInput
                        type="password"
                        id="outlined-basic"
                        name="password"
                        variant="outlined"
                        placeholder="패스워드"
                        size="large"
                        value={password}
                        onChange={onChangePassword}
                      />
                    </Grid>
                    <Grid item xs={9}>
                      <AuthInputLabel>패스워드 확인</AuthInputLabel>
                      <TextInput
                        type="password"
                        id="outlined-basic"
                        name="password"
                        variant="outlined"
                        placeholder="패스워드확인"
                        size="large"
                        value={passwordCheck}
                        onChange={onChangePasswordCheck}
                      />
                    </Grid>
                  </Grid>
                  {/* {error && (
                    <ErrorMessage>ID 또는 패스워드를 확인해주세요</ErrorMessage> */}
                  {/* )} */}
                  <div className={classes.signInBtnContainer}>
                    <MuiButton
                      type="submit"
                      text="회원가입"
                      color="primary"
                      className={classes.signInButton}
                    />
                  </div>
                </form>
              </AuthContent>
            </AuthHeader>
          </AuthBox>
        </AuthContainer>
      </AuthBody>
    </div>
  );
};

export default SignUp;
