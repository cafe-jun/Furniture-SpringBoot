export type EditPwdPayload = {
  newPassword: string;
  checkPassword: string;
};

export type ProfileResPayload = {
  check: boolean;
  information: {
    createdDate: string;
    modifiedDate: string;
    id: number;
    email: string;
    name: string;
    emailVerified: boolean;
    imageUrl: string;
    provider: string;
    role: string;
    providerId: number;
  };
};
