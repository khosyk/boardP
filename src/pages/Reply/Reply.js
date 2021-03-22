import React, { useState } from "react";
import styled from "styled-components";
import {
	VscDebugStepOut,
	VscHeart,
	VscEdit,
	VscChromeClose,
	VscArrowSmallUp,
} from "react-icons/vsc";
import ReplyContents from "./ReplyContents";

// Reply header body

const ReplyHeader = styled.div`
	display: flex;
	margin-left: -0.5rem;
	padding-top: 0.5rem;
	padding-left: 0.5rem;
	width: 102%;
	height: 2rem;
	font-size: 0.9rem;
	font-weight: 300;
	background-color: rgba(0, 0, 0, 0.03);
`;

const ReplyBody = styled.div`
	font-size: 0.9rem;
	margin-bottom: 1rem;
`;

//댓글 입력창 표시

const ReplyBlock = styled.div`
	width: 100%;
	margin-top: 10px;
	padding: 0.5rem;
	border-top: 1px solid #adb5bd;
`;

const ReplyInputPosition = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	width: 100%;
`;

const ReplyInputTopBlock = styled.div`
	display: flex;
	flex-direction: row;
`;

const ReplyInputName = styled.input`
	height: 1.3rem;
	width: 185px;
	margin-bottom: 0.5rem;
	font-size: 0.9rem;
	border: 1px solid rgba(0, 0, 0, 0.3);
`;

const ReplyInputPassword = styled.input`
	margin-left: 5px;
	height: 1.3rem;
	width: 100px;
	font-size: 0.9rem;
	border: 1px solid rgba(0, 0, 0, 0.3);
`;

const ReplyInputButtonBlock = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
`;

const ReplyInputSubmit = styled.button`
	height: 1.3rem;
	border: 1px solid rgba(0, 0, 0, 0.3);
	border-radius: 2px;
	font-weight: 300;
	font-size: 0.8rem;
	padding: 1px 5px;
	cursor: pointer;
	&:hover {
		background-color: rgba(0, 0, 0, 0.1);
	}
`;

const ReplyInputContent = styled.textarea`
	width: inherit;
	padding: 5px;
	border: 1px solid rgba(0, 0, 0, 0.3);
	min-height: 4.5rem;
	font-size: 1rem;
	line-height: 1.2rem;
	letter-spacing: 0.1rem;
	resize: vertical;
	&:hover {
		& + div {
			opacity: 0.9;
			display: flex;
		}
	}
`;

const ReplyToolTip = styled.div`
	opacity: 0;
	display: none;
	position: absolute;
	width: 230px;
	color: white;
	justify-content: flex-end;
	background-color: rgba(0, 0, 0, 0.78);
	border-radius: 4px;
	height: 1.4rem;
	line-height: 1.2rem;
	margin-top: 5px;
	transition: all 0.2s ease-in;
	bottom: -25px;
	right: 0%;
`;

export default function Reply({
	handleReplyInput,
	createReply,
	ReplyData,
	count,
})
{
  
	
  return (
		<>
			<ReplyBlock>
				<ReplyHeader>
					<div>전체 댓글 ({count > 0 ? count : 0})</div>
				</ReplyHeader>
				<ReplyBody>
					{ReplyData.map((row) => (
						<ReplyContents key={row.id} ReplyData={ReplyData} />
					))}
				</ReplyBody>
				<ReplyInputPosition>
					<ReplyInputTopBlock>
						<ReplyInputName
							name="name"
							onInput={handleReplyInput}
							maxLength="10"
							placeholder="작성자 이름"
						/>
						<ReplyInputPassword
							onInput={handleReplyInput}
							name="ReplyPassword"
							maxLength="6"
							placeholder="비밀번호 입력"
						/>
						<ReplyInputButtonBlock>
							<ReplyInputSubmit onClick={createReply}>작성</ReplyInputSubmit>
						</ReplyInputButtonBlock>
					</ReplyInputTopBlock>
					<ReplyInputContent
						name="ReplyContent"
						onInput={handleReplyInput}
						placeholder="댓글을 작성해주세요."
					/>
					<ReplyToolTip>
						댓글창 사이즈를 변경 할 수 있어요. <VscArrowSmallUp />
					</ReplyToolTip>
				</ReplyInputPosition>
			</ReplyBlock>
		</>
	);
}
