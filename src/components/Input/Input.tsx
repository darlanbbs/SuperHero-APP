import React from "react";

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const InputComponent = ({ value, onChange, placeholder }: InputProps) => {
  return (
    <input
      type="text"
      className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500 decoration-black text-stone-950"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default InputComponent;
