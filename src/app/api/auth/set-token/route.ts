import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { accessToken, refreshToken } = await req.json();

  if (!accessToken || !refreshToken) {
    return NextResponse.json({ error: "No token provided" }, { status: 400 });
  }

  const cookiesStore = await cookies();

  const decodedAccessToken = jwtDecode(accessToken as string);
  const decodedRefreshToken = jwtDecode(refreshToken as string);

  cookiesStore.set("accessToken", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Только HTTPS в продакшене
    path: "/",
    expires: new Date(decodedAccessToken.exp! * 1000),
    sameSite: "strict",
  });

  cookiesStore.set("refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    expires: new Date(decodedRefreshToken.exp! * 1000),
    sameSite: "strict",
  });

  return NextResponse.json(
    { message: "Tokens set successfully" },
    { status: 200 }
  );
}
