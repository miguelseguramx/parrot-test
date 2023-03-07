import styled from "styled-components"
import ParrotLogo from "@common/logo"
import { Store } from "@/types/store"
import Wrapper from "@common/wrapper"
import { OutlineButton } from "@common/button"
import { signOut } from "next-auth/react"

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
  .store-user-containter {
    display: flex;
    gap: 1rem;
    button {
      height: auto;
      padding: 0;
    }
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
          <ParrotLogo />
          <div className="store-user-containter">
            <h1>{store?.name || ''}</h1>
            <OutlineButton onClick={() => signOut()}>
              Log out
            </OutlineButton>
          </div>
        </div>
      </Wrapper>
    </StoreHeaderStyled>
  )
}

export default StoreHeader
