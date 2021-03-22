import React from "react";
import styled from "styled-components";
import { VscEdit, VscChromeClose } from "react-icons/vsc";

// 전체 댓글 내용 표시

const RepliesPosition = styled.div`
	margin-top: 1rem;
	margin-bottom: 1rem;
`;

//댓글들 css 댓글, 버튼

const ReplyContentBlock = styled.div`
	padding-top: 5px;
	padding-bottom: 15px;
	margin-top: 3px;
	display: flex;
	flex-direction: column;
	border-bottom: 1px solid rgba(0, 0, 0, 0.03);
`;

const ReplyContentTopPosition = styled.div`
	display: flex;
	align-content: center;
	padding-top: 0.3rem;
	height: 1.5rem;
	margin-bottom: 5px;
`;

const ReplyContentTopBlock = styled.div`
	width: 71%;
`;

const ReplyContentName = styled.span`
	font-weight: 600;
	font-size: 0.8rem;
	letter-spacing: 1px;
`;

const ReplyIpAddress = styled.span`
	font-size: 0.7rem;
	padding-top: 0.05rem;
	font-weight: 300;
	color: rgba(0, 0, 0, 0.3);
	padding-left: 2px;
`;

const Replytime = styled.span`
	font-size: 0.7rem;
	padding-top: 0.05rem;
	display: inline-block;
	color: rgba(0, 0, 0, 0.3);
	padding-left: 5px;
`;

const ReplyButtonBlock = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 29%;
	@media (max-width: 767px) {
		width: 28%;
	}
`;

const ReplyButtons = styled.a`
	display: flex;
	align-content: center;
	border: none;
	background-color: transparent;
	font-weight: 300;
	font-size: 0.8rem;
	opacity: 0.4;
	cursor: pointer;
	&:hover {
		opacity: 1;
	}
`;

const ReplyContentbox = styled.div`
	font-size: 0.8rem;
`;

const ReplyBottom = styled.div`
	margin-left: -0.5rem;
	padding-top: 0.5rem;
	padding-left: 0.5rem;
	width: 102%;
	height: 1rem;
	font-size: 0.9rem;
	font-weight: 300;
	background-color: rgba(0, 0, 0, 0.03);
`;

export default function ReplyContents({ ReplyData }) {
	const { name, ReplyPassword, address, date, ReplyContent, id } = ReplyData;

	return (
		<RepliesPosition id={id}>
			<ReplyContentBlock>
				<ReplyContentTopPosition>
					<ReplyContentTopBlock>
						<ReplyContentName>{name}</ReplyContentName>
						<ReplyIpAddress></ReplyIpAddress>
						<Replytime></Replytime>
					</ReplyContentTopBlock>
					<ReplyButtonBlock>
						<ReplyButtons>
							<VscEdit style={{ fontSize: "0.7rem" }} />
							<span style={{ paddingLeft: "1px" }}>수정</span>
						</ReplyButtons>
						<ReplyButtons>
							<VscChromeClose
								style={{ paddingLeft: "3px", fontSize: "0.8rem" }}
							/>
							<span style={{ paddingLeft: "1px" }}>삭제</span>
						</ReplyButtons>
					</ReplyButtonBlock>
				</ReplyContentTopPosition>
				<ReplyContentbox>{ReplyContent}</ReplyContentbox>
			</ReplyContentBlock>
			{/* <ReplyContentBlock>
					<ReplyContentTopPosition>
						<ReplyContentTopBlock>
							<ReplyContentName>nickisWhattt</ReplyContentName>
							<ReplyIpAddress>(*.442)</ReplyIpAddress>
							<Replytime>
								{new Date(2021, 2, 17, 11).toLocaleDateString()}
							</Replytime>
						</ReplyContentTopBlock>
						<ReplyButtonBlock>
							<ReplyButtons>
								<VscEdit style={{ fontSize: "0.7rem" }} />
								<span style={{ paddingLeft: "1px" }}>수정</span>
							</ReplyButtons>
							<ReplyButtons>
								<VscChromeClose
									style={{ paddingLeft: "3px", fontSize: "0.8rem" }}
								/>
								<span style={{ paddingLeft: "1px" }}>삭제</span>
							</ReplyButtons>
						</ReplyButtonBlock>
					</ReplyContentTopPosition>
					<ReplyContentbox>
						Corona Virus is bad, sky is blue, I feel excited, so keep coding.
					</ReplyContentbox>
				</ReplyContentBlock> */}

			<ReplyBottom />
		</RepliesPosition>
	);
}
