import React, { useMemo, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { connect, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { RiKakaoTalkFill } from "react-icons/ri";
import { useCookies } from "react-cookie";
import { setLogin } from "../modules/login";
import config from "../config.json";

const MainPosition = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-left: auto;
	margin-right: auto;
	height: 100vh;
	margin-top: -1px;
	background-color: rgba(0, 0, 0, 0.02);
`;

const MainBlock = styled.div`
	display: flex;
	flex-direction: column;
	width: 80%;
	height: 70%;
	justify-content: center;
	align-items: center;
	margin-top: 30px;
	min-width: 700px;
	max-width: 1200px;
	margin-bottom: 5vh;
	@media (max-width: 767px) {
		min-width: 330px;
	}
`;

const LoginBlock = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: rgba(255, 255, 255, 0.9);
	border-radius: 4px;
	width: 480px;
	height: 560px;
	box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.1);
`;

const LoginLogin = styled.div`
	font-size: 1.5rem;
	margin-top: 120px;
	font-weight: 600;
`;

const LoginHello = styled.div`
	font-size: 0.9rem;
	margin-top: 30px;
`;

const LoginIdBox = styled.div`
	margin-top: 30px;
	display: flex;
	justify-content: center;
`;

const LoginIdInput = styled.input`
	border: none;
	width: 250px;
	padding: 10px;
	height: 40px;
	font-size: 1.2rem;
	border-radius: 2px;
	box-shadow: 0px 0.1px 0.5px 1px rgba(0, 0, 0, 0.1);
	&:focus {
		outline: none !important;
		border: 1px solid rgba(0, 0, 0, 0.5);
	}
`;

const LoginPWBox = styled.div`
	margin-top: 10px;
	display: flex;
	justify-content: center;
`;

const LoginPWInput = styled.input`
	border: none;
	width: 250px;
	padding: 10px;
	height: 40px;
	font-size: 1.2rem;
	border-radius: 2px;
	box-shadow: 0px 0.1px 0.5px 1px rgba(0, 0, 0, 0.1);
	&:focus {
		outline: none !important;
		border: 1px solid rgba(0, 0, 0, 0.5);
	}
`;

const LoginButtonBlock = styled.div`
	margin-top: 20px;
	display: flex;
	justify-content: center;
`;

const LoginBottomButton = styled.a`
	font-size: 1rem;
	border: 1px solid grey;
	border-radius: 2px;
	padding: 5px 20px;
	cursor: pointer;
	&:active {
		color: red;
		background-color: rgba(0, 0, 0, 0.01);
	}
	&:hover {
		font-weight: 600;
	}
`;

const LoginBottomLink = styled(Link)`
	font-size: 1rem;
	margin-left: 16px;
	padding-top: 6px;
	&:active {
		color: red;
	}
	&:hover {
		font-weight: 600;
	}
`;

const LoginBottomFind = styled(Link)`
	font-size: 1rem;
	margin-left: 16px;
	padding-top: 6px;
	&:active {
		color: red;
	}
	&:hover {
		font-weight: 600;
	}
`;

const LoginFootBlock = styled.div`
	margin-top: 30px;
	width: 250px;
	border-top: 1px solid rgba(0, 0, 0, 0.3);
`;

const LoginFootOthers = styled.div`
	margin-top: 5px;
	opacity: 0.6;
	font-size: 0.8rem;
	padding: 5px;
`;

const LoginFootOtherLogins = styled.div`
	margin-top: 20px;
	margin-left: 20%;
	width: 60%;
	justify-content: space-around;
	display: flex;
`;

const LoginFootGoogle = styled(FcGoogle)`
	font-size: 35px;
	border-radius: 50%;
	cursor: pointer;
`;

const LoginFootKakao = styled(RiKakaoTalkFill)`
	font-size: 35px;
	border-radius: 50%;
	color: #3f2900;
	cursor: pointer;
`;

function LoginContainer() {
	const [cookies, setCookie, removeCookie] = useCookies(["USID"]);
	// 1. 회원가입이 되어있는가? -> y 2. 회원 확인  -> y 3. 로그인 정보 확인 -> y 4. 페이지 이동 (다른페이지에서도 유지)

	const dispatch = useDispatch();

	const setLoginFunc = (user) => dispatch(setLogin(user));

	const randomHello = useMemo(() => {
		var a = [
			"와줘서 고마워요. ;)",
			"오늘도 좋은 하루! :)",
			"봐도 봐도 좋네 :D",
			"헬로 월드 ;)",
		];
		var b = Math.floor(Math.random() * 4);
		return a[b];
	}, []);

	const [input, setInput] = useState({
		userId: "",
		password: "",
	});

	const { userId, password } = input;

	const getValue = (e) => {
		const { name, value } = e.target;
		setInput({
			...input,
			[name]: value,
		});
	};

	const handleLogin = async () => {
		try {
			const url = `${config.host}/users/login`;
			const data = JSON.stringify({
				email: userId,
				password,
			});
			const headers = { "Content-Type": "application/json" };
			const result = await axios.post(url, data, { headers });
			var tokenResult = result.data.token;
			if (!result.data.ok) {
				alert(result.data.err);
				return false;
			}
			//token -> 로그인 성공, 로그인 유지 장치 -> 저장은 setCookies (쿠키에 저장한다.)
			// 쿠키 (이름 ,값, 옵션)   maxAge = 걸리는 시간
			setCookie("USID", tokenResult, { path: "/", maxAge: 10800 });
			return tokenResult;
		} catch (error) {
			alert(`로그인페이지 에러 : ${error}`);
		}
	};

	async function handleCookie(cookie) {
		try {
			if (!cookie) {
				return;
			}
			const url = `${config.host}/users/token-verify`;
			const data = JSON.stringify({
				token: cookie,
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

			alert("환영합니다.");
			history.push("/");
		} catch (error) {
			alert(`헤더에러:${error}`);
		}
	}

	const idRef = useRef(null);
	const passwordRef = useRef(null);
	const history = useHistory();

	const onClickLogin = async (e) => {
		e.preventDefault();
		try {
			if (userId === "" || password === "") {
				alert("아이디, 비밀번호를 입력해주세요.");
				idRef.current.focus();
			} else {
				const tokenCookie = await handleLogin();
				await handleCookie(tokenCookie);
			}
		} catch (err) {
			alert("로그인중 에러 발생");
			console.log(err);
		}
	};

	return (
		<MainPosition id='Login'>
			<MainBlock>
				<LoginBlock>
					<LoginLogin>로그인</LoginLogin>
					<LoginHello>{randomHello}</LoginHello>
					<LoginIdBox>
						<LoginIdInput
							required
							ref={idRef}
							name="userId"
							onInput={getValue}
							value={userId}
							placeholder="아이디"
						/>
					</LoginIdBox>
					<LoginPWBox>
						<LoginPWInput
							required
							type="password"
							ref={passwordRef}
							name="password"
							onInput={getValue}
							value={password}
							placeholder="비밀번호"
						/>
					</LoginPWBox>
					<LoginButtonBlock>
						<LoginBottomButton onClick={onClickLogin}>로그인</LoginBottomButton>
						<LoginBottomLink to="/signIn">회원가입</LoginBottomLink>
						<LoginBottomFind to="/find">비밀번호 찾기</LoginBottomFind>
					</LoginButtonBlock>
					<LoginFootBlock></LoginFootBlock>
				</LoginBlock>
			</MainBlock>
		</MainPosition>
	);
}

const mapStateToProps = (state) => {
	return {
		user: state.login.user,
	};
};

export default connect(mapStateToProps)(LoginContainer);
