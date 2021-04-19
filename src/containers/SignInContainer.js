import React, { useRef, useState } from "react";
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
	margin-top: 40px;
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

const SignInBottomButton = styled.a`
	font-size: 1rem;
	border: 1px solid grey;
	border-radius: 2px;
	padding: 10px 100px;
	cursor: pointer;
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

function SignInContainer() {
	const [input, setInput] = useState({
		nickname: "",
		userId: "",
		checkUser: false,
		password: "",
		passwordCheck: "",
	});

	const { nickname, userId, password, passwordCheck, checkUser } = input;

	const getValue = (e) => {
		const { name, value } = e.target;
		console.log(name, value);
		setInput({
			...input,
			[name]: value,
		});
	};

	const example = [
		{
			nickname: "test1",
			userId: "test2",
		},
	];

	const nicknameRef = useRef(null);
	const idRef = useRef(null);
	const passwordRef = useRef(null);
	const passwordCheckRef = useRef(null);

	const checkNickname = (e) => {
		e.preventDefault();

		if (nickname !== "" || userId !== "") {
			for (let i = 0; i < example.length; i++) {
				if (userId === example[i].userId && nickname === example[i].nickname) {
					alert("닉네임과 아이디 중복입니다. :(");
					setInput({ ...input, nickname: "", userId: "", checkUser: false });
					nicknameRef.current.focus();
					return false;
				}
				if (nickname === example[i].nickname) {
					alert("닉네임 중복입니다. : (");
					setInput({ ...input, nickname: "", checkUser: false });
					nicknameRef.current.focus();
					return false;
				}
				if (userId === example[i].userId) {
					alert("아이디 중복입니다. :(");
					setInput({ ...input, userId: "", checkUser: false });
					idRef.current.focus();
					return false;
				} else {
					alert("중복 확인되었습니다.");
					setInput({ ...input, checkUser: true });
					console.log(checkUser);
				}
			}
		} else {
			alert("닉네임 또는 아이디를 입력해주세요.");
		}
	};

	let checkSpc = /[~!@#$%^&*()_+|<>?:{}]/;

	const history = useHistory();

	const joinUser = (e) => {
		e.preventDefault();
		if (checkUser === true && password !== "" && passwordCheck !== "") {
			if (password !== passwordCheck && checkSpc.test(password)) {
				alert("비밀번호를 확인해주세요.");
				setInput({ ...input, passwordCheck: "" });
				passwordCheckRef.current.focus();
				console.log("working");
				return false;
			} else {
				setInput({ ...input, checkPassword: true });
				alert("환영합니다. :))");
				history.push("/");
			}
		} else if (checkUser !== true) {
			alert("중복 확인을 눌러주세요.");
			return false;
		} else {
			alert("비밀번호 입력 및 비밀번호 확인해주세요.");
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
							name="userId"
							onInput={getValue}
							value={userId}
							placeholder="아이디"
						/>
						<SignInIdCheck onClick={checkNickname}>중복 확인</SignInIdCheck>
					</SignInIdBox>
					<SignInPWBox>
						<SignInPWInput
							ref={passwordRef}
							name="password"
							onInput={getValue}
							value={password}
							placeholder="비밀번호"
						/>
						<SignInPWInput
							ref={passwordCheckRef}
							name="passwordCheck"
							onInput={getValue}
							value={passwordCheck}
							placeholder="비밀번호 확인"
						/>
						<SignInPWSpan>* 주의 *</SignInPWSpan>
						<SignInPWSpan>
							비밀번호는 특수문자를 포함해 10글자 이상 작성해주세요.
						</SignInPWSpan>
					</SignInPWBox>
					<SignInButtonBlock>
						<SignInBottomButton onClick={joinUser}>회원가입</SignInBottomButton>
					</SignInButtonBlock>
					<SignInFootBlock>
						<SignInFootOthers>또는 다른 계정으로 로그인</SignInFootOthers>
						<SignInFootOtherSignIns>
							<SignInFootGoogle />
							<SignInFootKakao />
						</SignInFootOtherSignIns>
					</SignInFootBlock>
				</SignInBlock>
			</MainBlock>
		</MainPosition>
	);
}

export default SignInContainer;
