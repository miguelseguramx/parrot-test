
import { useState, useEffect, ChangeEvent } from 'react'
import { ChangeEventHandler } from 'react'

interface inputValue {
  value: string,
  onChange: ChangeEventHandler,
  active: boolean,
  setValue: Function,
  disable: boolean,
  setDisable: Function,
}

const useInputValue = (initialValue: any, handleChange: Function): inputValue =>  {
  const [value, setValue] = useState(initialValue)
  const [disable, setDisable] = useState(true)

  useEffect(() => {
    if (initialValue !== value) {
      setValue(initialValue)
    }
  }, [initialValue])

  const onChange = (event: ChangeEvent) => {
    const newValue = event.target.textContent
    setValue(newValue)
    if (!newValue) {
      setDisable(true)
    }
    setDisable(false)
    if (handleChange) handleChange(event)
  }

  let active = false
  if (value) {
    active = true
  }

  return {
    value, onChange, active, setValue, disable, setDisable,
  }
}

export default useInputValue
