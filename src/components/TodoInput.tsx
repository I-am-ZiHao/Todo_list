import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

type TodoInputProps = {
  label: string,
  defaultValue?: string,
  onSubmit?: (title: string) => void
}

const TodoInput = ({label, defaultValue, onSubmit}: TodoInputProps) => {
  const [value, setValue] = useState('');
  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.currentTarget.value);
  }

  return (
    <form>
      <TextField id="standard-basic" label={label} defaultValue={defaultValue} type="text" onChange={handleInputChange} />
      <Button variant="contained" onClick={() => onSubmit && onSubmit(value)} >送出</Button>
    </form>
  )
}

export default TodoInput;