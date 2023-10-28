import { useForm } from "./../../../context/BattleContext";
import { Button } from "@mui/material";
import React from "react";

interface PropsBattle {
  id: number;
}

const BattleButton = ({ id }: PropsBattle) => {
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
    }

    if (useContext.playerOne !== 0) {
      setUseContext((prevState: any) => ({
        ...prevState,
        playerTwo: id,
      }));
    }
    console.log(useContext);
  };

  return (
    <Button variant="contained" color="error" onClick={openToast}>
      Battle
    </Button>
  );
};

export default BattleButton;
