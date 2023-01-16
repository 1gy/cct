import type { FC } from "react";
import { Mui, Page } from "../../components/presentational";
import { CheckList } from "./CheckList";
import { CrossbreedChart } from "./CrossbreedChart";

export const GardenPage: FC = () => (
	<Page>
		<Mui.Grid
			container
			width="100%"
			height="100%"
			wrap="nowrap"
			sx={{
				flexDirection: { xs: "column", md: "row" },
				borderTopColor: "primary.main",
				borderTopStyle: "solid",
				borderTopWidth: 2,
			}}
		>
			<Mui.Grid
				item
				sx={{
					height: { xs: "50%", md: "100%" },
					borderColor: "primary.main",
					borderRightWidth: { xs: 0, md: 2 },
					borderRightStyle: { xs: "", md: "solid" },
					borderBottomWidth: { xs: 2, md: 0 },
					borderBottomStyle: { xs: "solid", md: "" },
				}}
			>
				<CheckList />
			</Mui.Grid>
			<Mui.Grid item flexGrow="1" sx={{ height: { xs: "50%", md: "100%" } }}>
				<CrossbreedChart />
			</Mui.Grid>
		</Mui.Grid>
	</Page>
);
