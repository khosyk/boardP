import React from "react";
import styled from "styled-components";
import { VscArrowSmallUp } from "react-icons/vsc";
import ReplyContents from "./ReplyContents";

const ReplyBlock = styled.div`
	width: 100%;
	margin-top: 10px;
	padding: 0.5rem;
	border-top: 1px solid #adb5bd;
`;

// Reply header body

const ReplyTitle = styled.div`
	display: flex;
	margin-left: -8px;
	padding-top: 8px;
	padding-left: 8px;
	width: 101.4%;
	height: 32px;
	font-size: 13px;
	background-color: rgba(0, 0, 0, 0.03);
`;

const ReplyBody = styled.div`
	font-size: 0.9rem;
	margin-bottom: 1rem;
`;

const ReplyBottom = styled.div`
	margin-left: -0.5rem;
	padding-top: 0.5rem;
	padding-left: 0.5rem;
	width: 101.4%;
	height: 1rem;
	font-size: 0.9rem;
	font-weight: 300;
	background-color: rgba(0, 0, 0, 0.03);
	margin-bottom: 20px;
`;

//댓글 입력창 표시

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
	font-size: 14px;
	line-height: 16px;
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
	width: 235px;
	color: white;
	justify-content: flex-end;
	background-color: rgba(0, 0, 0, 0.78);
	border-radius: 4px;
	height: 20px;
	line-height: 18px;
	font-size:14px;
	letter-spacing: -0.5px;
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
	handleRemove,
}) {
	const { name, replyPassword, body } = ReplyData;

	return (
		<>
			<ReplyBlock>
				<ReplyTitle>
					<div>전체 댓글 ({count > 0 ? count : 0})</div>
				</ReplyTitle>
				<ReplyBody>
					{ReplyData.map((ReplyData) => (
						<ReplyContents
							key={ReplyData.id}
							ReplyData={ReplyData}
							handleRemove={handleRemove}
						/>
					))}
				</ReplyBody>

				<ReplyBottom />
				<ReplyInputPosition>
					<ReplyInputTopBlock>
						<ReplyInputName
							name="name"
							onInput={handleReplyInput}
							maxLength="10"
							placeholder="작성자 이름"
							value={name}
						/>
						<ReplyInputPassword
							name="replyPassword"
							onInput={handleReplyInput}
							maxLength="6"
							placeholder="비밀번호 입력"
							value={replyPassword}
						/>
						<ReplyInputButtonBlock>
							<ReplyInputSubmit onClick={createReply}>작성</ReplyInputSubmit>
						</ReplyInputButtonBlock>
					</ReplyInputTopBlock>
					<ReplyInputContent
						name="body"
						onInput={handleReplyInput}
						placeholder="댓글을 작성해주세요."
						value={body}
					/>
					<ReplyToolTip>
						댓글창 사이즈를 변경 할 수 있어요.<VscArrowSmallUp />
					</ReplyToolTip>
				</ReplyInputPosition>
			</ReplyBlock>
		</>
	);
}
