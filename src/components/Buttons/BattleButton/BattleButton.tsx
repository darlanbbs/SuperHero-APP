import React from "react";
import { useForm } from "./../../../context/BattleContext";

interface ButtonBattleProps {
  id: number;
}

const BattleButton = ({ id }: ButtonBattleProps) => {
  const { useContext, setUseContext } = useForm();

  const openToast = () => {
    setUseContext((prevState: any) => ({
      ...prevState,
      open: true,
    }));

    if (useContext.playerOne === 0) {
      setUseContext((prevState: any) => ({
        ...prevState,
        playerOne: id,
      }));
    } else if (useContext.playerOne !== 0) {
      setUseContext((prevState: any) => ({
        ...prevState,
        playerTwo: id,
      }));
    }
  };

  return (
    <button
      className={`px-4 py-2 rounded ${
        useContext.playerOne !== 0 && useContext.playerTwo !== 0
          ? "bg-red-500 text-white opacity-50 cursor-not-allowed"
          : "bg-red-500 text-white"
      }`}
      onClick={openToast}
      disabled={useContext.playerOne !== 0 && useContext.playerTwo !== 0}
    >
      Battle
    </button>
  );
};

export default BattleButton;
