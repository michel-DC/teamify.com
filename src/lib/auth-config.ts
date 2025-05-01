export const authOptions = {
    secret: process.env.JWT_SECRET,
    cookieName: "token",
    cookieOptions: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
    },
  };
  