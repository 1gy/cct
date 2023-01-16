import type { FC } from "react";
import { Mui } from "../../components/presentational";
import { PlantIcon } from "./PlantIcon";
import { plantIds, plants } from "../../models/plants";
import { useChecklist, useSetChecklist } from "../../hooks/garden";

export const CheckList: FC = () => {
	const checklist = useChecklist();
	const { toggle, clear } = useSetChecklist();

	return (
		<Mui.Box height="100%" display="flex" flexDirection="column">
			<Mui.Toolbar variant="dense" disableGutters sx={{ pl: 2 }}>
				<Mui.Typography>
					取得済み {checklist.size} / {plantIds.length}
				</Mui.Typography>
				<Mui.Box flexGrow="1" />
				<Mui.IconButton onClick={() => clear()}>
					<PlantIcon plantId={-1} level={2} />
				</Mui.IconButton>
			</Mui.Toolbar>
			<Mui.Box overflow="auto">
				<Mui.Table stickyHeader size="small">
					<Mui.TableHead>
						<Mui.TableRow sx={{ visibility: "collapse" }}>
							<Mui.TableCell sx={{ width: 0 }}> </Mui.TableCell>
							<Mui.TableCell sx={{ width: 0 }}>icon</Mui.TableCell>
							<Mui.TableCell>name</Mui.TableCell>
						</Mui.TableRow>
					</Mui.TableHead>
					<Mui.TableBody>
						{plantIds.map((plantId) => (
							<Mui.TableRow
								key={plantId}
								hover
								selected={checklist.has(plantId)}
								sx={{
									td: {
										borderRight: "2px solid #f4f4f4",
										padding: "3px 8px",
										whiteSpace: "nowrap",
									},
								}}
							>
								<Mui.TableCell>
									<Mui.Checkbox
										checked={checklist.has(plantId)}
										onClick={() => toggle(plantId)}
									/>
								</Mui.TableCell>
								<Mui.TableCell sx={{ display: "flex", flexDirection: "row" }}>
									<PlantIcon level={0} plantId={plants[plantId].icon} />
									<PlantIcon level={4} plantId={plants[plantId].icon} />
								</Mui.TableCell>
								<Mui.TableCell>{plants[plantId].name}</Mui.TableCell>
							</Mui.TableRow>
						))}
					</Mui.TableBody>
				</Mui.Table>
			</Mui.Box>
		</Mui.Box>
	);
};
