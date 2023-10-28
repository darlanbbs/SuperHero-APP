import * as React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import { useForm } from "@/context/BattleContext";
import BattleModal from "../modal/BattleModal";

export default function ToastBattle() {
  const { useContext, setUseContext } = useForm();

  const closeToast = () => {
    setUseContext((prevState: any) => ({
      ...prevState,
      open: false,
    }));
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Collapse in={useContext.open}>
        <Alert
          action={
            <Button
              aria-label="close"
              color="inherit"
              size="small"
              onClick={closeToast}
            >
              X
            </Button>
          }
          sx={{ mb: 2 }}
        >
          <BattleModal />
        </Alert>
      </Collapse>
    </Box>
  );
}
