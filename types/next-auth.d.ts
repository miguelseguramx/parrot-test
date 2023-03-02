import NextAuth, { DefaultSession } from "next-auth"
import { JWT } from "next-auth/jwt"
import { Store } from "./types/store"

declare module "next-auth" {
  interface Session {
    user: {
      accessToken: string,
      refreshToken: string,
      expiresAt: number,
      uuid: string,
      stores: Store[] | null,
      username: string,
      iat: number,
      exp: number,
      jti: string,
    } & DefaultSession["user"]
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken: string,
    refreshToken: string,
    expiresAt: number,
    uuid: string,
    stores: Store[] | null,
    username: string,
    iat: number,
    exp: number,
    jti: string,
  }
}
