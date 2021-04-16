import React,{useState} from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import uthis from "../images/uthis.png";
import { BiMenu,BiXCircle } from "react-icons/bi";



const HeaderBlock = styled("header")`
	display: flex;
	padding-top: 43px;
	padding-bottom: 30px;
	justify-content: center;
	@media (max-width: 480px) {
		padding: 0px;
		padding-top:5px;
		margin: 5px 30px;
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
		bottom: 20px;
		top: 92%;
		transition: width 0.1s ease-in;
		z-index: 1;
	}
`;

const LinkList = styled("li")`
	display: flex;
	justify-content: space-around;
	width: 500px;
	min-width: 250px;
`;

const Item = styled("ul")`
	font-size: 1.1rem;
	font-weight: 600;
	color: ${(props) => (props.selected ? "#343a40" : "black")};
	border-bottom: ${(props) => (props.selected ? "#ff6b6b" : "white")} 2px solid;
	@media (max-width: 480px) {
		font-size: 0.8rem;
	}
`;

const Border = styled("div")`
	border-top: rgba(0, 0, 0, 0.3) groove 1.5px;
`;


// menus


// mobile Menus

const VisibleButton = styled.div`
	width:25px;
	height:25px;
	position:absolute;
	top:8px;
	left:16px;
	display:none;
	visibility:hidden;
	@media (max-width: 480px) {
	display:block;
	visibility:visible;
}
`;

const VisibleMenus = styled.div`
	position:absolute;
	width:100%;
	top:0px;
	height:135px;
	background-color:rgba(0,0,0,0.8);
	display:none;
	align-items:center;
	flex-direction:column;
	z-index:999;
	@media (max-width: 480px) {
	display:flex;
	visibility:visible;
}
`;

const LoginCloseButton = styled.div`
	position:relative;
	display:flex;
	justify-content:flex-end;
	top:7px;
	right:10px;
	width:100%;
`;

const LoginBlock = styled.div`
	background-color:rgba(255,255,255,0.9);
	border:1px solid rgba(255,255,255,1);
	border-radius:3px;
	width:60%;
	height:60%;
	display:flex;
	flex-direction:column;
`

const LoginIdBox = styled.div`
	margin-top: 10px;
`;

const LoginIdSpan = styled.span`
	font-size:0.8rem;
	display:inline-block;
	margin-left:25px;
	width:20px;
`;

const LoginIdInput = styled.input`
	border:none;
	margin-left:5px;
	width:100px;
	height:1rem;
	font-size:0.8rem;
	border-radius:2px;
	&:focus{
	outline: none !important;
    border:1px solid rgba(0,0,0,0.5);
	}
`;

const LoginPWBox = styled.div`
	margin-top: 5px;
`;

const LoginPwSpan = styled.span`
	display:inline-block;
	font-size:0.8rem;
	margin-left:25px;
	width:20px;
`;

const LoginPWInput = styled.input`
	border:none;
	margin-left:5px;
	width:100px;
	height:1rem;
	font-size:0.8rem;
	border-radius:2px;
	&:focus{
	outline: none !important;
    border:1px solid rgba(0,0,0,0.5);
	}
`;

const LoginButtonBlock = styled.div`
	margin-top:5px;
	margin-left:55px;
`;

const LoginButton = styled(Link)`
	border:1px solid rgba(0,0,0,0.5);
	padding:0px 5px;
	border-radius: 2px;
	background-color:white;
	font-size:0.7rem;
`;

const LoginButtonMenu = styled(Link)`
	font-size:0.7rem;
	margin-left:10px;
`;


const LoginBottomBlock = styled.div`
	background-color:rgba(255,255,255,0.9);
	border-radius:3px;
	margin-top:5px;
	width:70%;
	padding-bottom:2px;
`

const LoginBottomMenu = styled(Link)`
	font-size:0.7rem;
	margin-left:10px;
	&:active:hover{
	color:red;
	background-color:rgba(255,255,255,0.9);
	}
`;

// PC Version Menus

const HeaderTopBlock = styled.div`
	width:100%;
	display:flex;
	justify-content:flex-end;
	@media (max-width: 480px) {
	display:none;
	visibility:hidden;
}
`;

const HeaderTopList = styled.li`
	margin-top: 10px;
	display: flex;
	justify-content: space-between;
	width:100px;
	margin-right:20px;
`;

const HeaderTopMenus = styled.ul`
	font-size: 12px;
	font-weight: 600;
	color: ${(props) => (props.selected ? "#343a40" : "black")};
	border-bottom: ${(props) => (props.selected ? "#ff6b6b" : "white")} 2px solid;
	&:active{
		color:red;
	}
`;


export default withRouter(({ location: { pathname } }) => {
	const [visibleMenu, setVisibleMenu] = useState(false)
	
	return (
		<>
			<Main src={uthis} />
			 <VisibleButton onClick={() => setVisibleMenu(!visibleMenu)}>
				<BiMenu style={{fontSize:'1rem', color:' rgba(0, 0, 0, 0.7)'}}/>
			</VisibleButton>
			{visibleMenu ?
				<VisibleMenus>
					<LoginCloseButton>
						<BiXCircle onClick={() => setVisibleMenu(!visibleMenu)} style={{fontSize:'1rem',color:'rgba(255,255,255,0.8)'}}/>
					</LoginCloseButton>
					<LoginBlock>
						<LoginIdBox>
							<LoginIdSpan>I D:</LoginIdSpan> <LoginIdInput/>
						</LoginIdBox>
						<LoginPWBox>
							<LoginPwSpan>PW:</LoginPwSpan> <LoginPWInput/>
						</LoginPWBox>
						<LoginButtonBlock>
							<LoginButton to='/issue'>로그인</LoginButton>
							<LoginButtonMenu to='/signIn'>회원가입</LoginButtonMenu>
						</LoginButtonBlock>
					</LoginBlock>
					<LoginBottomBlock>
						<LoginBottomMenu to='/find'>
							아이디를 잊으셨나요?
						</LoginBottomMenu>
						<LoginBottomMenu to='/find'>
							패스워드를 잊으셨나요?
						</LoginBottomMenu>
					</LoginBottomBlock>
				</VisibleMenus> :''}
			<HeaderTopBlock>
				<HeaderTopList>
					<HeaderTopMenus>
						<Link to='/signIn'>회원가입</Link>
					</HeaderTopMenus>
					<HeaderTopMenus>
						<Link to='/login'>로그인</Link>
					</HeaderTopMenus>
				</HeaderTopList>
			</HeaderTopBlock>

			<HeaderBlock>
				<LinkList>
					<Item selected={pathname === "/"}>
						<Link to="/">HOME</Link>
					</Item>
					<Item selected={pathname.startsWith("/issue")}>
						<Link to="/issue">ISSUE</Link>
					</Item>
					<Item selected={pathname.startsWith("/game")}>
						<Link to="/game">GAME</Link>
					</Item>
					<Item selected={pathname.startsWith("/movie")}>
						<Link to="/movie">MOVIE</Link>
					</Item>
				</LinkList>
			</HeaderBlock>
			<Border />
		</>);
}
);

{
	/*withRouter(({ location: { pathname } }) => (
	<>
	
	</>
));*/
}
