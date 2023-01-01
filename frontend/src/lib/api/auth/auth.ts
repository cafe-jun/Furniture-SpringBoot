import { apiWithoutInterceptor } from "@common/util/apiClient";
import { SignInPayload, SignUpPayload } from "@payload/auth/auth";

export const localSignIn = async (data: SignInPayload) => {
  return apiWithoutInterceptor.post("http://localhost:8080/auth/signin", {
    email: data.email,
    password: data.password,
  });
};

export const localSignUp = async (data: SignUpPayload) => {
  return apiWithoutInterceptor.post("http://localhost:8080/auth/signup", {
    email: data.email,
    password: data.password,
    name: data.name,
    password_confirmation: data.passwordConfirmation,
  });
};
