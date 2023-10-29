import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

import { fetchApiData } from "../../services/db";
import { useForm } from "@/context/BattleContext";
import { Superhero } from "../../Types/DataInterface";

import WinnerMessage from "./WinnerMessage/WinnerMessage";
import PlayerStatus from "./PlayerStatus/PlayerStatus";

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
  const { useContext, setUseContext } = useForm();

  const fetchData = async () => {
    try {
      const dataPlayerOne = await fetchApiData();
      const dataPlayerTwo = await fetchApiData();
      const PlayerOne = dataPlayerOne.data.data.find(
        (item: Superhero) => item.id === useContext.playerOne
      );
      const PlayerTwo = dataPlayerTwo.data.data.find(
        (item: Superhero) => item.id === useContext.playerTwo
      );
      setPlayerOne(PlayerOne);
      setPlayerTwo(PlayerTwo);
    } catch (error) {
      console.error(error);
    }
  };

  const calcularPontuacao = (player: Superhero) => {
    return (
      player.powerstats.combat +
      player.powerstats.durability +
      player.powerstats.intelligence +
      player.powerstats.power +
      player.powerstats.speed +
      player.powerstats.strength
    );
  };

  const getWinner = () => {
    if (playerOne && playerTwo) {
      const pontuacaoPlayerOne = calcularPontuacao(playerOne);
      const pontuacaoPlayerTwo = calcularPontuacao(playerTwo);

      return pontuacaoPlayerOne > pontuacaoPlayerTwo
        ? playerOne.name
        : pontuacaoPlayerOne < pontuacaoPlayerTwo
        ? playerTwo.name
        : "Draw";
    }

    return "Draw";
  };

  const winner = getWinner();

  const resetValues = () => {
    setUseContext((prevState: any) => ({
      ...prevState,
      open: false,
    }));

    setUseContext((prevState: any) => ({
      ...prevState,
      playerOne: 0,
    }));
    setUseContext((prevState: any) => ({
      ...prevState,
      playerTwo: 0,
    }));
  };

  const handleOpen = () => {
    fetchData();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    resetValues();
  };

  return (
    <div>
      <Button
        variant="contained"
        color="error"
        onClick={handleOpen}
        disabled={useContext.playerOne === 0 || useContext.playerTwo === 0}
      >
        Battle
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
              <PlayerStatus
                combat={playerOne.powerstats.combat}
                durability={playerOne.powerstats.durability}
                image={playerOne.images.lg}
                intelligence={playerOne.powerstats.intelligence}
                name={playerOne.name}
                power={playerOne.powerstats.power}
                speed={playerOne.powerstats.speed}
                strength={playerOne.powerstats.strength}
                player="One"
              />
              <div className="flex flex-col items-center justify-end ">
                <WinnerMessage winner={winner} />
                <ul>
                  <li>Combat</li>
                  <li>Durability</li>
                  <li>Intelligence</li>
                  <li>Power</li>
                  <li>Speed</li>
                  <li>Strength</li>
                </ul>
              </div>
              <PlayerStatus
                combat={playerTwo.powerstats.combat}
                durability={playerTwo.powerstats.durability}
                image={playerTwo.images.lg}
                intelligence={playerTwo.powerstats.intelligence}
                name={playerTwo.name}
                power={playerTwo.powerstats.power}
                speed={playerTwo.powerstats.speed}
                strength={playerTwo.powerstats.strength}
                player="Two"
              />
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
}
