import React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import { FaTimes } from "react-icons/fa";
import { BiTrash } from "react-icons/bi";

import { useForm } from "@/context/BattleContext";
import BattleModal from "../modal/BattleModal";

export default function ToastBattle() {
  const { useContext, setUseContext } = useForm();

  const unChoseHeroOne = () => {
    setUseContext((prevState: any) => ({
      ...prevState,
      playerOne: 0,
    }));
  };

  const unChoseHeroTwo = () => {
    setUseContext((prevState: any) => ({
      ...prevState,
      playerTwo: 0,
    }));
  };

  const closeToast = () => {
    setUseContext((prevState: any) => ({
      ...prevState,
      open: false,
      playerTwo: 0,
      playerOne: 0,
    }));
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Collapse in={useContext.open}>
        <Alert
          severity="info"
          variant="filled"
          action={
            <div className="flex justify-center items-center my-0">
              {useContext.playerOne !== 0 && (
                <Button
                  aria-label="unChoseHeroOne"
                  color="inherit"
                  size="small"
                  onClick={unChoseHeroOne}
                >
                  <BiTrash />
                  Heroi 1 Escolhido
                </Button>
              )}

              {useContext.playerTwo !== 0 && (
                <Button
                  aria-label="unChoseHeroTwo"
                  color="inherit"
                  size="small"
                  onClick={unChoseHeroTwo}
                >
                  <BiTrash />
                  Heroi 2 Escolhido
                </Button>
              )}
              <Button
                aria-label="close"
                color="inherit"
                size="small"
                onClick={closeToast}
              >
                <FaTimes />
                Fechar
              </Button>
            </div>
          }
        >
          <BattleModal />
        </Alert>
      </Collapse>
    </Box>
  );
}
