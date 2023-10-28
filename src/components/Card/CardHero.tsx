import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Image from "next/image";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Superhero } from "@/Types/DataInterface";

//icons

import CombatIcon from "../Icons/StatsIcons/CombatIcon";
import IntelligenceIcon from "../Icons/StatsIcons/IntelligenceIcon";
import StrengthIcon from "../Icons/StatsIcons/StrengthIcon";
import SpeedIcon from "../Icons/StatsIcons/SpeedIcon";
import DurabilityIcon from "../Icons/StatsIcons/DurabilityIcon";
import PowerIcon from "../Icons/StatsIcons/PowerIcon";
import ExpandIcon from "../Icons/CardIcon/ExpandIcon";

interface CardHeroProps {
  superhero: Superhero;
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardHero({ superhero }: CardHeroProps) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ flexGrow: 1 }}>
      <CardHeader
        title={superhero.biography.fullName || "Name not available"}
        subheader={superhero.slug || "Slug not available"}
      />
      <div className="relative w-48 mx-auto">
        {superhero.images && superhero.images.lg && (
          <Image
            width={400}
            height={200}
            src={superhero.images.lg}
            alt={`Imagem do herói ${superhero.name}`}
            loading="lazy"
          />
        )}
      </div>
      <CardContent>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center">
            <IntelligenceIcon />
            <Typography variant="body2" color="text.secondary">
              Intelligence:{" "}
              {superhero.powerstats
                ? superhero.powerstats.intelligence
                : "not available"}
            </Typography>
          </div>
          <div className="flex items-center">
            <StrengthIcon />
            <Typography variant="body2" color="text.secondary">
              Strength:{" "}
              {superhero.powerstats
                ? superhero.powerstats.strength
                : "not available"}
            </Typography>
          </div>
          <div className="flex items-center">
            <SpeedIcon />
            <Typography variant="body2" color="text.secondary">
              Speed:{" "}
              {superhero.powerstats
                ? superhero.powerstats.speed
                : "not available"}
            </Typography>
          </div>
          <div className="flex items-center">
            <DurabilityIcon />
            <Typography variant="body2" color="text.secondary">
              Durability:{" "}
              {superhero.powerstats
                ? superhero.powerstats.durability
                : "not available"}
            </Typography>
          </div>
          <div className="flex items-center">
            <PowerIcon />
            <Typography variant="body2" color="text.secondary">
              Power:{" "}
              {superhero.powerstats
                ? superhero.powerstats.power
                : "not available"}
            </Typography>
          </div>
          <div className="flex items-center">
            <CombatIcon />
            <Typography variant="body2" color="text.secondary">
              Combat:{" "}
              {superhero.powerstats
                ? superhero.powerstats.combat
                : "not available"}
            </Typography>
          </div>
        </div>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Details:</Typography>
          <div>
            <strong>Aparência:</strong>
            <ul>
              <li>
                Gender:{" "}
                {superhero.appearance
                  ? superhero.appearance.gender
                  : "not available"}
              </li>
              <li>
                Race:{" "}
                {superhero.appearance
                  ? superhero.appearance.race
                  : "not available"}
              </li>
              <li>
                Height:{" "}
                {superhero.appearance
                  ? superhero.appearance.height.join(", ")
                  : "not available"}
              </li>
              <li>
                Weight:{" "}
                {superhero.appearance
                  ? superhero.appearance.weight.join(", ")
                  : "not available"}
              </li>
              <li>
                Eye Color:{" "}
                {superhero.appearance
                  ? superhero.appearance.eyeColor
                  : "not available"}
              </li>
              <li>
                Hair Color:{" "}
                {superhero.appearance
                  ? superhero.appearance.hairColor
                  : "not available"}
              </li>
            </ul>
          </div>
          <div>
            <strong>Biography:</strong>
            <ul>
              <li>
                Full Name:{" "}
                {superhero.biography
                  ? superhero.biography.fullName
                  : "not available"}
              </li>
              <li>
                Alter Egos:{" "}
                {superhero.biography
                  ? superhero.biography.alterEgos
                  : "not available"}
              </li>
              <li>
                Aliases:{" "}
                {superhero.biography
                  ? superhero.biography.aliases.join(", ")
                  : "not available"}
              </li>
              <li>
                Place of Birth:{" "}
                {superhero.biography
                  ? superhero.biography.placeOfBirth
                  : "not available"}
              </li>
              <li>
                First Appearance:{" "}
                {superhero.biography
                  ? superhero.biography.firstAppearance
                  : "not available"}
              </li>
              <li>
                Publisher:{" "}
                {superhero.biography
                  ? superhero.biography.publisher
                  : "not available"}
              </li>
              <li>
                Alignment:{" "}
                {superhero.biography
                  ? superhero.biography.alignment
                  : "not available"}
              </li>
            </ul>
          </div>
          <div>
            <strong>Work:</strong>
            <ul>
              <li>
                Occupation:{" "}
                {superhero.work ? superhero.work.occupation : "not available"}
              </li>
              <li>
                Base: {superhero.work ? superhero.work.base : "not available"}
              </li>
            </ul>
          </div>
          <div>
            <strong>Connections:</strong>
            <ul>
              <li>
                Group Affiliation:{" "}
                {superhero.connections
                  ? superhero.connections.groupAffiliation
                  : "not available"}
              </li>
              <li>
                Relatives:{" "}
                {superhero.connections
                  ? superhero.connections.relatives
                  : "not available"}
              </li>
            </ul>
          </div>
        </CardContent>
      </Collapse>
    </Card>
  );
}
