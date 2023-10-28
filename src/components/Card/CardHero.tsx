import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import {
  GiArm,
  GiBrain,
  GiLeg,
  GiStomach,
  GiPowerButton,
  GiSwordsPower,
} from "react-icons/gi";
import { MdOutlineExpandMore } from "react-icons/md";
import Image from "next/image";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Superhero } from "@/Types/DataInterface";

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

    <Card sx={{ maxWidth: 400 }}>
      <CardHeader
        title={superhero.biography.fullName || "Nome não disponível"}
        subheader={superhero.slug || "Slug não disponível"}
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
            <GiBrain className="text-blue-500" />
            <Typography variant="body2" color="text.secondary">
              Intelligence:{" "}
              {superhero.powerstats
                ? superhero.powerstats.intelligence
                : "Não disponível"}
            </Typography>
          </div>
          <div className="flex items-center">
            <GiArm className="text-red-500" />
            <Typography variant="body2" color="text.secondary">
              Strength:{" "}
              {superhero.powerstats
                ? superhero.powerstats.strength
                : "Não disponível"}
            </Typography>
          </div>
          <div className="flex items-center">
            <GiLeg className="text-green-500" />
            <Typography variant="body2" color="text.secondary">
              Speed:{" "}
              {superhero.powerstats
                ? superhero.powerstats.speed
                : "Não disponível"}
            </Typography>
          </div>
          <div className="flex items-center">
            <GiStomach className="text-yellow-500" />
            <Typography variant="body2" color="text.secondary">
              Durability:{" "}
              {superhero.powerstats
                ? superhero.powerstats.durability
                : "Não disponível"}
            </Typography>
          </div>
          <div className="flex items-center">
            <GiPowerButton className="text-pink-500" />
            <Typography variant="body2" color="text.secondary">
              Power:{" "}
              {superhero.powerstats
                ? superhero.powerstats.power
                : "Não disponível"}
            </Typography>
          </div>
          <div className="flex items-center">
            <GiSwordsPower className="text-purple-500" />
            <Typography variant="body2" color="text.secondary">
              Combat:{" "}
              {superhero.powerstats
                ? superhero.powerstats.combat
                : "Não disponível"}
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
          <MdOutlineExpandMore />
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
                  : "Não disponível"}
              </li>
              <li>
                Race:{" "}
                {superhero.appearance
                  ? superhero.appearance.race
                  : "Não disponível"}
              </li>
              <li>
                Height:{" "}
                {superhero.appearance
                  ? superhero.appearance.height.join(", ")
                  : "Não disponível"}
              </li>
              <li>
                Weight:{" "}
                {superhero.appearance
                  ? superhero.appearance.weight.join(", ")
                  : "Não disponível"}
              </li>
              <li>
                Eye Color:{" "}
                {superhero.appearance
                  ? superhero.appearance.eyeColor
                  : "Não disponível"}
              </li>
              <li>
                Hair Color:{" "}
                {superhero.appearance
                  ? superhero.appearance.hairColor
                  : "Não disponível"}
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
                  : "Não disponível"}
              </li>
              <li>
                Alter Egos:{" "}
                {superhero.biography
                  ? superhero.biography.alterEgos
                  : "Não disponível"}
              </li>
              <li>
                Aliases:{" "}
                {superhero.biography
                  ? superhero.biography.aliases.join(", ")
                  : "Não disponível"}
              </li>
              <li>
                Place of Birth:{" "}
                {superhero.biography
                  ? superhero.biography.placeOfBirth
                  : "Não disponível"}
              </li>
              <li>
                First Appearance:{" "}
                {superhero.biography
                  ? superhero.biography.firstAppearance
                  : "Não disponível"}
              </li>
              <li>
                Publisher:{" "}
                {superhero.biography
                  ? superhero.biography.publisher
                  : "Não disponível"}
              </li>
              <li>
                Alignment:{" "}
                {superhero.biography
                  ? superhero.biography.alignment
                  : "Não disponível"}
              </li>
            </ul>
          </div>
          <div>
            <strong>Work:</strong>
            <ul>
              <li>
                Occupation:{" "}
                {superhero.work ? superhero.work.occupation : "Não disponível"}
              </li>
              <li>
                Base: {superhero.work ? superhero.work.base : "Não disponível"}
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
                  : "Não disponível"}
              </li>
              <li>
                Relatives:{" "}
                {superhero.connections
                  ? superhero.connections.relatives
                  : "Não disponível"}
              </li>
            </ul>
          </div>
        </CardContent>
      </Collapse>
    </Card>
  );
}
