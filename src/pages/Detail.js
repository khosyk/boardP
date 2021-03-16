import React from "react";
import styled from "styled-components";
import covid from "../covid.png";

const MainPosition = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 10vh;
`;

const MainBlock = styled.div`
	width: 70%;
	margin-top: 2rem;
	min-height: 600px;
	min-width: 700px;
	max-width: 1200px;
	border-bottom: 1px solid #adb5bd;
`;

const Title = styled.div`
	display: flex;
	padding: 1rem 0px;
	border-top: 1px solid #adb5bd;
	border-bottom: 1px solid #adb5bd;
	background-color: rgba(0, 0, 0, 0.01);
	height: 3rem;
	font-size: 1rem;
	font-weight: 600;
	text-indent: 1rem;
`;

const ContentBlock = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 10px;
	font-size: 1rem;
	min-height: 500px;
	border: none;
	border-radius: 2px;
	text-indent: 2px;
`;

const Content = styled.div`
	display: block;
	word-break: break-word;
	padding: 1rem;
`;

const ContentImg = styled.img``;

const BtnBlock = styled.div`
	padding-top: 10px;
	display: flex;
	position: relative;
	margin-top: 50px;
	right: 0px;
	bottom: 10px;
	width: 100%;
	justify-content: flex-end;
`;

const Btn = styled.button`
	border: 1px solid #757e86;
	border-radius: 2px;
	padding: 3px 15px;
	font-weight: 300;
	font-size: 0.8rem;
	cursor: pointer;
`;

const ReplyBlock = styled.div`
	width: 100%;
	margin-top: 10px;
	padding: 0.5rem;
	border-top: 1px solid #adb5bd;
`;

// 전체 댓글 내용 표시

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

const ReplyBody = styled.div``;

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

const ReplyInputBlock = styled.div``;

const ReplyTitle = styled.input`
	font-size: 0.9rem;
	width: 20%;
	margin-bottom: 0.5rem;
`;

const ReplyPassword = styled.input`
	margin-left: 1rem;
	width: 20%;
	font-size: 0.9rem;
`;

const ReplyContent = styled.textarea`
	width: 100%;
	min-height: 4.5rem;
	font-size: 0.9rem;
	height: fit-content;
	resize: inherit;
`;

export default function Detail() {
	return (
		<MainPosition>
			<MainBlock>
				<Title>COVID 19, can we get back daily life oneday?</Title>
				<ContentBlock>
					<Content>
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
				</ContentBlock>
				<BtnBlock>
					<Btn>수정</Btn>
					<Btn>삭제</Btn>
				</BtnBlock>
				<ReplyBlock>
					<RepliesBlock>
						<ReplyHeader>
							<div>전체 댓글</div>
						</ReplyHeader>
						<ReplyBottom />
					</RepliesBlock>
					<ReplyInputBlock>
						<ReplyTitle placeholder="작성자 이름" />
						<ReplyPassword placeholder="비밀번호 입력" />
						<ReplyContent placeholder="댓글 내용을 작성해주세요." />
					</ReplyInputBlock>
				</ReplyBlock>
			</MainBlock>
		</MainPosition>
	);
}
