import React, { useState } from "react";
import covid from "../covid.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import {
	VscDebugStepOut,
	VscHeart,
	VscEdit,
	VscChromeClose,
	VscArrowSmallUp,
} from "react-icons/vsc";
import Issue from "./Issue";

const MainPosition = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-left: auto;
	margin-right: auto;
`;

const MainBlock = styled.div`
	display: flex;
	flex-direction: column;
	width: 80%;
	margin-top: 2rem;
	min-height: 600px;
	min-width: 700px;
	max-width: 1200px;
	border-bottom: 1px solid #adb5bd;
	margin-bottom: 5vh;
	@media (max-width: 767px) {
		min-width: 300px;
	}
`;

const Title = styled.div`
	display: flex;
	padding: 1rem 0px;
	border-top: 1px solid #adb5bd;
	border-bottom: 1px solid #adb5bd;
	background-color: rgba(0, 0, 0, 0.01);
	min-height: 3rem;
	font-size: 1rem;
	font-weight: 600;
	padding: 1rem;
	line-height: 1.2rem;
	text-align: center;
	@media (max-width: 767px) {
	}
`;

const ContentBlock = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 1rem;
	min-height: 500px;
	border: none;
`;

const BtnBlock = styled.div`
	display: flex;
	margin-top: 5px;
	width: 100%;
	height: 20px;
	justify-content: flex-end;
`;

const BtnEdit = styled(Link)`
	border: none;
	background-color: transparent;
	width: 55px;
	height: 25px;
	border-radius: 2px;
	padding: 0px 5px;
	font-weight: 300;
	font-size: 0.9rem;
	opacity: 0.5;
	cursor: pointer;
	&:hover {
		opacity: 1;
	}
`;

const BtnDelete = styled.a`
	border: none;
	background-color: transparent;
	width: 55px;
	height: 25px;
	border-radius: 2px;
	padding: 0px 5px;
	font-weight: 300;
	font-size: 0.9rem;
	opacity: 0.5;
	cursor: pointer;
	&:hover {
		opacity: 1;
	}
`;

const Content = styled.div`
	display: block;
	word-break: break-word;
	text-align: justify;
	padding: 1rem;
	padding-top: 0px;
	line-height: 1.2rem;
`;

const ContentImg = styled.img`
	width: 100%;
	height: 100%;
	display: block;
	object-fit: cover;
	max-width: 600px;
`;

//좋아요, 싫어요, 공유,

const ContentBottomPosition = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 20px;
`;

const ContentBottomBlock = styled.div`
	display: flex;
	justify-content: center;
`;

const ContentBottomMenus = styled.div`
	display: flex;
	flex-direction: row;
	max-width: 300px;
	margin-bottom: 10px;
`;

const ContentBottomMenuLike = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
`;

const ContentBottomMenuLikeHeart = styled.div`
	width: fit-content;
	height: fit-content;
	font-size: 30px;
	&:hover {
		& > div {
			visibility: visible;
			opacity: 0.9;
		}
	}
`;

const ContentBottomMenuShare = styled.div`
	margin-left: 3rem;
	position: relative;
	flex-direction: column;
`;

const ContentBottomMenuShareIcon = styled.div`
	width: fit-content;
	height: fit-content;
	font-size: 30px;
	&:hover {
		& > div {
			visibility: visible;
			opacity: 0.9;
		}
	}
`;

const ContentBottomMenuToolTip = styled.div`
	position: absolute;
	text-align: center;
	visibility: hidden;
	text-shadow: 1px 1px #ffa8a8;
	color: #fff5f5;
	font-size: 1.1rem;
	top: -25px;
	opacity: 0;
	left: -17px;
	width: 4rem;
	height: 1.4rem;
	transition: all 0.2s ease-in;
`;

const ContentBottomMenuToolTipSecond = styled.div`
	position: absolute;
	text-align: center;
	visibility: hidden;
	color: black;
	font-size: 1.1rem;
	top: -25px;
	opacity: 0;
	left: -17px;
	width: 4rem;
	height: 1.4rem;
	transition: all 0.2s ease-in;
`;

const ContentBottomMenusCount = styled.div`
	text-align: center;
	font-size: 15px;
`;

