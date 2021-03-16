import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import uthis from "../uthis.png";

<<<<<<< HEAD
const HeaderBlock = styled("header")`
	display: flex;
	padding-top: 100px;
	justify-content: center;
	margin: 0px 100px;
	margin-bottom: 30px;
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
		width: 18%;
		height: 5%;
		top: 92%;
		bottom: 50px;
		transition: width 0.1s ease-in;
		z-index: -1;
	}
`;

const LinkList = styled("li")`
	display: flex;
	justify-content: space-between;
	width: 500px;
`;

const Item = styled("ul")`
	font-size: 1.1rem;
	font-weight: 600;
	color: ${(props) => (props.selected ? "#343a40" : "black")};
	border-bottom: ${(props) => (props.selected ? "#ff6b6b" : "white")} 2px solid;
`;

const Border = styled("div")`
	border-top: rgba(0, 0, 0, 0.3) groove 1.5px;
=======
const HeaderBlock = styled('header')`
  display:flex;
  padding-top:100px;
  justify-content:center;
  margin: 0px 100px;
  margin-bottom:30px;
`;

const Main = styled('img')`
width: 200px;
height:80px;
margin-left:4%;
position:fixed;
top:5px;
@media(max-width:768px) {
  margin-left:2%;
  width: 18%;
  height:5%;
  top:92%;
  bottom:50px;
  transition:width 0.1s ease-in;
  z-index:-1;
}
`

const LinkList = styled('li')`
  display:flex;
  justify-content: space-between;
  width:500px;
`


const Item = styled("ul")`
  font-size:1.1rem;
  font-weight: 600;
  color: ${ props => (props.selected ? "#343a40" : "black") };
  border-bottom: ${ props => (props.selected ? "#ff6b6b" : "white") } 2px solid;
>>>>>>> 53475f028ad5630d0f6b2e5ddd39850668de16fb
`;

const Border = styled('div')`
  border-top: rgba(0,0,0,0.3) groove 1.5px;
`

export default withRouter(({ location: { pathname } }) => (
<<<<<<< HEAD
	<>
		<Main src={uthis} />
		<HeaderBlock>
			<LinkList>
				<Item selected={pathname === "/"}>
					<Link to="/">HOME</Link>
				</Item>
				<Item selected={pathname === "/issue"}>
					<Link to="/issue">ISSUE</Link>
				</Item>
				<Item selected={pathname === "/game"}>
					<Link to="/game">GAME</Link>
				</Item>
				<Item selected={pathname === "/movie"}>
					<Link to="/movie">MOVIE</Link>
				</Item>
			</LinkList>
		</HeaderBlock>
		<Border />
	</>
=======
  <>
  <Main src={uthis}/>
  <HeaderBlock>
    <LinkList>
      <Item selected={pathname === "/"}>
        <Link to='/'>HOME</Link>
      </Item>
      <Item selected={pathname === "/issue"}>
        <Link to='/issue'>ISSUE</Link>
      </Item>
      <Item selected={pathname === "/game"}>
        <Link to='/game'>GAME</Link>
      </Item>
      <Item selected={pathname === "/movie"}>
        <Link to='/movie'>MOVIE</Link>
        </Item>
    </LinkList>
  </HeaderBlock>
    <Border/>
  </>
>>>>>>> 53475f028ad5630d0f6b2e5ddd39850668de16fb
));
