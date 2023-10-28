import CombatIcon from "@/components/Icons/StatsIcons/CombatIcon";
import DurabilityIcon from "@/components/Icons/StatsIcons/DurabilityIcon";
import IntelligenceIcon from "@/components/Icons/StatsIcons/IntelligenceIcon";
import PowerIcon from "@/components/Icons/StatsIcons/PowerIcon";
import SpeedIcon from "@/components/Icons/StatsIcons/SpeedIcon";
import StrengthIcon from "@/components/Icons/StatsIcons/StrengthIcon";
import { Typography } from "@mui/material";
import React from "react";

type Props = {
  image: string;
  name: string;
  durability: number;
  intelligence: number;
  speed: number;
  strength: number;
  combat: number;
  player: string;
  power: number;
};

const PlayerStatus = ({
  image,
  name,
  durability,
  intelligence,
  speed,
  strength,
  combat,
  player,
  power,
}: Props) => {
  return (
    <div className="flex flex-col items-center">
      <img src={image} alt={name} className="mb-2" />

      <Typography variant="h6" component="h2">
        {name ? name : `Player ${player}`}
      </Typography>
      <div className="flex items-center">
        <CombatIcon />
        <span>{combat}</span>
      </div>
      <div className="flex items-center">
        <DurabilityIcon />
        <span>{durability}</span>
      </div>
      <div className="flex items-center">
        <IntelligenceIcon />
        <span>{intelligence}</span>
      </div>
      <div className="flex items-center">
        <PowerIcon />
        <span>{power}</span>
      </div>
      <div className="flex items-center">
        <SpeedIcon />
        <span>{speed}</span>
      </div>
      <div className="flex items-center">
        <StrengthIcon />
        <span>{strength}</span>
      </div>
    </div>
  );
};

export default PlayerStatus;