//이전글, 다음글
const ContentBottomBottomBlock = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
`;

const ContentBottomBottomBefore = styled.div`
	display: inline-block;
	background-color: black;
	color: white;
	border-radius: 3px;
	height: 20px;
	width: 60px;
	text-align: center;
	padding-top: 1px;
	font-size: 1.1rem;
`;

const ContentBottomBottomLeftTitle = styled.span`
	font-size: 0.9rem;
	margin-left: 3px;
`;

const ContentBottomBottomRightTitle = styled.span`
	font-size: 0.9rem;
	margin-right: 3px;
`;

const ContentBottomBottomAfter = styled.div`
	display: inline-block;
	background-color: black;
	color: white;
	border-radius: 3px;
	height: 20px;
	width: 60px;
	text-align: center;
	padding-top: 1px;
	font-size: 1.1rem;
`;

// 전체 댓글 내용 표시

const ReplyBlock = styled.div`
	width: 100%;
	margin-top: 10px;
	padding: 0.5rem;
	border-top: 1px solid #adb5bd;
`;

const RepliesBlock = styled.div`
	margin-top: 1rem;
	margin-bottom: 1rem;
`;

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

//댓글들 css 댓글, 버튼

const ReplyBody = styled.div`
	font-size: 0.9rem;
	margin-bottom: 1rem;
`;

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

const ReplyContent = styled.div`
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

