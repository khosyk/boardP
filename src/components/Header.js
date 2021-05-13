import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { setLogin } from "../modules/login";
import config from "../config.json";

import uthis from "../images/uthis.png";

import { BiMenu, BiXCircle } from "react-icons/bi";

const HeaderBlock = styled("header")`
	display: flex;
	padding-top: 43px;
	padding-bottom: 30px;
	justify-content: center;
	@media (max-width: 480px) {
		padding: 0px;
		padding-top: 5px;
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
	width: 25px;
	height: 25px;
	position: absolute;
	top: 8px;
	left: 16px;
	display: none;
	visibility: hidden;
	@media (max-width: 480px) {
		display: block;
		visibility: visible;
	}
`;

const VisibleMenus = styled.div`
	position: absolute;
	width: 100%;
	top: 0px;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.8);
	display: none;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	z-index: 999;
	@media (max-width: 480px) {
		display: flex;
		visibility: visible;
	}
`;

const LoginCloseButton = styled.div`
	position: relative;
	display: flex;
	justify-content: flex-end;
	top: -10px;
	right: 20px;
	width: 100%;
`;

const LoginBlock = styled.div`
	background-color: rgba(255, 255, 255, 0.9);
	border: 1px solid rgba(255, 255, 255, 1);
	border-radius: 3px;
	width: 60%;
	height: 130px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const LoginIdBox = styled.div`
	margin-top: 10px;
`;

const LoginIdSpan = styled.span`
	font-size: 0.8rem;
	display: inline-block;
	width: 20px;
`;

const LoginIdInput = styled.input`
	border: none;
	margin-left: 5px;
	width: 100px;
	height: 1rem;
	font-size: 0.8rem;
	border-radius: 2px;
	&:focus {
		outline: none !important;
		border: 1px solid rgba(0, 0, 0, 0.5);
	}
`;

const LoginPWBox = styled.div`
	margin-top: 5px;
`;

const LoginPwSpan = styled.span`
	display: inline-block;
	font-size: 0.8rem;
	width: 20px;
`;

const LoginPWInput = styled.input`
	border: none;
	margin-left: 5px;
	width: 100px;
	height: 1rem;
	font-size: 0.8rem;
	border-radius: 2px;
	&:focus {
		outline: none !important;
		border: 1px solid rgba(0, 0, 0, 0.5);
	}
`;

const LoginButtonBlock = styled.div`
	margin-top: 5px;
`;

const LoginButton = styled(Link)`
	border: 1px solid rgba(0, 0, 0, 0.5);
	padding: 0px 5px;
	border-radius: 2px;
	background-color: white;
	font-size: 0.7rem;
`;

const LoginButtonMenu = styled(Link)`
	font-size: 0.7rem;
	margin-left: 10px;
`;

const LoginBottomBlock = styled.div`
	background-color: rgba(255, 255, 255, 0.9);
	border-radius: 3px;
	margin-top: 5px;
	width: 70%;
	padding-bottom: 2px;
`;

const LoginBottomMenu = styled(Link)`
	font-size: 0.7rem;
	margin-left: 10px;
	&:active:hover {
		color: red;
		background-color: rgba(255, 255, 255, 0.9);
	}
`;

// PC Version Menus

const HeaderTopBlock = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	@media (max-width: 480px) {
		display: none;
		visibility: hidden;
	}
`;

const HeaderTopList = styled.li`
	margin-top: 10px;
	display: flex;
	justify-content: space-around;
	width: 320px;
`;

const HeaderTopMenus = styled.ul`
	font-size: 13px;
	font-weight: 600;
`;

const HeaderTopSignin = styled.span`
	cursor: pointer;
	&:hover {
		text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
	}
	&:active {
		color: red;
	}
`;

const HeaderTopUserBlock = styled.span``;

const HeaderTopUser = styled.span``;

const HeaderTopLogout = styled.a`
	margin-left: 50px;
	cursor: pointer;
	&:hover {
		text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
	}
	&:active {
		color: red;
	}
`;

//1. Header로 로그인 상태 확인하고, 로그인 되었음을 알려주는 태그 만들기,
//2. 로그아웃 기능 구현 (useCookies에 removeCookies('USID')) 호출
//3. 이슈 보드페이지에 로그인시에만 댓글 작성 가능 (토큰 정보 확인해서 구현)
//4. 홈에서 각 페이지 게시글 연동
//5. 된글 기능 구현 (like 숫자로 타이틀 불러오기)

// setLogin 후 user 값이 변하지 않음.
const Header = ({
	location: { pathname },
	visibleMenu,
	setVisibleMenu,
	user,
	userActive,
	logoutFunction,
}) => {
	const [cookies] = useCookies(["USID"]);

	const dispatch = useDispatch();
	const setLoginFunc = (user) => dispatch(setLogin(user));

	const getLoginInfo = async () => {
		try {
			const token = cookies.USID;
			if (!token) return;

			const url = `${config.host}/users/token-verify`;
			const data = JSON.stringify({
				token,
			});
			const headers = {
				"Content-Type": "application/json",
			};
			const result = await axios.post(url, data, { headers });

			const ok = result.data.ok;
			if (!ok) {
				return;
			}
			const userData = result.data.userInfo;
			setLoginFunc(userData);
		} catch (err) {
			console.log(err);
			alert("에러 발생 관리자에게 문의하세요.");
			return;
		}
	};

	useEffect(() => {
		getLoginInfo();
	}, []);

	return (
		<>
			<Main src={uthis} />
			<VisibleButton onClick={() => setVisibleMenu(!visibleMenu)}>
				<BiMenu style={{ fontSize: "1rem", color: " rgba(0, 0, 0, 0.7)" }} />
			</VisibleButton>
			{visibleMenu ? (
				<VisibleMenus>
					<LoginCloseButton>
						<BiXCircle
							onClick={() => setVisibleMenu(!visibleMenu)}
							style={{ fontSize: "1rem", color: "rgba(255,255,255,0.8)" }}
						/>
					</LoginCloseButton>
					<LoginBlock>
						<LoginIdBox>
							<LoginIdSpan>I D:</LoginIdSpan> <LoginIdInput />
						</LoginIdBox>
						<LoginPWBox>
							<LoginPwSpan>PW:</LoginPwSpan> <LoginPWInput />
						</LoginPWBox>
						<LoginButtonBlock>
							<LoginButton to="/login">로그인</LoginButton>
							<LoginButtonMenu to="/signIn">회원가입</LoginButtonMenu>
						</LoginButtonBlock>
					</LoginBlock>
					<LoginBottomBlock>
						<LoginBottomMenu to="/find">아이디를 잊으셨나요?</LoginBottomMenu>
						<LoginBottomMenu to="/find">패스워드를 잊으셨나요?</LoginBottomMenu>
					</LoginBottomBlock>
				</VisibleMenus>
			) : (
				""
			)}
			<HeaderTopBlock>
				<HeaderTopList>
					<HeaderTopMenus>
						{userActive ? (
							<HeaderTopUserBlock>
								<HeaderTopUser>{user.name} 님</HeaderTopUser>
								<HeaderTopLogout onClick={() => logoutFunction()}>
									로그아웃
								</HeaderTopLogout>
							</HeaderTopUserBlock>
						) : (
							<Link to="/login">로그인</Link>
						)}
					</HeaderTopMenus>
					<HeaderTopMenus>
						{!userActive ? (
							<HeaderTopUserBlock>
								<Link to="/signIn">회원가입</Link>
							</HeaderTopUserBlock>
						) : null}
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
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.login.user,
	};
};

export default withRouter(connect(mapStateToProps)(Header));
