import type { FC } from "react";
import plantsPng from "../../assets/garden/gardenPlants.png";

export type PlantIconProps = {
	plantId: number;
	level: number;
};

export const PlantIcon: FC<PlantIconProps> = ({ plantId, level }) => (
	<div
		style={{
			width: 48,
			height: 48,
			background: `url(${plantsPng})`,
			backgroundPositionX: -48 * level,
			backgroundPositionY: -48 * plantId,
		}}
	/>
);