export default function Detail() {
	const [ContentData, setContentData] = useState({
		title: "COVID 19, can we get back daily life oneday?",
		content: `<p>
							Agency chief Tedros Adhanom Ghebreyesus told journalists that
							WHO’s Advisory Committee on Vaccine Safety has been reviewing
							available data on the vaccine and will meet with the European
							Medicines Agency (EMA) on Tuesday. Germany, France, Italy and
							Spain have become the latest countries to temporarily halt use of
							the shot, following reports of blood clots in people who received
							the vaccine from two batches produced in Europe.
						</p>
						<br />
						<p>
							“This does not necessarily mean these events are linked to
							vaccination, but it’s routine practice to investigate them, and it
							shows that the surveillance system works and that effective
							controls are in place”, Tedros said. Dr. Mariângela Simão, a WHO
							Assistant Secretary-General, said the agency is working very
							closely with the EMA, and with national regulatory authorities in
							Europe and other regions, in assessing the adverse effects of the
							AstraZeneca vaccine and all other vaccines. WHO has not received
							reports about “thrombo-embolic events” in other parts of the
							world, she added. Tedros stressed that “the greatest threat” most
							countries face now is lack of access to vaccines, saying he
							receives calls from leaders worldwide “almost every day” asking
							when their nations will receive doses through the COVAX
							initiative.
						</p>
						<br />
						<p>
							Syrian war remembrance The ongoing conflict in Syria has brought
							the country’s once highly-effective health system “to its knees”,
							Tedros said in acknowledging the 10th anniversary of the crisis.
							WHO and its partners continue to deliver services and supplies,
							protect public health and support a network of more than 1,700
							health facilities. Tedros pointed out that tragically, Syria is
							not an isolated case. “Syria is one of many crises around the
							world, from Myanmar to Yemen and Tigray in Ethiopia, where
							millions of people have been denied access to essential health
							services, and where health facilities have been destroyed and
							health workers have been attacked and intimidated.
						</p>`,
		img: { covid },
	});

	const onRemove = () => {
		if (window.confirm("정말 삭제합니까?")) {
			alert("삭제되었습니다.");
		} else {
			alert("취소합니다.");
		}
	};

	const { title, content, img } = ContentData;

	const [ReplyData, setReplyData] = useState([]);

	const [ReplyInput, setReplyInput] = useState({
		name: "",
		ReplyPassword: "",
		address: "",
		date: "",
		ReplyContent: "",
	});

	const onInput = (e) => {
		const { name, value } = e.target;
		setReplyInput({
			[name]: value,
		});
		console.log(ReplyInput);
	};

	return (
		<>
			<MainPosition>
				<MainBlock>
					<Title>
						<span>{title}</span>
					</Title>
					<ContentBlock>
						<Content>
							<BtnBlock>
								<BtnEdit to="/issue/1/edit">
									<VscEdit style={{ fontSize: "0.7rem" }} />
									<span style={{ paddingLeft: "2px" }}>수정</span>
								</BtnEdit>
								<BtnDelete onClick={onRemove}>
									<VscChromeClose style={{ fontSize: "0.7rem" }} />
									<span style={{ paddingLeft: "2px" }}>삭제</span>
								</BtnDelete>
							</BtnBlock>
							<ContentImg src={covid} alt="covid image" />
							{ReactHtmlParser(content)}
						</Content>
						<ContentBottomPosition>
							<ContentBottomBlock>
								<ContentBottomMenus>
									<ContentBottomMenuLike>
										<ContentBottomMenuLikeHeart>
											<VscHeart
												style={{ fontSize: "30px", cursor: "pointer" }}
											/>
											<ContentBottomMenuToolTip>
												좋아요
											</ContentBottomMenuToolTip>
										</ContentBottomMenuLikeHeart>
										<ContentBottomMenusCount>0</ContentBottomMenusCount>
									</ContentBottomMenuLike>
									<ContentBottomMenuShare>
										<ContentBottomMenuShareIcon>
											<VscDebugStepOut
												style={{ fontSize: "30px", cursor: "pointer" }}
											/>
											<ContentBottomMenuToolTipSecond>
												공유하기
											</ContentBottomMenuToolTipSecond>
										</ContentBottomMenuShareIcon>
										<ContentBottomMenusCount>0</ContentBottomMenusCount>
									</ContentBottomMenuShare>
								</ContentBottomMenus>
							</ContentBottomBlock>
							<ContentBottomBottomBlock>
								<div>
									<Link to={() => `/issue/0`}>
										<ContentBottomBottomBefore>
											◀이전글
										</ContentBottomBottomBefore>
										<ContentBottomBottomLeftTitle>
											: 이전글 제목
										</ContentBottomBottomLeftTitle>
									</Link>
								</div>
								<div>
									<Link to={`/issue/2`}>
										<ContentBottomBottomRightTitle>
											다음글 제목 :
										</ContentBottomBottomRightTitle>
										<ContentBottomBottomAfter>다음글▶</ContentBottomBottomAfter>
									</Link>
								</div>
							</ContentBottomBottomBlock>
						</ContentBottomPosition>
					</ContentBlock>
					<ReplyBlock>
						<RepliesBlock>
							<ReplyHeader>
								<div>전체 댓글</div>
							</ReplyHeader>
							<ReplyBody>
								<ReplyContentBlock>
									<ReplyContentTopPosition>
										<ReplyContentTopBlock>
											<ReplyContentName>10글자닉네임예시용</ReplyContentName>
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
									<ReplyContent>
										코로나가 빨리 종식 되기를 기원합니다.
									</ReplyContent>
								</ReplyContentBlock>
								<ReplyContentBlock>
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
									<ReplyContent>
										Corona Virus is bad, sky is blue, I feel excited, so keep
										coding.
									</ReplyContent>
								</ReplyContentBlock>
							</ReplyBody>
							<ReplyBottom />
						</RepliesBlock>
						<ReplyInputPosition>
							<ReplyInputTopBlock>
								<ReplyInputName
									name="name"
									onInput={onInput}
									maxLength="10"
									placeholder="작성자 이름"
								/>
								<ReplyInputPassword
									onInput={onInput}
									name="ReplyPassword"
									maxLength="6"
									placeholder="비밀번호 입력"
								/>
								<ReplyInputButtonBlock>
									<ReplyInputSubmit>작성</ReplyInputSubmit>
								</ReplyInputButtonBlock>
							</ReplyInputTopBlock>
							<ReplyInputContent
								name="ReplyContent"
								onInput={onInput}
								placeholder="댓글을 작성해주세요."
							/>
							<ReplyToolTip>
								댓글창 사이즈를 변경 할 수 있어요. <VscArrowSmallUp />
							</ReplyToolTip>
						</ReplyInputPosition>
					</ReplyBlock>
				</MainBlock>
			</MainPosition>
			<Issue />
		</>
	);
}

///content bottom 추가

// content reply button 추가 (수정,삭제)
