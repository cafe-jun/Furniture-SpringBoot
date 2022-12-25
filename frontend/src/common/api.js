import axios from "axios";
import { apiWithoutInterceptor } from "./util/apiClient";

export async function getHello() {
  const { data } = await axios.get("/members/hello");
  return data;
}

export const SignInApi = async (data) => {
  return apiWithoutInterceptor
    .post("/autn/signin", {
      email: data.email,
      password: data.password,
    })
    .then((response) => response.data);
};

export const SignUp = async (data) => {
  return apiWithoutInterceptor.post("auth/signup", {
    email: data.email,
    password: data.password,
    name: data.name,
  });
};

export const Profile = async (data) => {
  return apiWithoutInterceptor.post("member/profile", {
    email: data.email,
    name: data.name,
  });
};
