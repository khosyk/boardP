import React, { useState } from "react";
import covid from "../covid.png";
import styled from "styled-components";
import {Route, Link, withRouter, Switch } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import Edit from './Edit';
import {
	VscDebugStepOut,
	VscHeart,
	VscEdit,
	VscChromeClose,
	VscArrowSmallUp,
} from "react-icons/vsc";
import Reply from "./Reply/Reply";
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
		min-width: 330px;
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
	padding: 0.5rem;
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
	flex-direction: row;
	margin-bottom: 30px;
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
	margin-left: 2rem;
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

export default withRouter(({ location: { pathname } }) => {
	// content data state, function
	const [contentData, setContentData] = useState({
		contentId:1,
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

	const {contentId, title, content, img } = contentData;
	const onRemove = () => {
		if (window.confirm("정말 삭제합니까?")) {
			alert("삭제되었습니다.");
		} else {
			alert("취소합니다.");
		}
	};

	// like share count

	const [LikeShare, setLikeShare] = useState({
		like: 0,
		share: 0,
		likeActive: true,
		shareActive: true,
	});

	const { like, share, likeActive, shareActive } = LikeShare;
	const likeButton = document.getElementsByClassName("like");

	const onLike = () => {
		if (likeActive === true) {
			setLikeShare({ ...LikeShare, like: like + 1, likeActive: false });
			likeButton[0].attributes.style.textContent =
				"color: #ffa8a8; font-size: 30px; cursor: pointer; transition: all 0.5s ease-in";
		} else {
			return;
		}
	};

	const currentAddress = window.location.href;

	const onShare = () => {
		window.prompt('아래 주소를 복사해서 공유해주세요.',currentAddress);
		if (shareActive === true) {
			setLikeShare({ ...LikeShare, share: share + 1, shareActive: false });
		} else {
			return;
		}
	};

	//reply Function

	// Input State

	const [ReplyInput, setReplyInput] = useState({
		userName: "",
		replyPassword: "",
		address: Math.floor(Math.random() * (999 - 100 + 1) + 100),
		date: new Date(2021, 2, 17, 11).toLocaleDateString(),
		replyContent: "",
		id: 0,
	});

	const { id, userName, replyPassword, replyContent } = ReplyInput;

	const handleReplyInput = (e) => {
		const { name, value } = e.target;
		setReplyInput({
			...ReplyInput,
			[name]: value,
		});
	};

	//ReplyData state

	const [ReplyData, setReplyData] = useState([]);

	const createReply = () => {
		if (userName !== "" && replyPassword !== "" && replyContent !== "") {
			setReplyData(ReplyData.concat({ ...ReplyInput }));
			setReplyInput({
				userName: "",
				replyPassword: "",
				address: Math.floor(Math.random() * (999 - 100 + 1) + 100),
				date: new Date(2021, 2, 17, 11).toLocaleDateString(),
				replyContent: "",
				id: id + 1,
			});
		} else {
			alert("작성자명, 비밀번호, 댓글을 입력해주세요.");
		}
	};

	const handleRemove = (id) => {
		if (window.confirm("정말 삭제합니까?")) {
			alert("삭제 되었습니다.");
			setReplyData(ReplyData.filter((ReplyData) => ReplyData.id !== id));
			console.log(id, "t1");
		} else {
			alert("취소합니다.");
		}
	};

	
//edit the content
	
	const handleEdit = (id) => {
		if (contentId === id) {
			setContentData(
				
			)
		}
	}


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
								<BtnEdit to={`/issue/${1}/edit`}>
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
								<ContentBottomMenuLike>
									<ContentBottomMenuLikeHeart>
										<VscHeart
											className="like"
											onClick={onLike}
											style={{
												fontSize: "30px",
												cursor: "pointer",
												color: "#adb5bd",
											}}
										/>
										<ContentBottomMenuToolTip>좋아요</ContentBottomMenuToolTip>
									</ContentBottomMenuLikeHeart>
									<ContentBottomMenusCount>{like}</ContentBottomMenusCount>
								</ContentBottomMenuLike>
								<ContentBottomMenuShare>
									<ContentBottomMenuShareIcon>
										<VscDebugStepOut
											style={{ fontSize: "30px", cursor: "pointer" }}
											onClick={onShare}
										/>
										<ContentBottomMenuToolTipSecond >
											공유하기
										</ContentBottomMenuToolTipSecond>
									</ContentBottomMenuShareIcon>
									<ContentBottomMenusCount>{share}</ContentBottomMenusCount>
								</ContentBottomMenuShare>
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
					<Reply
						count={ReplyData.length}
						handleReplyInput={handleReplyInput}
						createReply={createReply}
						ReplyData={ReplyData}
						ReplyInput={ReplyInput}
						handleRemove={handleRemove}
					/>
				</MainBlock>
				<Route path="/issue/:id/edit" contentData={contentData} component={Edit} >
					<Edit />
				</Route>
			</MainPosition>
		</>
	);
}
);
///content bottom 추가

// content reply button 추가 (수정,삭제)
