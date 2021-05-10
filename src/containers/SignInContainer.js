import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { RiKakaoTalkFill } from "react-icons/ri";

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
	margin-top: 2rem;
	min-width: 700px;
	max-width: 1200px;
	margin-bottom: 5vh;
	@media (max-width: 767px) {
		min-width: 330px;
	}
`;

const SignInBlock = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: rgba(255, 255, 255, 0.9);
	border-radius: 4px;
	width: 480px;
	height: 560px;
	box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.1);
`;

const SignInSignIn = styled.div`
	font-size: 1.5rem;
	margin-top: 70px;
	font-weight: 600;
	margin-bottom: 5px;
`;

const SignInIdBox = styled.div`
	margin-top: 30px;
	display: flex;
	flex-direction: column;
	position: relative;
`;

const SignInNameInput = styled.input`
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

const SignInIdInput = styled.input`
	border: none;
	width: 250px;
	padding: 10px;
	padding-right: 82px;
	height: 40px;
	font-size: 1.2rem;
	border-radius: 2px;
	box-shadow: 0px 0.1px 0.5px 1px rgba(0, 0, 0, 0.1);
	&:focus {
		outline: none !important;
		border: 1px solid rgba(0, 0, 0, 0.5);
	}
`;

const SignInIdCheck = styled.a`
	display: block;
	position: absolute;
	top: 53px;
	right: 10px;
	cursor: pointer;
	&:hover {
		font-weight: 600;
	}
	&:active {
		color: red;
	}
`;

const SignInPWBox = styled.div`
	margin-top: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const SignInPWInput = styled.input`
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

const SignInPWSpan = styled.span`
	margin-top: 10px;
	font-weight: 600;
	font-size: 0.8rem;
`;

const SignInButtonBlock = styled.div`
	margin-top: 30px;
	display: flex;
	justify-content: center;
`;

const SignInBottomButton = styled.input`
	font-size: 1rem;
	border: 1px solid grey;
	border-radius: 2px;
	padding: 10px 100px;
	cursor: pointer;
	background-color: white;
	&:active {
		color: white;
		background-color: rgba(0, 0, 0, 1);
	}
	&:hover {
		font-weight: 600;
	}
`;

const SignInFootBlock = styled.div`
	margin-top: 30px;
	width: 250px;
	border-top: 1px solid rgba(0, 0, 0, 0.3);
`;

const SignInFootOthers = styled.div`
	margin-top: 5px;
	opacity: 0.6;
	font-size: 0.8rem;
	padding: 5px;
`;

const SignInFootOtherSignIns = styled.div`
	margin-top: 20px;
	margin-left: 20%;
	width: 60%;
	justify-content: space-around;
	display: flex;
`;

const SignInFootGoogle = styled(FcGoogle)`
	font-size: 35px;
	border-radius: 50%;
	cursor: pointer;
`;

const SignInFootKakao = styled(RiKakaoTalkFill)`
	font-size: 35px;
	border-radius: 50%;
	color: #3f2900;
	cursor: pointer;
