import { apiWithoutInterceptor } from "@common/util/apiClient";
import { EditPwdPayload, ProfilePayload } from "@payload/member/member";

export const Profile = async (data: ProfilePayload) => {
  return apiWithoutInterceptor.post("member/profile", {
    email: data.email,
    name: data.name,
  });
};
export const editPassword = async (data: EditPwdPayload) => {
  return apiWithoutInterceptor.post("member/editPassword", {
    newPassword: data.newPassword,
    checkPassword: data.checkPassword,
  });
};
