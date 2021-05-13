import React, { Component } from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import axios from "axios";
import config from "../config.json";

//import functions
import {
	setDetail,
	onLike,
	onShare,
	setReply,
	createReply,
	deleteReply,
} from "../modules/detail";

//directories

import covid from "../images/covid.png";
import Edit from "../pages/Edit";
import Reply from "../pages/Reply/Reply";

//icons

import {
	VscDebugStepOut,
	VscHeart,
	VscEdit,
	VscChromeClose,
} from "react-icons/vsc";

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
`;

const ContentBlock = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 1rem;
	min-height: 230px;
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

class DetailContainer extends Component {
	id = this.props.match.params.id; //class 변수
	path = `/issue/${this.id}/edit`;

	async setReplies() {
		try {
			const result = await axios.get(
				`${config.host}/posts/${this.id}` // this = class
			);
			const { data } = result;
			if (data[0].replies) {
				var replyData = JSON.parse(data[0].replies); //JSON.parse를 통해 JSON을 기존 배열 객체 로 바꿔준다
				this.props.setReply(replyData);
			}
			return data;
		} catch (error) {
			alert(`error: ${error}`);
		}
	}

	async componentDidMount() {
		try {
			const data = await this.setReplies();
			this.props.setDetail(data);
		} catch (error) {
			alert(`error :( ${error})`);
		}
	}

	render() {
		const { likeShare, content, replies } = this.props;

		const onRemove = async () => {
			try {
				if (window.confirm("정말 삭제합니까?")) {
					const url = `${config.host}/posts/${this.id}/`;
					await axios.delete(url); // delete는 파라미터가 url만 이씀
					alert("삭제되었습니다.");
					window.history.back();
				} else {
					alert("취소합니다.");
				}
			} catch (error) {
				alert(`error :( :(${error})`);
			}
		};

		const likeButton = document.getElementsByClassName("like");

		const LikeShareCountUp = async () => {
			const url = `${config.host}/posts/${this.id}/`;
			var data = JSON.stringify({
				like: likeShare.like,
				share: likeShare.share,
			});
			const headers = { "Content-Type": "application/json" };
			const result = await axios.put(url, data, { headers });

			return result;
		};

		const onLike = async () => {
			if (likeShare.likeActive === true) {
				var result = await LikeShareCountUp();
				this.props.onLike(result.data.like + 1);

				likeButton[0].attributes.style.textContent =
					"color: #ffa8a8; font-size: 30px; cursor: pointer; transition: all 0.5s ease-in";
			} else {
				alert("한명당 한번만 가능해요.");
				return;
			}
		};

		const onShare = async () => {
			window.prompt("아래 주소를 복사해서 공유해주세요.", currentAddress);
			if (likeShare.shareActive === true) {
				var result = await LikeShareCountUp();
				this.props.onShare(result.data.share + 1);
			} else {
				return;
			}
		};

		const testF = onShare.bind(this);

		const currentAddress = window.location.href;

		var replyInput = {
			name: "",
			replyPassword: "",
			body: "",
		};

		function handleReplyInput(e) {
			const { name, value } = e.target;
			replyInput = {
				...replyInput,
				[name]: value,
			};
		}

		//createReply 1. name replyPassword body 가 작성되었는지? => if문
		// 2. error가 발생 하는가? -> try catch
		// 3. data에는 어떤것이 담겨있고, 데이터 타입은 무엇인가? JSON.stringify()
		// 4. try 문에서 데이터를 post 메소드로 보낼때 비동기로 요청하는가? await
		// 5. 새로이 추가된 replies data를 리렌더링 하는가? setReplies()

		const createReply = async () => {
			var { name, replyPassword, body } = replyInput;

			if (name !== "" && replyPassword !== "" && body !== "") {
				try {
					const url = `${config.host}/posts/${this.id}/comments`;
					const data = JSON.stringify({
						name,
						body,
						password: replyPassword,
					});

					const headers = { "Content-Type": "application/json" }; //content-type을 선언해서 JSON을 기본 데이터 타입으로 사용!

					const replyResult = await axios.post(url, data, { headers });

					const {
						data: { ok, err },
					} = replyResult;

					if (!ok) {
						alert(`error: ${err}`);
						return false;
					}

					await this.setReplies();
				} catch (error) {
					alert(`error:${error}`);
				}
			} else {
				alert("작성자명, 비밀번호, 댓글을 입력해주세요.");
			}
		};

		const handleRemove = async (e) => {
			if (window.confirm("정말 삭제합니까?")) {
				let passwordCheck = prompt("비밀번호를 입력해주세요.");

				try {
					const url = `${config.host}/posts/${this.id}/comments/${e}`;

					const data = JSON.stringify({ password: passwordCheck });

					const headers = { "Content-Type": "application/json" }; //content-type을 선언해서 JSON을 기본 데이터 타입으로 사용!

					const deleteReply = await axios.delete(url, { data, headers });

					if (!deleteReply.data.ok) {
						alert("비밀번호를 확인해주세요.");
						return false;
					}

					await this.setReplies();
				} catch (error) {
					alert(`error: ${error}`);
				}
			} else {
				alert("취소합니다.");
			}
		};

		return (
			<>
				<MainPosition>
					<MainBlock>
						<Title>
							<span>
								{this.id} : {content.title}
							</span>
							<span>{content.userId}</span>
						</Title>
						<ContentBlock>
							<Content>
								<BtnBlock>
									<BtnEdit
										to={{
											pathname: `/issue/${this.id}/edit`,
										}}>
										<VscEdit style={{ fontSize: "0.7rem" }} />
										<span style={{ paddingLeft: "2px" }}>수정</span>
									</BtnEdit>

									<BtnDelete onClick={onRemove}>
										<VscChromeClose style={{ fontSize: "0.7rem" }} />
										<span style={{ paddingLeft: "2px" }}>삭제</span>
									</BtnDelete>
								</BtnBlock>
								{content.img ? (
									<ContentImg src={content.img} alt={content.img} />
								) : (
									<br />
								)}
								{ReactHtmlParser(content.body)}
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
											<ContentBottomMenuToolTip>
												좋아요
											</ContentBottomMenuToolTip>
										</ContentBottomMenuLikeHeart>
										<ContentBottomMenusCount>
											{likeShare.like}
										</ContentBottomMenusCount>
									</ContentBottomMenuLike>
									<ContentBottomMenuShare>
										<ContentBottomMenuShareIcon>
											<VscDebugStepOut
												style={{ fontSize: "30px", cursor: "pointer" }}
												onClick={testF}
											/>
											<ContentBottomMenuToolTipSecond>
												공유하기
											</ContentBottomMenuToolTipSecond>
										</ContentBottomMenuShareIcon>
										<ContentBottomMenusCount>
											{likeShare.share}
										</ContentBottomMenusCount>
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
											<ContentBottomBottomAfter>
												다음글▶
											</ContentBottomBottomAfter>
										</Link>
									</div>
								</ContentBottomBottomBlock>
							</ContentBottomPosition>
						</ContentBlock>
						<Reply
							count={replies.id}
							handleReplyInput={handleReplyInput}
							createReply={createReply}
							ReplyInput={replyInput}
							ReplyData={replies}
							handleRemove={handleRemove}
						/>
					</MainBlock>
				</MainPosition>
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	content: state.detail.content,
	likeShare: state.detail.likeShare,
	replies: state.detail.replies,
});

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			setDetail,
			onLike,
			onShare,
			setReply,
			createReply,
			deleteReply,
		},
		dispatch
	);

export default compose(
	withRouter,
	connect(mapStateToProps, mapDispatchToProps)
)(DetailContainer);

//   withRouter(({ location: { pathname } }) =>
//   {

// });
///content bottom 추가

// content reply button 추가 (수정,삭제)
