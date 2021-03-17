import React from "react";
import styled from "styled-components";
import { ImFire } from "react-icons/im";

//images
import covid from "../covid.png";
import diablo from "../diablo2re.png";
import parasite from "../parasite.png";
import { Link } from "react-router-dom";

// 제작-> 경쟁과 협력, 커뮤니티 3대종파 이슈 게임 무비,
// 올림픽처럼 1, 2, 3 등을 정해서 그들끼리 경쟁하고 협력할 수 있게끔 만듬

// 화면이 1200px 이상 => 일정크기까지 늘어나다가, 화면위치에 컨텐츠 고정
// 컨텐츠 사이즈 유지, 박스사이즈로 조절,

// 화면이 960px 이하 => 일정크기까지 줄어들다가, 화면 안으로 (기준은 768px)

const MainBlock = styled("div")`
	display: flex;
	justify-content: flex-end;
	width: 100%;
	background-color: #f1f3f5;
	margin-left: auto;
	margin-right: auto;
	@media (max-width: 768px) {
		justify-content: center;
	}
`;

const MainPosition = styled.div`
	margin-top: 2rem;
	width: 75%;
	margin-left: auto;
	margin-right: auto;
	@media (max-width: 768px) {
		width: 90%;
	}
	@media (min-width: 769px) {
		display: flex;
		flex-direction: row;
		width: 80%;
		flex-wrap: wrap;
		justify-content: space-evenly;
		align-content: flex-start;
	}
`;

const SidePosition = styled.div`
	position: -webkit-sticky;
	position: sticky;
	width: 20%;
	min-width: 12rem;
	margin-top: 6rem;
	margin-bottom: auto;
	margin-right: 2%;
	background-color: white;
	border-radius: 3px;
	padding: 0.5rem;
	height: fit-content;
	max-width: 250px;
	@media (max-width: 930px) {
		display: none;
		visibility: hidden;
	}
`;

const ArticleBlock = styled.div`
	width: 100%;
	border-radius: 2px;
	@media (max-width: 768px) {
		margin-bottom: 2rem;
	}
	@media (min-width: 769px) {
		width: 46%;
		min-width: 280px;
		max-width: 320px;
		max-height: 241.6px;
		margin-bottom: 1rem;
		&:first-child {
		}
	}
	@media (min-width: 1360px) {
	}
`;

const LinkBlock = styled(Link)``;

const ImgStyle = styled.div`
	background-color: white;
	padding-top: 55%;
	width: 100%;
	position: relative;
`;

const ContentImg = styled.img`
	border-radius: 3px;
	border-bottom-left-radius: 0px;
	border-bottom-right-radius: 0px;
	position: absolute;
	top: -1px;
	left: 0px;
	width: 100%;
	height: 100%;
	display: block;
	object-fit: cover;
`;

const TextBlock = styled.div`
	background-color: white;
	height: 2.5rem;
	padding: 0.5rem;
`;

const Title = styled.div`
	font-size: 1.1rem;
	line-height: 1.5rem;
	font-weight: 600;
	word-break: break-word;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;
const InfoBlock = styled.div`
	background-color: white;
	border-top: 1px solid silver;
	font-size: 0.8rem;
	width: 100%;
	height: 1.6rem;
	padding: 0.5rem;
	display: flex;
	justify-content: space-between;
`;

const InfoLeft = styled.div`
	display: flex;
	align-content: center;
	flex: 1 50%;
`;

const Writer = styled.div``;

const InfoRight = styled.div`
	display: flex;
	flex: 1 50%;
	justify-content: flex-end;
`;

const RanksBlock = styled.div`
	background-color: white;
	width: 100%;
	height: 18.5rem;
	margin-top: 2rem;
	margin-bottom: 2rem;
	@media (min-width: 769px) {
		display: none;
	}
`;

const RankBlock = styled.div`
	font-size: 0.9rem;
	line-height: 1.2rem;
	padding: 0.5rem;
