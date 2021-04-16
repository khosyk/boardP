import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect, useStore } from "react-redux";
import { bindActionCreators } from "redux";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import {RiKakaoTalkFill} from 'react-icons/ri'
const MainPosition = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-left: auto;
	margin-right: auto;
    height:100vh;
    margin-top:-1px;
    background-color:rgba(0,0,0,0.02);
`;

const MainBlock = styled.div`
	display: flex;
	flex-direction: column;
	width: 80%;
    height:70%;
    justify-content:center;
    align-items:center;
	margin-top: 2rem;
	min-width: 700px;
	max-width: 1200px;
	margin-bottom: 5vh;
	@media (max-width: 767px) {
		min-width: 330px;
	}
`;

const LoginBlock = styled.div`
    display:flex;
    flex-direction:column;
	align-items:center;
    background-color:rgba(255,255,255,0.9);
    border-radius:4px;
    width:480px;
    height:560px;
	box-shadow: 0px 1px 3px 1px rgba(0,0,0,0.1);	
`;

const LoginLogin = styled.div`
	font-size:1.5rem;
	margin-top:80px;
	font-weight:600;
`

const LoginHello = styled.div`
	font-size:0.9rem;
	margin-top:30px;
`;

const LoginIdBox = styled.div`
	margin-top:30px;
	display:flex;
	justify-content:center;
`;


const LoginIdInput = styled.input`
	border:none;
	width:250px;
	padding:10px;
	height:40px;
	font-size:1.2rem;
	border-radius:2px;
	box-shadow: 0px 0.1px 0.5px 1px rgba(0,0,0,0.1);
	&:focus{
	outline: none !important;
    border:1px solid rgba(0,0,0,0.5);
	}
`;

const LoginPWBox = styled.div`
	margin-top: 10px;
	display:flex;
	justify-content:center;
`;

const LoginPWInput = styled.input`
	border:none;
	width:250px;
	padding:10px;
	height:40px;
	font-size:1.2rem;
	border-radius:2px;
	box-shadow: 0px 0.1px 0.5px 1px rgba(0,0,0,0.1);
	&:focus{
	outline: none !important;
    border:1px solid rgba(0,0,0,0.5);
	}
`;

const LoginButtonBlock = styled.div`
	margin-top:20px;
	display:flex;
	justify-content:center;
`;

const LoginBottomButton = styled(Link)`
	font-size:1rem;
	border:1px solid grey;
	border-radius:2px;
	padding: 5px 20px;
	&:active{
	color:red;
	background-color:rgba(0,0,0,0.01);
	}
	&:hover{
	font-weight:600;
	}
`;

const LoginBottomLink = styled(Link)`
	font-size:1rem;
	margin-left:16px;
	padding-top:6px;
	&:active{
	color:red;
	}
	&:hover{
	font-weight:600;
	}
`;

const LoginBottomFind = styled(Link)`
	font-size:1rem;
	margin-left:16px;
	padding-top:6px;
	&:active{
	color:red;
	}
	&:hover{
	font-weight:600;
	}
`;

const LoginFootBlock = styled.div`
	margin-top:30px;
	width:250px;
	border-top:1px solid rgba(0,0,0,0.3);
`;

const LoginFootOthers = styled.div`
	margin-top:5px;
	opacity:0.6;
	font-size:0.8rem;
	padding:5px;
`;

const LoginFootOtherLogins = styled.div`
	margin-top:20px;
	margin-left:20%;
	width:60%;
	justify-content:space-around;
	display:flex;
`;

const LoginFootGoogle = styled(FcGoogle)`
	font-size:35px;
	border-radius:50%;
	cursor:pointer;
`

const LoginFootKakao = styled(RiKakaoTalkFill)`
	font-size:35px;
	border-radius:50%;
	color: #3f2900;
	cursor:pointer;
`;



function LoginContainer()
{
	
	const randomHello = () => {
		var a = ['와줘서 고마워요. ;)', '오늘도 좋은 하루! :)', '봐도 봐도 좋네 :D', '헬로 월드 ;)'];
		var b = Math.floor(Math.random() * 4);
		
		return a[b]
	}


    return (
    <MainPosition>
        <MainBlock>
			<LoginBlock>
				<LoginLogin>
					로그인
				</LoginLogin>
				<LoginHello>
					{randomHello()}		
				</LoginHello>
				<LoginIdBox>
					<LoginIdInput placeholder='아이디'/>
				</LoginIdBox>
				<LoginPWBox>
					<LoginPWInput placeholder='비밀번호'/>
					</LoginPWBox>
				<LoginButtonBlock>
					<LoginBottomButton to='/'>로그인</LoginBottomButton>
					<LoginBottomLink to='/signIn'>회원가입</LoginBottomLink>
					<LoginBottomFind to='/find'>비밀번호 찾기</LoginBottomFind>
					</LoginButtonBlock>
				<LoginFootBlock>
					<LoginFootOthers>
						또는 다른 계정으로 로그인
					</LoginFootOthers>
					<LoginFootOtherLogins>
							<LoginFootGoogle/><LoginFootKakao/>
					</LoginFootOtherLogins>
				</LoginFootBlock>
            </LoginBlock>
        </MainBlock>
    </MainPosition>)
}

export default LoginContainer;