import { ChangeEventHandler } from 'react'
import styled from 'styled-components'

export const InputFieldStyled = styled.div`
  label {
    display: inline-block;
    margin-block-end: .5rem;
    font-size: 16px;
    font-weight: 400;
    font-family: inherit;
  }
  input {
    display: block;
    background: var(--white);
    font-family: inherit;
    box-sizing: border-box;
    padding: 1.1rem 1rem;
    position: relative;
    font-size: 16px;
    box-sizing: border-box;
    transition: border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-weight: 400;
    border-radius: 4px;
    border: 1px solid var(--gray300);
    height: 56px;
    outline: none;
    &:hover {
      border-color: var(--black);
    }
    &:active {
      border-color: var(--black);
    }
  }
`

interface Props {
  label: string,
  onChange: ChangeEventHandler,
  type: string,
  value: string,
  name: string,
  dataCy: string,
  required: boolean,
  placeholder: string,
}

function InputField(props: Props) {
  const {
    label, onChange, type, value, name, dataCy, required, placeholder
  } = props
  return (
    <InputFieldStyled>
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        type={type}
        data-cy={dataCy}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        required={required}
        name={name}
      />
    </InputFieldStyled>
  )
}

export default InputField
