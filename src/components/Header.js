import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import uthis from '../uthis.png';

const HeaderBlock = styled('header')`
display:flex;
  padding-top:50px;
  justify-content:center;
  background-color:white;
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
  margin-bottom:10px;
  justify-content: center;
  margin-left:-1%;
  padding-bottom:15px;
  width:500px;
  @media (max-width: 768px) {
    margin-left: 10px;
  transition:margin-left 0.1s ease-in;
  }
`

const Border = styled('div')`
  border-top: rgba(0,0,0,0.3) groove 1.5px;
`

const Item = styled("ul")`
  text-transform: uppercase;
  font-size:1.1rem;
  font-weight: 600;
  color: ${ props => (props.selected ? "#343a40" : "black") };
  border-bottom: ${ props => (props.selected ? "#ff6b6b" : "white") } 2px solid;
  margin-left:13%;
  &:first-child{
    margin-left:-20px;
  }
`;

export default withRouter(({ location: { pathname } }) => (
  <>
  <Main src={uthis}/>
  <HeaderBlock>
    <LinkList>
      <Item selected={pathname === "/"}>
        <Link to='/'>Home</Link>
      </Item>
      <Item selected={pathname === "/issue"}>
        <Link to='/issue'>issue</Link>
      </Item>
      <Item selected={pathname === "/game"}>
        <Link to='/game'>Game</Link>
      </Item>
      <Item selected={pathname === "/movie"}>
        <Link to='/movie'>Movie</Link>
        </Item>
          <Item selected={pathname==='/board'}>
        <Link to='/board'>board</Link>
          </Item>
    </LinkList>
  </HeaderBlock>
    <Border/>
  </>
));
