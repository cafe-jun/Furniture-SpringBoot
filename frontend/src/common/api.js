import axios from "axios";
import { apiWithoutInterceptor } from "./util/apiClient";

export async function getHello() {
  const { data } = await axios.get("/members/hello");
  return data;
}

export const authLogin = async (data) => {
  return apiWithoutInterceptor
    .post("/members/login", {
      email: data.email,
      password: data.password,
    })
    .then((response) => response.data);
};
