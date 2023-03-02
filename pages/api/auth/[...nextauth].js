import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { createTokenService, refreshTokenService } from "@/services/auth"
import { getUserService } from "@/services/user"
import { addMinutes } from "@/lib/time"

export default NextAuth({
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'credentials',
      credentials: {
        email: { type: 'email' },
        password: { type: 'password' },
      },
      async authorize(credentials, req) {
        if (!credentials) {
          throw new Error( JSON.stringify({
            error: 'No active account found with the given credential', status: 401,
          }))
        }

        const token = await createTokenService(credentials?.email, credentials?.password)

        if (!token.access) {
          throw new Error( JSON.stringify({ error: token.errors, status: 401 }))
        }

        const user = await getUserService(token.access)

        if (user) {
          return {
            id: 'sa',
            ...user,
            ...token,
          }
        } else {
          throw new Error( JSON.stringify({
            error: 'No active account found with the given credential', status: 401,
          }))
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt(params) {
      const { token, user, account } = params

      if (user) {
        return {
          accessToken: user.access,
          refreshToken: user.refresh,
          expiresAt: Date.now() + 25 * 60 * 1000,
          ...user.result,
        }
      }

      if (Date.now() < token.expiresAt) {
        return token
      }

      const newToken = await refreshTokenService(token.refreshToken)

      if (!newToken) return null

      return {
        ...token,
        accessToken: newToken.access,
        refreshToken: newToken.refresh,
        expiresAt: Date.now() + 25 * 60 * 1000,
      }
    },
    async session(params) {
      const { session, token } = params

      session.user = {
        ...token,
        name: token.username,
      }

      return session
    },
  },
  secret: process.env.JWT_SECRET,
  session: {
    maxAge: 60 * 30,
  },
  jwt: {
    maxAge: 60 * 30,
  },
  // Enable debug messages in the console if you are having problems
  // debug: true,
})