`;

// 회원가입 -> 닉네임, 이메일 중복 및 형식 확인 -> 패스워드 확인 -> 회원가입 post

function SignInContainer() {
	const [input, setInput] = useState({
		nickname: "",
		email: "",
		checkUser: false,
		password: "",
		passwordCheck: "",
	});

	var { nickname, email, password, passwordCheck, checkUser } = input;

	const getValue = (e) => {
		const { name, value } = e.target;
		setInput({
			...input,
			[name]: value,
		});
	};

	const postData = async () => {
		const url = "http://119.196.222.239:4000/users/signup";
		const data = JSON.stringify({ email, password, name: nickname });
		const headers = { "Content-Type": "application/json" };
		const result = await axios.post(url, data, { headers });
	};

	function isEmail(asValue) {
		var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

		return regExp.test(asValue);
	}

	const emailCheck = async () => {
		const url = `http://119.196.222.239:4000/users/check-duplicate/email/${email}`;
		const result = await axios.get(url);

		return result.data.ok;
	};

	const nameCheck = async () => {
		const url = `http://119.196.222.239:4000/users/check-duplicate/name/${nickname}`;
		const result = await axios.get(url);

		return result.data.ok;
	};

	const nicknameRef = useRef(null);
	const idRef = useRef(null);
	const passwordRef = useRef(null);
	const passwordCheckRef = useRef(null);

	///checkUser 이용해서 로그인 아이디 닉네임 확인하기,
	/// page만들기

	/// check user false => 초기상태, nick, id가 true => checkuser도 true  => 회원가입 완료

	// useEffect는 펑션 작동에 시간이 조금 걸린다 (현재 확인된건 componentDidndUpdate처럼 사용할 경우);

	const checkNickname = async () => {
		if (nickname !== "" && email !== "") {
			if (isEmail(email)) {
				if ((await emailCheck()) === false && (await nameCheck()) === false) {
					alert("닉네임과 아이디 중복입니다. :(");
					setInput({ ...input, nickname: "", email: "", checkUser: false });
					nicknameRef.current.focus();
					return false;
				}
				if ((await nameCheck()) === false) {
					alert("닉네임 중복입니다. : (");
					setInput({ ...input, nickname: "", checkUser: false });
					nicknameRef.current.focus();
					return false;
				}
				if ((await emailCheck()) === false) {
					alert("아이디 중복입니다. :(");
					setInput({ ...input, email: "", checkUser: false });
					idRef.current.focus();
					return false;
				} else {
					setInput({ ...input, checkUser: true });
					alert("중복 확인되었습니다.");
				}
			} else {
				setInput({ ...input, checkUser: false });
				alert("아이디는 이메일 형식이어야 합니다.");
				return false;
			}
		} else {
			alert("닉네임 또는 아이디를 입력해주세요.");
			return false;
		}
	};

	// 회원가입 버튼 클릭 시, password 확인, 회원가입 post

	let checkSpc = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*[~!@#$%^&*()_+|<>?:{}]/;

	const history = useHistory();

	const joinUser = (e) => {
		e.preventDefault();
		if (checkUser === true && password !== "" && passwordCheck !== "") {
			if (
				password !== passwordCheck ||
				!checkSpc.test(password) ||
				password.length >= 10
			) {
				alert(
					"비밀번호를 확인해주세요. \n *비밀번호는 10자 이상 특수 문자를 포함해야 합니다.*"
				);
				setInput({ ...input, passwordCheck: "" });
				passwordRef.current.focus();
				return false;
			} else {
				setInput({ ...input, checkPassword: true });
				postData();
				alert("환영합니다. :))");
				history.push("/");
			}
		} else {
			alert("비밀번호 및 비밀번호 확인란을 다시 입력해주세요.");
			passwordRef.current.focus();
			return false;
		}
	};

	//1.중복확인을 눌렀는지 2. 비밀번호 중복이 안되는지 -> 회원가입

	return (
		<MainPosition>
			<MainBlock>
				<SignInBlock>
					<SignInSignIn>회원가입</SignInSignIn>
					<SignInPWSpan>
						닉네임, 아이디, 비밀번호만으로 이용 가능합니다.
					</SignInPWSpan>
					<SignInIdBox>
						<SignInNameInput
							ref={nicknameRef}
							name="nickname"
							onInput={getValue}
							value={nickname}
							placeholder="닉네임"
						/>
						<SignInIdInput
							ref={idRef}
							name="email"
							onInput={getValue}
							value={email}
							placeholder="아이디@이메일.형식"
						/>
						<SignInIdCheck onClick={checkNickname}>확인</SignInIdCheck>
					</SignInIdBox>
					<SignInPWBox>
						<SignInPWInput
							ref={passwordRef}
							name="password"
							onInput={getValue}
							value={password}
							minlength="10"
							pattern="[A-Za-z]+"
							placeholder="비밀번호"
						/>
						<SignInPWInput
							ref={passwordCheckRef}
							name="passwordCheck"
							onInput={getValue}
							value={passwordCheck}
							minlength="10"
							pattern="[A-Za-z]+"
							placeholder="비밀번호 확인"
						/>
						<SignInPWSpan>* 주의 *</SignInPWSpan>
						<SignInPWSpan>
							비밀번호는 특수문자를 포함해 영문자로 10글자 이상 작성해주세요.
						</SignInPWSpan>
					</SignInPWBox>
					<SignInButtonBlock>
						<SignInBottomButton
							type="submit"
							onClick={joinUser}
							value="회원가입"></SignInBottomButton>
					</SignInButtonBlock>
					<SignInFootBlock></SignInFootBlock>
				</SignInBlock>
			</MainBlock>
		</MainPosition>
	);
}

export default SignInContainer;
