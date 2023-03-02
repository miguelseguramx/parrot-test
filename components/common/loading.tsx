import styled from 'styled-components'
import Loader from './loader'

const LoadingStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 60px);
`

function Loading() {
  return (
    <LoadingStyled>
      <Loader />
    </LoadingStyled>
  )
}

export default Loading
