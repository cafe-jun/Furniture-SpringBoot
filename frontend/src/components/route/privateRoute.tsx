import { ReactElement } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getCookie } from "@common/util/cookie";
import React from "react";

interface PrivateRouteProps {
  children?: ReactElement; // Router.tsx에서 PrivateRoute가 감싸고 있는 Componet Element
  authentication: boolean; // true :인증을 반드시 해야하만 접속가능, false : 인증을 반디스 안해야만 접속 가능
}

interface Props {
  authentication: boolean;
  children: ReactElement;
}
export const PrivateRoute: React.FC<Props> = ({ authentication, children }) => {
  console.log(authentication);
  if (!authentication) {
    return <Outlet />;
  } else {
    return <Navigate to={"/signin"} />;
  }
};

// export const PrivateRoute = ({
//   authentication,
// }: PrivateRouteProps): React.ReactElement | null => {
//   const isAuthentication = getCookie("access_token");
//   if (authentication) {
//     return isAuthentication === null || isAuthentication === "false" ? (
//       <Navigate to={"/signin"} />
//     ) : (
//       <Outlet />
//     );
//   } else {
//     // 인증이 반드시 필요 없는 페이지
//     // 인증을 안햇을 경우 해당 페이지로 인증을 한 상태일 경우 main페이지로
//     return isAuthentication === null || isAuthentication === "false" ? (
//       <Outlet />
//     ) : (
//       <Navigate to={"/signin"} />
//     );
//   }
// };
