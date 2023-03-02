import styled from "styled-components"

const Button = styled.button`
  border: none;
  padding: 1rem 2rem;
  height: 3.5rem;
  font-size: 1.125rem;
  min-width: 8.3125rem;
  max-width: fit-content;
  line-height: 1.5;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-weight: 500;
  border-radius: 4px;
  letter-spacing: 0.02857em;
  cursor: pointer;
  font-family: inherit;
`

export const DarkButton = styled(Button)`
  color: var(--white);
  background-color: var(--black);
  ${({ disabled }) =>  disabled ? `
    background-color: var(--gray200);
  ` : `
    &:hover {
      background-color: var(--gray700);
    }
    &:active {
      background-color: var(--black);
    }
  `}
`

export const OutlineButton = styled(Button)`
  background: var(--white);
  border: 1px solid var(--black);
  ${({ disabled }) =>  disabled ? `
    color: var(--gray200);
    border-color: var(--gray200);
  ` : `
    &:hover {
      transform: scale(1.07);
      background: var(--gray100);
      border: none;
    }
    &:active {
      transform: scale(1);
      border: none;
    }
  `}
`
