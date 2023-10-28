import React from "react";
import TextField from "@mui/material/TextField";

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const InputComponent = ({ value, onChange, placeholder }: InputProps) => {
  return (
    <TextField
      variant="filled"
      color="primary"
      focused
      fullWidth
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default InputComponent;
