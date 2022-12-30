import React from "react";

import { KakaoLogoImg } from "@components/member/signin/socialLogo";
import { Icon } from "@mui/material";
export const KakaoLogo = () => (
  <Icon>
    <img src={KakaoLogoImg} height={19} width={20} />
  </Icon>
);
