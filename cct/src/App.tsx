import type { FC } from "react";
import { RecoilRoot } from "recoil";
import { ErrorBoundary } from "./components/functional";
import { ErrorFallback, Mui } from "./components/presentational";
import { RoconRoot } from "rocon/react";
import { Routes } from "./pages/Routes";

export const App: FC = () => {
	return (
		<ErrorBoundary
			fallback={(error, errorInfo) => (
				<ErrorFallback error={error} errorInfo={errorInfo} />
			)}
		>
			<RecoilRoot>
				<Mui.CssBaseline />
				<RoconRoot>
					<Routes />
				</RoconRoot>
			</RecoilRoot>
		</ErrorBoundary>
	);
};
