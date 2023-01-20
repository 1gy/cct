import { Typography } from "@mui/material";
import type { FC } from "react";
import { Mui } from "../../components/presentational";
import { plants, PlantStackDefinition } from "../../models/plants";
import { PlantIcon } from "./PlantIcon";

export type PlantStackProps = {
	definition: PlantStackDefinition;
	has: boolean;
};

export const PlantStack: FC<PlantStackProps> = ({
	definition: { amount, amountKind, plantId, mature },
	has,
}) => (
	<Mui.Box
		display="flex"
		alignItems="center"
		mr={1}
		bgcolor={has ? "action.selected" : ""}
	>
		{mature ? "" : "["}
		<PlantIcon level={4} plantId={plants[plantId].icon} />
		{2 <= amount || amountKind !== "equals" ? (
			<Typography mr={1}>
				×
				{amountKind === "less_than_equal" ? "～" : ""}
				{amount}
			</Typography>
		) : null}
		{mature ? "" : "]"}
	</Mui.Box>
);
