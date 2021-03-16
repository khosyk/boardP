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
	@media (max-width: 768px) {
		justify-content: center;
	}
`;

const MainPosition = styled.div`
	margin-top: 2rem;
	width: 75%;
<<<<<<< HEAD
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
=======
	padding: 0.5%;
	margin-left: 11.5%;
	margin-top: 20px;
	opacity: 0.9;
	@media (max-width: 960px) {
		box-sizing: border-box;
		height: 100rem;
		background-color: none;
		border: none;
		box-shadow: none;
	}
`;


const MainArticleBlock = styled("div")`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	width: 52%;
	margin-right: 2%;
	margin-left: 2%;
	background-color: rgba(255, 255, 255, 0.5);
	height: 46rem;
	border-bottom: 1px solid rgba(0, 0, 0, 0.2);
	
	@media (max-width: 960px) {
		height: 47rem;
		width: 100%;
		transition: width 0.2s ease-out;
	}
`;

const TitleBox = styled("div")`

	height: 45px;
	width: 100%;
	padding:0px 30px;
	padding-top: 10px;
	font-size: 1.2rem;
	font-weight: 600;
	line-height: 1.5rem;
	overflow: hidden;
	text-overflow: ellipsis;
	text-transform: uppercase;
	white-space: nowrap;
	z-index: 2;
	border-top-left-radius: 5px;
	@media (max-width: 960px) {
		font-size: 1.2rem;
>>>>>>> 53475f028ad5630d0f6b2e5ddd39850668de16fb
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
<<<<<<< HEAD
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
=======
	height: 24%;
	margin-top: 10px;
	padding: 0 30px;
	text-align: justify;
	display: -webkit-box;
>>>>>>> 53475f028ad5630d0f6b2e5ddd39850668de16fb
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
<<<<<<< HEAD
	align-content: center;
	flex: 1 50%;
=======
	flex-direction: column;
	align-items: center;
	width: 35%;
	margin-right: 2%;
	margin-left: 2%;
	box-sizing: border-box;
	height: 46rem;
	z-index: 1;
	@media (max-width: 960px) {
		height: 47rem;
		width: 100%;
		padding-bottom: 50px;
		margin-top: -35px;
		margin-bottom: 2%;
	}
>>>>>>> 53475f028ad5630d0f6b2e5ddd39850668de16fb
`;

const Writer = styled.div``;

const InfoRight = styled.div`
	display: flex;
<<<<<<< HEAD
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
=======
	flex-direction: column;
	width: 100%;
	align-items: center;
	height: 22.35rem;
	background-color: rgba(255, 255, 255, 0.9);
	border-bottom: 1px solid rgba(0, 0, 0, 0.2);
	z-index: 2;
	margin-top: 20px;
	&:first-child {
		margin-top: 0px;
	}
	@media (max-width: 960px) {
		margin-bottom: 20px;
		margin-top: 0px;
	}
`;

const SubTitle = styled("div")`
	width: 100%;
	padding: 0 30px;
	padding-bottom: 10px;
	margin: 0px 30px;
	margin-bottom: 3px;
	font-size: 1.2rem;
	font-weight: 600;
	line-height: 1.5rem;
	background-color: rgba(255, 255, 255, 0.9);
	border-top-left-radius: 5px;
	z-index: 3;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	text-transform: uppercase;
	@media (max-width: 960px) {
		font-size: 1.1rem;
	}
`;

const SubImg = styled.img`
	width: 90%;
	max-width: 350px;
	height: 68%;
	position: relative;
	z-index: 1;
	top: -10px;
	margin-bottom: 10px;
	background-color: rgba(255, 255, 255, 0.8);
`;
const SubText = styled.div`
	width: 100%;
	height: 6rem;
	padding: 5px 30px;
	display: -webkit-box;
>>>>>>> 53475f028ad5630d0f6b2e5ddd39850668de16fb
	word-break: break-word;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export default function Home() {
	return (
		<MainBlock>
<<<<<<< HEAD
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
=======
			<MainArticleBlock>
				<TitleBox>디아블로2 리마스터 최초 공개!! (똥겜 or 갓겜인가?)</TitleBox>
				<MainImg src={diablo} />
				<MainText>
					시스템 사양은 디아블로 3보다 훨씬 더 높으며, CPU/RAM 사양은 WoW
					어둠땅보다 높다. 권장사양기준으로 RAM이 16GB로 3D 그래픽 렌더링과 광원
					효과로 인해 기본 메모리 사양이 높아진걸로 추측된다. 하지만 디아블로
					2처럼 2D 그래픽으로 전환하는 것도 가능한걸로 보아 실제로 플레이를
					해봐야 알 수 있을것으로 보인다. macOS의 시스템 사양은 아직 발표하지
					않았다. 3. 상세[편집] 2021년 2월 20일 발표와 동시에 공식 사이트에서
					2개의 상품을 예약판매 중이며 2021년 내 출시한다. 디아블로 2:
					레저렉션에는 디아블로 2와 확장팩인 파괴의 군주의 스토리가 포함되어
					있고[7], 디아블로 대악마 컬렉션은 디아블로 2: 레저럭션에 디아블로 3
					이터널 컬렉션[8]에 디아블로 3의 수집품[9]이 추가된 패키지이다.
					디아블로 2 레저럭션: 48,000원 디아블로 대악마 컬렉션: 72,000원[10]
				</MainText>
			</MainArticleBlock>
			<SubBoxes>
				<SubBox>
					<SubTitle>COVID 19, can we get back daily life oneday?</SubTitle>
					<SubImg src={covid} />
					<SubText>
						This is a story about COVID 19. No matter whoever's fault, it
						doesn't matter. Since 2019, it just destroyed our daily life and I
						really hate it.
					</SubText>
					<br />
				</SubBox>
				<SubBox>
					<SubTitle>
						박찬욱 감독영화 기생충 칸에서는 호평 나에게는 혹평
					</SubTitle>
					<SubImg src={parasite} />

					<SubText>
						내꺼하 자! 네 옆에 있을게! 어! 이 세상 끝까지 책임질게! 뚜루루루루
						따라라 뚜루루루 따라! 뚜!
					</SubText>
				</SubBox>
			</SubBoxes>
>>>>>>> 53475f028ad5630d0f6b2e5ddd39850668de16fb
		</MainBlock>
	);
}

// link 로 각각 해당 게시글로 연결 -> 각블록 전체에 걸기
// P 1920// 1360 // 1200 //M 992 // 768
