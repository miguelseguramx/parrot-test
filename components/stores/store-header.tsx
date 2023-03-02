import styled from "styled-components"
import ParrotLogo from "@common/logo"
import { Store } from "@/types/store"
import Wrapper from "../common/wrapper"

const StoreHeaderStyled = styled.header`
  box-shadow: 0px 0px 10px 1px var(--gray);
  padding: 1rem 0;
  background: var(--black);
  color: var(--gray100);
  height: 60px;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  .store-header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  h1 {
    font-size: 1.8rem;
  }
  @media (max-width: 959.95px) {
    .parrot-logo {
      display: none;
    }
    h1 {
    font-size: 1.5rem;
    }
  }
`

function StoreHeader({ store } : { store: Store }) : JSX.Element {
  return (
    <StoreHeaderStyled>
      <Wrapper>
        <div className="store-header-container">
          <h1>{store?.name || ''}</h1>
          <ParrotLogo />
        </div>
      </Wrapper>
    </StoreHeaderStyled>
  )
}

export default StoreHeader
