import {
	BrowserRouter as Rotuer,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import Home from "../pages/Home";
import Issue from "../pages/Issue";
import Game from "../pages/Game";
import Movie from "../pages/Movie";
import Header from "./Header";
import Board from "../pages/Board";
import Detail from "../pages/Detail";

export default function Router() {
	return (
		<Rotuer>
			<Header />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/issue" exact component={Issue} />
				<Route path="/game" component={Game} />
				<Route path="/movie" component={Movie} />

				<Route path="/board">
					<Board />
				</Route>

				<Route path="/issue/:id" component={Detail} />
			</Switch>
		</Rotuer>
	);
}
