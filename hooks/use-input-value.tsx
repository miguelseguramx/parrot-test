
import { useState, ChangeEvent } from "react"
import { ChangeEventHandler } from "react"

interface inputValue {
  value: string,
  onChange: ChangeEventHandler,
  setValue: Function,
}

const useInputValue = (initialValue: any, handleChange?: Function): inputValue =>  {
  const [value, setValue] = useState(initialValue)

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    setValue(newValue)
    if (handleChange) handleChange(event)
  }

  return {
    value, onChange, setValue,
  }
}

export default useInputValue
