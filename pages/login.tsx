import { getCsrfToken } from "next-auth/react"
import AuthLayout from "@/components/auth/auth-layout"
import LoginForm from "@/components/auth/login-form"
import { CtxOrReq } from "next-auth/client/_utils"

function Login({ csrfToken } : { csrfToken: string }) {
  return (
    <AuthLayout>
      <LoginForm csrfToken={csrfToken} />
    </AuthLayout>
  )
}

export async function getServerSideProps(context: CtxOrReq | undefined) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  }
}

export default Login
