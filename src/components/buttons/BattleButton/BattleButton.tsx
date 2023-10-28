import { useForm } from "@/context/BattleContext";
import { Button } from "@mui/material";
import React from "react";

type Props = {};

const BattleButton = (props: Props) => {
  const { useContext, setUseContext } = useForm();

  const openToast = () => {
    setUseContext((prevState: any) => ({
      ...prevState,
      open: true,
    }));
  };

  return (
    <Button variant="contained" color="error" onClick={openToast}>
      Battle
    </Button>
  );
};

export default BattleButton;
