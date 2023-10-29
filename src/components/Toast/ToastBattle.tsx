import React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";

import { useForm } from "../../context/BattleContext";
import BattleModal from "../modal/BattleModal";
import TrashIcon from "../Icons/ToastIcon/TrashIcon";
import CloseIcon from "../Icons/ToastIcon/CloseIcon";

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
                  <TrashIcon />
                  Hero 1 Chosen
                </Button>
              )}

              {useContext.playerTwo !== 0 && (
                <Button
                  aria-label="unChoseHeroTwo"
                  color="inherit"
                  size="small"
                  onClick={unChoseHeroTwo}
                >
                  <TrashIcon />
                  Hero 2 Chosen
                </Button>
              )}
              <Button
                aria-label="close"
                color="inherit"
                size="small"
                onClick={closeToast}
              >
                <CloseIcon />
                Close
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
