"use client";
import React, { useState } from "react";
import InputComponent from "../Input/Input";

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Header = ({ value, onChange }: InputProps) => {
  return (
    <div className="flex items-center justify-between p-4 bg-green-900 text-white">
      <h1 className="text-xl font-bold">Super Hero App</h1>
      <div className="flex items-center">
        <InputComponent
          value={value}
          onChange={onChange}
          placeholder="Type name hero"
        />
      </div>
    </div>
  );
};

export default Header;
