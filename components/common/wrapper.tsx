import styled from 'styled-components'

const WrapperStyled = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 1200px;
  @media screen and (min-width: 768px) {
    padding: 0 3rem;
  }
  @media screen and (min-width: 1366px) {
    padding: 0 5rem;
  }
`

function Wrapper({ children } : {
  children: JSX.Element,
}) : JSX.Element {
  return (
    <WrapperStyled className="wrapper">
      {children}
    </WrapperStyled>
  )
}

export default Wrapper
