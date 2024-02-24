import { Card, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface GameCardProps {
	game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
	return (
		<Card borderRadius={10} overflow="hidden">
			<Image src={game.background_image} />
			<Heading fontSize="2xl">{game.name}</Heading>
			<PlatformIconList
				platforms={game.parent_platforms.map((p) => p.platform)}
			/>
		</Card>
	);
};

export default GameCard;
