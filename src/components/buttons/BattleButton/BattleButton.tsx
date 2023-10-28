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
      className="bg-red-500 text-white px-4 py-2 rounded"
      onClick={openToast}
    >
      Battle
    </button>
  );
};

export default BattleButton;
