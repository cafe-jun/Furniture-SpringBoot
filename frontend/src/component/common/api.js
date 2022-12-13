import axios from "axios";

export async function getHello() {
  const { data } = await axios.get("/members/hello");
  return data;
}

export const memberLogin = async (data) => {
  return axios
    .post("/members/login", {
      email: data.email,
      password: data.password,
    })
    .then((response) => response.data);
};
