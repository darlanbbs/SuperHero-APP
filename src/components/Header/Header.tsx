"use client";
import React, { useState } from "react";
import InputComponent from "../Input/Input";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-green-900 text-white">
      <h1 className="text-xl font-bold">Super Hero App</h1>
      <div className="flex items-center">
        <InputComponent
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Type name hero"
        />
        <button className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md">
          Search
        </button>
      </div>
    </div>
  );
};

export default Header;
