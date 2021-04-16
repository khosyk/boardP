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
import Edit from "../pages/Edit";
import Siginin from '../pages/SignIn';
import Login from '../pages/Login';


export default function Router() {
	return (
		<Rotuer>
			<Header />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/signIn" exact component={Siginin} />
				<Route path='/login' exact component={Login}/>
				<Route path="/issue" exact component={Issue} />
				<Route path="/game" component={Game} />
				<Route path="/movie" component={Movie} />
				<Route path="/board" component={Board} />
				<Route path="/issue/:id" exact component={Detail} />{" "}
				{/* /:id -> 변수 */}
				<Route path="/issue/:id/edit" component={Edit} />
			</Switch>
		</Rotuer>
	);
}
