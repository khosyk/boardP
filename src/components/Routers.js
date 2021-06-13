import { Router, Switch, Route, Redirect } from "react-router-dom";
import Issue from "../pages/Issue";
import Game from "../pages/Game";
import Movie from "../pages/Movie";
import Board from "../pages/Board";
import Detail from "../pages/Detail";
import Edit from "../pages/Edit";
import Siginin from "../pages/SignIn";
import Login from "../pages/Login";
import HeaderContainer from "../containers/HeaderContainer";
import Find from "../pages/Find";
import HomeContainer from "../containers/HomeContainer";
import history from "./history";

export default function Routers() {
    return (
        <Router history={history}>
            <HeaderContainer />
            <Switch>
                <Route path="/" exact component={HomeContainer} />
                <Route path="/signIn" component={Siginin} />
                <Route path="/login" component={Login} />
                <Route path="/find" component={Find} />
                <Route path="/issue" exact component={Issue} />
                <Route path="/game" exact component={Game} />
                <Route path="/movie" exact component={Movie} />
                <Route path="/board" exact component={Board} />
                <Route path="/:name/:id" exact component={Detail} />
                <Route path="/:name/:id/edit" component={Edit} />
            </Switch>
        </Router>
    );
}
