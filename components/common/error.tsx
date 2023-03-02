import styled from 'styled-components'

const ErrorStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 60px);
  text-align: center;
  color: var(--error);
  flex-direction: column;
  .sad {
    font-size: 6rem;
    line-height: 5rem;
  }
  h1 {
    font-size: 2.5rem;
    line-height: 100%;
    margin: 1rem 0;
  }
  h6 {
    font-size: 2rem;
    line-height: 100%;
  }
`

function Error() {
  return (
    <ErrorStyled>
      <span className="sad">&#9785;</span>
      <h1>Ups...</h1>
      <h6>Ha ocurrido un error <br /> vuelve mas tarde</h6>
    </ErrorStyled>
  )
}

export default Error
