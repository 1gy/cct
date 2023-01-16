import type { FC, ReactNode } from "react";
import { Mui } from ".";

export type PageProps = {
	children?: ReactNode;
};

export const Page: FC<PageProps> = (props) => (
	<Mui.Box role="page" width="100vw" height="100vh" overflow="hidden">
		{props.children}
	</Mui.Box>
);
