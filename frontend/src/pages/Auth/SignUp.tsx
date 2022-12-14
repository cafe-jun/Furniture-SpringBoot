import TextInput from "@components/control/TextInput";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
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
import MuiButton from "@components/control/Button";
import { AuthInputLabel } from "./mui-styled";
import useInput from "@hook/useInput";
import { localSignUp } from "@api/auth/auth";

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
  const [
    passwordConfirmation,
    onChangePasswordConfirmation,
    setPasswordConfirmation,
  ] = useInput("");

  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  const { mutate, isLoading } = useMutation(localSignUp, {
    onSuccess: (data) => {
      navigate("/auth/sign_in");
    },
    onError: () => {
      alert("there was an error");
    },
    onSettled: () => {
      // queryClient.invalidateQueries("create");
    },
  });
  const onSubmit = (data: any) => {
    mutate({ email, name, password, passwordConfirmation });
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
                      <AuthInputLabel>?????????</AuthInputLabel>
                      <TextInput
                        name="email"
                        variant="outlined"
                        placeholder="?????????"
                        size="large"
                        fullWidth
                        value={email}
                        onChange={onChangeEmail}
                      />
                    </Grid>
                    <Grid item xs={9}>
                      <AuthInputLabel>??????</AuthInputLabel>
                      <TextInput
                        name="name"
                        variant="outlined"
                        placeholder="??????"
                        size="large"
                        fullWidth
                        value={name}
                        onChange={onChangeName}
                      />
                    </Grid>
                    <Grid item xs={9}>
                      <AuthInputLabel>????????????</AuthInputLabel>
                      <TextInput
                        type="password"
                        name="password"
                        variant="outlined"
                        placeholder="????????????"
                        size="large"
                        value={password}
                        onChange={onChangePassword}
                      />
                    </Grid>
                    <Grid item xs={9}>
                      <AuthInputLabel>???????????? ??????</AuthInputLabel>
                      <TextInput
                        type="password"
                        name="password"
                        variant="outlined"
                        placeholder="??????????????????"
                        size="large"
                        value={passwordConfirmation}
                        onChange={onChangePasswordConfirmation}
                      />
                    </Grid>
                  </Grid>
                  {/* {error && (
                    <ErrorMessage>ID ?????? ??????????????? ??????????????????</ErrorMessage> */}
                  {/* )} */}
                  <div className={classes.signInBtnContainer}>
                    <MuiButton
                      type="submit"
                      text="????????????"
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
