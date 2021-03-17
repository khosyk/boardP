import React from "react";
import styled from "styled-components";
import covid from "../covid.png";
import { VscEdit, VscChromeClose } from "react-icons/vsc";

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
	margin-bottom: 10vh;
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

const Btn = styled.button`
	border: none;
	background-color: transparent;
	width: 55px;
	height: 25px;
	border-radius: 2px;
	padding: 0px 5px;
	font-weight: 300;
	font-size: 0.8rem;
	opacity: 0.5;
	cursor: pointer;
	&:hover {
		opacity: 1;
	}
`;

const Content = styled.div`
	display: block;
	word-break: break-word;
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

const ContentBottom = styled.div``;

const ContentLike = styled.div``;

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
	padding-left: 5px;
`;

const Replytime = styled.span`
	font-size: 0.7rem;
	padding-top: 0.05rem;
	display: inline-block;
	color: rgba(0, 0, 0, 0.3);
	padding-left: 5px;
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
`;

const ReplyInputTopBlock = styled.div`
	display: flex;
	flex-direction: row;
`;

const ReplyInputName = styled.input`
	height: 1.2rem;
	width: 185px;
	margin-bottom: 0.5rem;
	font-size: 0.9rem;
	border: 1px solid rgba(0, 0, 0, 0.3);
`;

const ReplyInputPassword = styled.input`
	margin-left: 5px;
	height: 1.2rem;
	width: 100px;
	font-size: 0.9rem;
	border: 1px solid rgba(0, 0, 0, 0.3);
`;

const ReplyButtonBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
`;

const ReplyEdit = styled.button`
	height: 1.2rem;
	border: 1px solid rgba(0, 0, 0, 0.3);
	border-radius: 2px;
	font-weight: 300;
	font-size: 0.8rem;
	cursor: pointer;
	&:active {
		background-color: rgba(0, 0, 0, 0.1);
	}
`;

const ReplyInputContent = styled.div`
	width: 100%;
	padding: 5px;
	border: 1px solid rgba(0, 0, 0, 0.3);
	min-height: 4.5rem;
	font-size: 1rem;
	line-height: 1.2rem;
	letter-spacing: 0.1rem;
	resize: auto;
`;

export default function Detail() {
	return (
		<MainPosition>
			<MainBlock>
				<Title>
					<span>COVID 19, can we get back daily life oneday?</span>
				</Title>
				<ContentBlock>
					<Content>
						<BtnBlock>
							<Btn>
								<VscEdit style={{ fontSize: "0.7rem" }} />
								<span style={{ paddingLeft: "2px" }}>수정</span>
							</Btn>
							<Btn>
								<VscChromeClose style={{ fontSize: "0.7rem" }} />
								<span style={{ paddingLeft: "2px" }}>삭제</span>
							</Btn>
						</BtnBlock>
						<ContentImg src={covid} />
						<p>
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
							health workers have been attacked and intimidated. This
						</p>
					</Content>
					<ContentBottom></ContentBottom>
				</ContentBlock>

				<ReplyBlock>
					<RepliesBlock>
						<ReplyHeader>
							<div>전체 댓글</div>
						</ReplyHeader>
						<ReplyBody>
							<ReplyContentBlock>
								<ReplyContentTopPosition>
									<ReplyContentName>10글자닉네임예시용 </ReplyContentName>
									<ReplyIpAddress>(*.223.442)</ReplyIpAddress>
									<Replytime>
										{new Date(2021, 2, 17, 11).toLocaleDateString()}
									</Replytime>
								</ReplyContentTopPosition>
								<ReplyContent>
									코로나가 빨리 종식 되기를 기원합니다.
								</ReplyContent>
							</ReplyContentBlock>
							<ReplyContentBlock>
								<ReplyContentTopPosition>
									<ReplyContentName>nickisWhattt </ReplyContentName>
									<ReplyIpAddress>(*.112.122)</ReplyIpAddress>
									<Replytime>
										{new Date(2021, 2, 17).toLocaleDateString()}
									</Replytime>
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
							<ReplyInputName maxLength="10" placeholder="작성자 이름" />
							<ReplyInputPassword maxLength="6" placeholder="비밀번호 입력" />
							<ReplyButtonBox>
								<ReplyEdit>작성</ReplyEdit>
							</ReplyButtonBox>
						</ReplyInputTopBlock>

						<ReplyInputContent
							placeholder="댓글 내용을 작성해주세요."
							contentEditable
						/>
					</ReplyInputPosition>
				</ReplyBlock>
			</MainBlock>
		</MainPosition>
	);
}

///content bottom 추가

// content reply button 추가 (수정,삭제)
