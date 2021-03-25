import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import uthis from "../uthis.png";

const HeaderBlock = styled("header")`
	display: flex;
	padding-top: 50px;
	padding-bottom: 30px;
	justify-content: center;
	margin: 0px 100px;
	@media (max-width: 480px) {
		padding-top: 20px;
		padding-bottom: 10px;
		padding:0px;
		margin:5px;
	}
`;

const Main = styled("img")`
	width: 200px;
	height: 80px;
	margin-left: 4%;
	position: absolute;
	top: 5px;
	@media (max-width: 768px) {
		position: fixed;
		opacity: 0.5;
		margin-left: 2%;
		width: 100px;
		height: 40px;
		top: 92%;
		bottom: 50px;
		transition: width 0.1s ease-in;
		z-index: 1;
	}
`;

const LinkList = styled("li")`
	display: flex;
	justify-content: space-between;
	width: 500px;
	min-width: 250px;
`;

const Item = styled("ul")`
	font-size: 1.1rem;
	font-weight: 600;
	color: ${(props) => (props.selected ? "#343a40" : "black")};
	border-bottom: ${(props) => (props.selected ? "#ff6b6b" : "white")} 2px solid;
	@media(max-width:480px){
		font-size:0.8rem;
	}
`;

const Border = styled("div")`
	border-top: rgba(0, 0, 0, 0.3) groove 1.5px;
`;

export default withRouter(({ location: { pathname } }) => (
	<>
		<Main src={uthis} />
		<HeaderBlock>
			<LinkList>
				<Item selected={pathname === "/"}>
					<Link to="/">HOME</Link>
				</Item>
				<Item selected={pathname.startsWith('/issue') }>
					<Link to="/issue">ISSUE</Link>
				</Item>
				<Item selected={pathname.startsWith('/game')}>
					<Link to="/game">GAME</Link>
				</Item>
				<Item selected={pathname.startsWith('/movie')}>
					<Link to="/movie">MOVIE</Link>
				</Item>
			</LinkList>
		</HeaderBlock>
		<Border />
	</>
));

{/*withRouter(({ location: { pathname } }) => (
	<>
	
	</>
));*/}