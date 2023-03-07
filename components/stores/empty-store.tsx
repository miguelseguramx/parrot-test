import styled from 'styled-components'

const EmptyStoreStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 60px);
  text-align: center;
  color: var(--gray300);
  flex-direction: column;
  h6 {
    font-size: 2rem;
    line-height: 100%;
  }
`

function EmptyStore() {
  return (
    <EmptyStoreStyled>
      <h6>Aun no tienes productos</h6>
    </EmptyStoreStyled>
  )
}

export default EmptyStore
