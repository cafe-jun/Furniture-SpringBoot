import apiClient from "@common/util/apiClient";
import { apiWithoutInterceptor } from "@common/util/apiClient";
import { EditPwdPayload, ProfileResPayload } from "@payload/member/member";

export const Profile = async (): Promise<ProfileResPayload> => {
  const { data } = await apiClient.get("/member/profile");
  return data;
};
export const editPassword = async (data: EditPwdPayload) => {
  return apiWithoutInterceptor.post("/member/editPassword", {
    newPassword: data.newPassword,
    checkPassword: data.checkPassword,
  });
};
