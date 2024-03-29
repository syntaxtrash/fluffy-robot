import { Card, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface GameCardProps {
	game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
	return (
		<Card>
			<Image src={getCroppedImageUrl(game.background_image)} />
			<Heading fontSize="2xl">{game.name}</Heading>
			<HStack justifyContent="space-between">
				<PlatformIconList
					platforms={game.parent_platforms.map((p) => p.platform)}
				/>
				<CriticScore score={game.metacritic} />
			</HStack>
		</Card>
	);
};

export default GameCard;
