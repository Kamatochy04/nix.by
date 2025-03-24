export const API_PATHS = {
  categories: (searchString?: string) =>
    `v1/api/categories?isMain=true${
      searchString ? `&search=${searchString}` : ""
    }`,
  auth: {
    createUser: "v1/api/auth/sign-up",
    logInUser: "v1/api/auth/login",
    googleLogin: "v1/api/auth/google/login",
    googleCallback: "v1/api/auth/google/callback",
    recoveryPasswordEmail: "/v1/api/auth/remind",
    recoveryPassword: "/v1/api/auth/check-remind",
  },
  apiRouts: {
    setServerToken: "api/auth/set-token",
    getServerToken: "api/auth/get-token",
    deleteServerToken: "api/auth/delete-token",
  },
};
