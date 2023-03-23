import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

type TodoInputProps = {
  label: string;
  defaultValue?: string;
  onSubmit?: (title: string) => void;
  placeholder?: string;
};

const TodoInput = ({
  label,
  defaultValue,
  placeholder,
  onSubmit,
}: TodoInputProps) => {
  const [value, setValue] = useState("");
  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.currentTarget.value);
  };

  return (
    <form
      style={{
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      <TextField
        id="standard-basic"
        label={label}
        defaultValue={defaultValue}
        type="text"
        onChange={handleInputChange}
        placeholder={placeholder}
      />
      <Button
        variant="contained"
        onClick={() => onSubmit?.(value)}
        style={{
          marginLeft: 16,
        }}
      >
        Submit
      </Button>
    </form>
  );
};

export default TodoInput;
