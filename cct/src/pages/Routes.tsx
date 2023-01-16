import type { FC } from "react";
import Rocon, { useRoutes, Redirect } from "rocon/react";
import { ErrorBoundary } from "../components/functional/ErrorBoundary";
import { ErrorFallback } from "../components/presentational/ErrorFallback";
import { GardenPage } from "./garden/GardenPage";

export const IndexPage: FC = () => {
	return <Redirect route={routes._.garden} />;
};

export const routes = Rocon.Root({ root: { pathname: "/cct", state: null } })
	.attach(Rocon.Path())
	.exact({ action: () => <IndexPage /> })
	.route("garden", (route) => route.action(() => <GardenPage />));

export const Routes: FC = () => (
	<ErrorBoundary
		fallback={(error, errorInfo) => (
			<ErrorFallback error={error} errorInfo={errorInfo} />
		)}
	>
		{useRoutes(routes)}
	</ErrorBoundary>
);