`;
const RankTitle = styled.div`
	border-bottom: 1px solid grey;
	padding-bottom: 0.25rem;
	word-break: break-word;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export default function Home() {
	return (
		<MainBlock>
			<MainPosition>
				<ArticleBlock>
					<LinkBlock to="/diablo">
						<ImgStyle>
							<ContentImg src={diablo} />
						</ImgStyle>
						<TextBlock>
							<Title>디아블로2 리저렉션 출시! 똥겜인가 갓겜인가?</Title>
						</TextBlock>
					</LinkBlock>
					<InfoBlock>
						<InfoLeft>
							<Writer>
								from.<Link to=""> WAITINGDIA</Link>
							</Writer>
						</InfoLeft>
						<InfoRight>{new Date().toLocaleDateString()}</InfoRight>
					</InfoBlock>
				</ArticleBlock>
				<RanksBlock>
					<div style={{ borderBottom: "1px solid grey", padding: "0.5rem" }}>
						오늘 된글
					</div>
					<RankBlock>
						<RankTitle>
							1. 디아블로2 리저렉션 출시! 똥겜인가 갓겜인가?
						</RankTitle>
						<RankTitle>2. 코로나바이러스에 대하여</RankTitle>
						<RankTitle>3. 똥겜인가? 갓겜인가?</RankTitle>
						<RankTitle>4. 아무리 밥을 먹어도...</RankTitle>
						<RankTitle>5. 50kg 뺀 썰 푼다</RankTitle>
						<RankTitle>6. 겨울왕국3 출시, 디즈니에도 PC요소가?</RankTitle>
						<RankTitle>7. 찌릿찌릿 지구촌</RankTitle>
						<RankTitle>8. 행복한 나를 리뷰, by 오태식이</RankTitle>
						<RankTitle>9. 간단한 JAVASCRIPT 게임들 추천!</RankTitle>
						<RankTitle>10. 갓겜인가?</RankTitle>
					</RankBlock>
				</RanksBlock>
				<ArticleBlock>
					<LinkBlock to="/diablo">
						<ImgStyle>
							<ContentImg src={covid} />
						</ImgStyle>
						<TextBlock>
							<Title>
								Vaccin of CORONA-19 was successful, can we return to our life?
							</Title>
						</TextBlock>
					</LinkBlock>
					<InfoBlock>
						<InfoLeft>
							<Writer>
								from.<Link to=""> corona헌터</Link>
							</Writer>
						</InfoLeft>
						<InfoRight>{new Date().toLocaleDateString()}</InfoRight>
					</InfoBlock>
				</ArticleBlock>
				<ArticleBlock>
					<LinkBlock to="/diablo">
						<ImgStyle>
							<ContentImg src={covid} />
						</ImgStyle>
						<TextBlock>
							<Title>
								Vaccin of CORONA-19 was successful, can we return to our life?
							</Title>
						</TextBlock>
					</LinkBlock>
					<InfoBlock>
						<InfoLeft>
							<Writer>
								from.<Link to=""> corona헌터</Link>
							</Writer>
						</InfoLeft>
						<InfoRight>{new Date().toLocaleDateString()}</InfoRight>
					</InfoBlock>
				</ArticleBlock>
				<ArticleBlock>
					<LinkBlock to="/diablo">
						<ImgStyle>
							<ContentImg src={covid} />
						</ImgStyle>
						<TextBlock>
							<Title>
								Vaccin of CORONA-19 was successful, can we return to our life?
							</Title>
						</TextBlock>
					</LinkBlock>
					<InfoBlock>
						<InfoLeft>
							<Writer>
								from.<Link to=""> corona헌터</Link>
							</Writer>
						</InfoLeft>
						<InfoRight>{new Date().toLocaleDateString()}</InfoRight>
					</InfoBlock>
				</ArticleBlock>
				<ArticleBlock>
					<LinkBlock to="/diablo">
						<ImgStyle>
							<ContentImg src={parasite} />
						</ImgStyle>
						<TextBlock>
							<Title>
								parasite of parasite-19 was successful, can we return to our
								life?
							</Title>
						</TextBlock>
					</LinkBlock>
					<InfoBlock>
						<InfoLeft>
							<Writer>
								from.<Link to=""> corona헌터</Link>
							</Writer>
						</InfoLeft>
						<InfoRight>{new Date().toLocaleDateString()}</InfoRight>
					</InfoBlock>
				</ArticleBlock>
				<ArticleBlock>
					<LinkBlock to="/diablo">
						<ImgStyle>
							<ContentImg src={parasite} />
						</ImgStyle>
						<TextBlock>
							<Title>
								parasite of parasite-19 was successful, can we return to our
								life?
							</Title>
						</TextBlock>
					</LinkBlock>
					<InfoBlock>
						<InfoLeft>
							<Writer>
								from.<Link to=""> corona헌터</Link>
							</Writer>
						</InfoLeft>
						<InfoRight>{new Date().toLocaleDateString()}</InfoRight>
					</InfoBlock>
				</ArticleBlock>
				<ArticleBlock>
					<LinkBlock to="/diablo">
						<ImgStyle>
							<ContentImg src={diablo} />
						</ImgStyle>
						<TextBlock>
							<Title>디아블로2 리저렉션 출시! 똥겜인가 갓겜인가?</Title>
						</TextBlock>
					</LinkBlock>
					<InfoBlock>
						<InfoLeft>
							<Writer>
								from.<Link to=""> WAITINGDIA</Link>
							</Writer>
						</InfoLeft>
						<InfoRight>{new Date().toLocaleDateString()}</InfoRight>
					</InfoBlock>
				</ArticleBlock>
				<ArticleBlock>
					<LinkBlock to="/diablo">
						<ImgStyle>
							<ContentImg src={diablo} />
						</ImgStyle>
						<TextBlock>
							<Title>디아블로2 리저렉션 출시! 똥겜인가 갓겜인가?</Title>
						</TextBlock>
					</LinkBlock>
					<InfoBlock>
						<InfoLeft>
							<Writer>
								from.<Link to=""> WAITINGDIA</Link>
							</Writer>
						</InfoLeft>
						<InfoRight>{new Date().toLocaleDateString()}</InfoRight>
					</InfoBlock>
				</ArticleBlock>
				<ArticleBlock>
					<LinkBlock to="/diablo">
						<ImgStyle>
							<ContentImg src={diablo} />
						</ImgStyle>
						<TextBlock>
							<Title>디아블로2 리저렉션 출시! 똥겜인가 갓겜인가?</Title>
						</TextBlock>
					</LinkBlock>
					<InfoBlock>
						<InfoLeft>
							<Writer>
								from.<Link to=""> WAITINGDIA</Link>
							</Writer>
						</InfoLeft>
						<InfoRight>{new Date().toLocaleDateString()}</InfoRight>
					</InfoBlock>
				</ArticleBlock>
				<ArticleBlock>
					<LinkBlock to="/diablo">
						<ImgStyle>
							<ContentImg src={diablo} />
						</ImgStyle>
						<TextBlock>
							<Title>디아블로2 리저렉션 출시! 똥겜인가 갓겜인가?</Title>
						</TextBlock>
					</LinkBlock>
					<InfoBlock>
						<InfoLeft>
							<Writer>
								from.<Link to=""> WAITINGDIA</Link>
							</Writer>
						</InfoLeft>
						<InfoRight>{new Date().toLocaleDateString()}</InfoRight>
					</InfoBlock>
				</ArticleBlock>
				<ArticleBlock>
					<LinkBlock to="/diablo">
						<ImgStyle>
							<ContentImg src={diablo} />
						</ImgStyle>
						<TextBlock>
							<Title>디아블로2 리저렉션 출시! 똥겜인가 갓겜인가?</Title>
						</TextBlock>
					</LinkBlock>
					<InfoBlock>
						<InfoLeft>
							<Writer>
								from.<Link to=""> WAITINGDIA</Link>
							</Writer>
						</InfoLeft>
						<InfoRight>{new Date().toLocaleDateString()}</InfoRight>
					</InfoBlock>
				</ArticleBlock>
				<ArticleBlock>
					<LinkBlock to="/diablo">
						<ImgStyle>
							<ContentImg src={diablo} />
						</ImgStyle>
						<TextBlock>
							<Title>디아블로2 리저렉션 출시! 똥겜인가 갓겜인가?</Title>
						</TextBlock>
					</LinkBlock>
					<InfoBlock>
						<InfoLeft>
							<Writer>
								from.<Link to=""> WAITINGDIA</Link>
							</Writer>
						</InfoLeft>
						<InfoRight>{new Date().toLocaleDateString()}</InfoRight>
					</InfoBlock>
				</ArticleBlock>
			</MainPosition>
			<SidePosition>
				<div style={{ borderBottom: "1px solid grey", padding: "0.5rem" }}>
					오늘 된글
				</div>
				<RankBlock>
					<RankTitle>1. 디아블로2 리저렉션 출시! 똥겜인가 갓겜인가?</RankTitle>
					<RankTitle>2. 코로나바이러스에 대하여</RankTitle>
					<RankTitle>3. 똥겜인가? 갓겜인가?</RankTitle>
					<RankTitle>4. 아무리 밥을 먹어도...</RankTitle>
					<RankTitle>5. 50kg 뺀 썰 푼다</RankTitle>
					<RankTitle>6. 겨울왕국3 출시, 디즈니에도 PC요소가?</RankTitle>
					<RankTitle>7. 찌릿찌릿 지구촌</RankTitle>
					<RankTitle>8. 행복한 나를 리뷰, by 오태식이</RankTitle>
					<RankTitle>9. 간단한 JAVASCRIPT 게임들 추천!</RankTitle>
					<RankTitle>10. 갓겜인가?</RankTitle>
				</RankBlock>

				<div
					style={{
						borderBottom: "1px solid grey",
						padding: "0.5rem",
						marginTop: "1rem",
					}}>
					주간 된글
				</div>
				<RankBlock>
					<RankTitle>1. 디아블로2 리저렉션 출시! 똥겜인가 갓겜인가?</RankTitle>
					<RankTitle>2. 코로나바이러스에 대하여</RankTitle>
					<RankTitle>3. 똥겜인가? 갓겜인가?</RankTitle>
					<RankTitle>4. 아무리 밥을 먹어도...</RankTitle>
					<RankTitle>5. 50kg 뺀 썰 푼다</RankTitle>
					<RankTitle>6. 겨울왕국3 출시, 디즈니에도 PC요소가?</RankTitle>
					<RankTitle>7. 찌릿찌릿 지구촌</RankTitle>
					<RankTitle>8. 행복한 나를 리뷰, by 오태식이</RankTitle>
					<RankTitle>9. 간단한 JAVASCRIPT 게임들 추천!</RankTitle>
					<RankTitle>10. 갓겜인가?</RankTitle>
				</RankBlock>
			</SidePosition>
		</MainBlock>
	);
}

// link 로 각각 해당 게시글로 연결 -> 각블록 전체에 걸기
// P 1920// 1360 // 1200 //M 992 // 768
