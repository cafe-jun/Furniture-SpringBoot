import Main from "@components/main";
import EditPwd from "@components/member/edit_pwd/EditPwd";
import OAuth2RedirectHandler from "@components/member/oauth2/oAuth2RedirectHandler";
import Profile from "@components/member/profile/Profile";
import SearchPws from "@components/member/search_pwd/SearchPwd";
import SignIn from "@components/member/signin/SignIn";
import SignUp from "@components/member/signup/SignUp";
import { ComponentRouter } from "@payload/route/route";

export const privateComponentRouters: ComponentRouter[] = [
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/edit_password",
    component: EditPwd,
  },
  {
    path: "/search_password",
    component: SearchPws,
  },
];

export const publicComponentRouters: ComponentRouter[] = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/signup",
    component: SignUp,
  },
  {
    path: "/signin",
    component: SignIn,
  },
  {
    path: "/oauth2/redirect",
    component: OAuth2RedirectHandler,
  },
];
