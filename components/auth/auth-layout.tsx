import styled from "styled-components"
import ParrotLogo from "../common/logo"

const AuthLayoutStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  height: 100vh;
  .auth-description {
    padding: 1.5rem;
    background: var(--black);
    color: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
    a {
      text-decoration: underline;
    }
  }
  .auth-content {
    padding: 2rem 1.5rem;
  }
  @media (max-width: 959.95px) {
    display: block;
    .h2 {
      margin: 0px;
    }
    .auth-description {
      align-items: center;
    }
    .h6 {
      display: none;
    }
  }
`

function AuthLayout({ children } : { children: JSX.Element }) {
  return (
    <AuthLayoutStyled>
      <div className="auth-description">
        <ParrotLogo />
        <h1 className="h2">El software para los restaurantes de hoy</h1>
        <p className="h6">Tu restaurante está listo para llegar más alto</p>
        <a href="https://miguelseguramx.com" target="_blank" rel="noopener noreferrer">
          Creado con ❤️ por miguelseguramx
        </a>
      </div>
      <div className="auth-content">
        {children}
      </div>
    </AuthLayoutStyled>
  )
}

export default AuthLayout
