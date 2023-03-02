import styled from 'styled-components'

const LoaderStyled = styled.div`
  display: inline-block;
  position: relative;
  width: 60px;
  height: 60px;
  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 50px;
    height: 50px;
    margin: 8px;
    border: 8px solid var(--orange);
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: var(--orange) transparent transparent transparent;
  }
  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

function Loader() {
  return (
    <LoaderStyled>
      <div />
      <div />
      <div />
      <div />
    </LoaderStyled>
  )
}

export default Loader
