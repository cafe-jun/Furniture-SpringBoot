import React from "react";

import { NaverLogoImg } from "@components/member/signin/socialLogo";
import { Icon } from "@mui/material";
export const NaverLogo = () => (
  <Icon>
    <img src={NaverLogoImg} height={25} width={25} />
  </Icon>
);
