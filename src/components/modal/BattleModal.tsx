// Adicione os imports necessários
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { fetchApiData } from "@/services/db";
import { useForm } from "@/context/BattleContext";
import { Superhero } from "@/Types/DataInterface";
import CombatIcon from "../Icons/StatsIcons/CombatIcon";
import DurabilityIcon from "../Icons/StatsIcons/DurabilityIcon";
import IntelligenceIcon from "../Icons/StatsIcons/IntelligenceIcon";
import PowerIcon from "../Icons/StatsIcons/PowerIcon";
import SpeedIcon from "../Icons/StatsIcons/SpeedIcon";
import StrengthIcon from "../Icons/StatsIcons/StrengthIcon";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "black",
  color: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const [playerOne, setPlayerOne] = React.useState<Superhero | null>(null);
  const [playerTwo, setPlayerTwo] = React.useState<Superhero | null>(null);
  const { useContext } = useForm();

  const fetchData = async () => {
    try {
      const data = await fetchApiData();
      const PlayerOne = data.find(
        (item: Superhero) => item.id === useContext.playerOne
      );
      const PlayerTwo = data.find(
        (item: Superhero) => item.id === useContext.playerTwo
      );
      setPlayerOne(PlayerOne);
      setPlayerTwo(PlayerTwo);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOpen = () => {
    fetchData();
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        disabled={useContext.playerOne === 0 || useContext.playerTwo === 0}
      >
        Open modal
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="flex space-x-4 justify-center">
          {playerOne && playerTwo && (
            <>
              <div className="flex flex-col items-center">
                <img
                  src={playerOne.images.lg}
                  alt={playerOne.name}
                  className="mb-2"
                />
                <Typography variant="h6" component="h2">
                  {playerOne.name ? playerOne.name : "Player One"}
                </Typography>
                <div className="flex items-center">
                  <CombatIcon />
                  <span>{playerOne.powerstats.combat}</span>
                </div>
                <div className="flex items-center">
                  <DurabilityIcon />
                  <span>{playerOne.powerstats.durability}</span>
                </div>
                <div className="flex items-center">
                  <IntelligenceIcon />
                  <span>{playerOne.powerstats.intelligence}</span>
                </div>
                <div className="flex items-center">
                  <PowerIcon />
                  <span>{playerOne.powerstats.power}</span>
                </div>
                <div className="flex items-center">
                  <SpeedIcon />
                  <span>{playerOne.powerstats.speed}</span>
                </div>
                <div className="flex items-center">
                  <StrengthIcon />
                  <span>{playerOne.powerstats.strength}</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={playerTwo.images.lg}
                  alt={playerTwo.name}
                  className="mb-2"
                />
                <Typography variant="h6" component="h2">
                  {playerTwo.name ? playerTwo.name : "Player Two"}
                </Typography>
                <div className="flex items-center">
                  <CombatIcon />
                  <span>{playerTwo.powerstats.combat}</span>
                </div>
                <div className="flex items-center">
                  <DurabilityIcon />
                  <span>{playerTwo.powerstats.durability}</span>
                </div>
                <div className="flex items-center">
                  <IntelligenceIcon />
                  <span>{playerTwo.powerstats.intelligence}</span>
                </div>
                <div className="flex items-center">
                  <PowerIcon />
                  <span>{playerTwo.powerstats.power}</span>
                </div>
                <div className="flex items-center">
                  <SpeedIcon />
                  <span>{playerTwo.powerstats.speed}</span>
                </div>
                <div className="flex items-center">
                  <StrengthIcon />
                  <span>{playerTwo.powerstats.strength}</span>
                </div>
              </div>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
}
