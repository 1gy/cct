import type { FC } from "react";
import { Mui } from "../../components/presentational";
import { PlantIcon } from "./PlantIcon";
import { crossbreedTable, plants } from "../../models/plants";
import { PlantStack } from "./PlantStack";

const formatProbability = (probability: number) =>
	`${Math.round(probability * 100 * 100) / 100} %`;

export const CrossbreedChart: FC = () => {
	return (
		<Mui.Box height="100%" display="flex" flexDirection="column">
			<Mui.Toolbar variant="dense" disableGutters sx={{ pl: 2 }}>
				<Mui.Typography>交配テーブル</Mui.Typography>
			</Mui.Toolbar>
			<Mui.Box overflow="auto">
				<Mui.Table stickyHeader size="small">
					<Mui.TableHead>
						<Mui.TableRow sx={{ visibility: "collapse" }}>
							<Mui.TableCell sx={{ width: 0 }}>child</Mui.TableCell>
							<Mui.TableCell sx={{ width: 0 }}>parent</Mui.TableCell>
							<Mui.TableCell>probability</Mui.TableCell>
						</Mui.TableRow>
					</Mui.TableHead>
					<Mui.TableBody>
						{crossbreedTable.map((crossbreed, index) => (
							<Mui.TableRow
								key={`${index}`}
								hover
								sx={{
									td: {
										borderRight: "2px solid #f4f4f4",
										padding: "3px 8px",
										whiteSpace: "nowrap",
									},
								}}
							>
								<Mui.TableCell>
									<Mui.Box
										sx={{
											display: "flex",
											flexDirection: "row",
											alignItems: "center",
										}}
									>
										<PlantIcon
											level={4}
											plantId={plants[crossbreed.plantId].icon}
										/>
										{plants[crossbreed.plantId].name}
									</Mui.Box>
								</Mui.TableCell>

								<Mui.TableCell>
									<Mui.Box sx={{ display: "flex", flexDirection: "row" }}>
										{crossbreed.parents.map((plantStack, index) => (
											<PlantStack key={`${index}`} definition={plantStack} />
										))}
									</Mui.Box>
								</Mui.TableCell>
								<Mui.TableCell>
									{formatProbability(crossbreed.probability)}
								</Mui.TableCell>
							</Mui.TableRow>
						))}
					</Mui.TableBody>
				</Mui.Table>
			</Mui.Box>
		</Mui.Box>
	);
};
