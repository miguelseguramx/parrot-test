import { ChangeEventHandler } from 'react'
import styled from 'styled-components'

const SwitchStyled = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  input {
    display: none;
  }
  input:checked + .slider {
    background-color: var(--orange);
  }

  input:focus + .slider {
    box-shadow: 0 0 1px var(--orange);
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }
  .slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background-color: #ccc;
    transition: .4s;
    border-radius: 34px;
    &:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: .4s;
      border-radius: 50%;
    }
  }

`

function Switch({ checked, onChange } : {
  checked?: boolean,
  onChange?: ChangeEventHandler | undefined,
}) {
  return (
    <SwitchStyled>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="slider"></span>
    </SwitchStyled>
  )
}

export default Switch
