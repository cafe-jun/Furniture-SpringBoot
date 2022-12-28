import axios from "axios";
import { apiWithoutInterceptor } from "@common/util/apiClient";
import { SignInPayload, SignUpPayload } from "@payload/auth/auth";

export async function getHello() {
  const { data } = await axios.get("/members/hello");
  return data;
}

export const localSignIn = async (data: SignInPayload) => {
  return apiWithoutInterceptor.post("/autn/signin", {
    email: data.email,
    password: data.password,
  });
};

export const localSignUp = async (data: SignUpPayload) => {
  return apiWithoutInterceptor.post("auth/signup", {
    email: data.email,
    password: data.password,
    name: data.name,
  });
};
