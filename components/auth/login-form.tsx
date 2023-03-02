import { FormEvent, useState } from "react"
import styled from "styled-components"
import { signIn } from "next-auth/react"
import useInputValue from "@/hooks/use-input-value"
import InputField from "@common/input"
import { DarkButton } from "@common/button"
import Notification from "@common/notification"
import { useRouter } from "next/router"

const LoginStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  .login-container {
    width: 100%;
    max-width: 400px;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  @media (max-width: 959.95px) {
    margin: 2rem 0;
    h3 {
      display: none;
    }
  }
`

function Login({ csrfToken } : { csrfToken: string }) {
  const { push } = useRouter()
  const { value: emailValue, onChange: onChangeEmail } = useInputValue('')
  const { value: passValue, onChange: onChangePass } = useInputValue('')
  const [error, setError] = useState<string>('')

  const handleSubmit = async (e: FormEvent) : Promise<void> => {
    e.preventDefault()
    setError('')
    const res = await signIn('credentials', {
      redirect: false,
      email: emailValue,
      password: passValue,
      callbackUrl: `${window.location.origin}`,
    })
    console.log(res)
    if (res?.error) {
      setError('Las credenciales son incorrectas')
    }
    if (res?.ok && res.url) {
      push(res.url)
    }
  }

  return (
    <LoginStyled>
      <div className="login-container">
        <h3>Conéctate aquí</h3>
        <form onSubmit={handleSubmit}>
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <InputField
            label="Correo electrónico"
            name="email"
            dataCy="email"
            placeholder="Ingresa tu correo electrónico"
            type="email"
            onChange={onChangeEmail}
            value={emailValue}
            required
          />
          <InputField
            label="Contraseña"
            name="password"
            dataCy="password"
            placeholder="Ingresa tu contraseña"
            type="password"
            onChange={onChangePass}
            value={passValue}
            required
          />
          <DarkButton data-cy="login-btn">
            Iniciar sesión
          </DarkButton>
        </form>
      </div>
      {error ? (
        <Notification message={error} error dataCy="login-error" />
      ) : null}
    </LoginStyled>
  )
}

export default Login
