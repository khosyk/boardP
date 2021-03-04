import React from 'react';
import  styled  from 'styled-components';
import covid from '../covid.png';
import diablo from '../diablo2re.png';
import parasite from '../parasite.png';

const MainBlock = styled('div')`
display:flex;
flex-wrap: wrap;
flex-direction:row;
width:75%;
padding:0.5%;
margin-left:11.5%;
margin-top:20px;
opacity:0.9;
  @media (max-width: 900px) {
    
    box-sizing:border-box;
    height:100rem;
    background-color:none;
    border:none;
    box-shadow:none;
  }

`;

const MainArticleBlock = styled('div')`
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
width:52%;
margin-right:2%;
margin-left:2%;
border-bottom-left-radius:5px;
border-top-right-radius:5px;
background-color:rgba(255,255,255,0.5);
box-shadow:1.5px 2px 0px 2px rgba(1,1,1,0.1);
height:46rem;
@media(max-width:900px){
  height:47rem;
  width:100%;
  transition:width 0.2s ease-out;
}
`;

const TitleBox = styled('div')`
height:45px;
padding:0 10px;
width:100%;
padding-top:10px;
padding-left:10px;
font-size:1.2rem;
font-weight:600;
background-color: #ffffff;
line-height:1.5rem;
overflow:hidden;
text-overflow:ellipsis;
text-transform: uppercase;
white-space: nowrap;
z-index:2;
border-top-left-radius:5px;
@media(max-width:900px){
  font-size:1.2rem;
}
`;



const MainImg = styled('img')`
width:90%;
height:65%;
max-width:650px;
top:-1%;
position:relative;
z-index:1;
background-color:rgba(255,255,255,0.9);
`;

const MainText = styled('div')`
width:100%;
height:23%;
margin-top:10px;
padding-bottom:-50px;
padding:0 32px;
text-align:justify;
 display: -webkit-box;
 word-break: break-word;
 -webkit-line-clamp: 6;
-webkit-box-orient: vertical;
overflow:hidden;
font-size:1.1rem;
line-height:1.85rem;
text-overflow:ellipsis;
background-color:rgba(255,255,255,0.9);
z-index:2;
 `;

const SubBoxes = styled('div')`
display:flex;
flex-direction:column;
align-items:center;
width:35%;
margin-right:2%;
margin-left:2%;
box-sizing:border-box;
height:46rem;
z-index:1;
@media(max-width:900px){
  height:47rem;
  width:100%;
  padding-bottom:50px;
  margin-top:-35px;
  margin-bottom:2%;
}
`;

const SubBox = styled.div`

min-width:280px;
display:flex;
flex-direction:column;
width:100%;
align-items:center;
border-bottom-left-radius:5px;
border-top-right-radius:5px;
height:22.35rem;
background-color:rgba(255,255,255,0.9);
box-shadow:1.5px 2px 0px 2px rgba(1,1,1,0.1);
z-index:2;
margin-top:20px;
&:first-child{
margin-top:0px;
}

@media(max-width:900px){
  margin-bottom:20px;
}
`

const SubTitle = styled('div')`
height:13%;
width:100%;
padding:8px;
padding-bottom:10px;
margin: 0px 30px;
margin-bottom:3px;
font-size:1.2rem;
font-weight:600;
line-height:1.1rem;
background-color:rgba(255,255,255,0.9);
border-top-left-radius:5px;
z-index:3;
white-space: nowrap;
overflow:hidden;
text-overflow:ellipsis;
text-transform: uppercase;
@media(max-width:900px){
  font-size:1.1rem;
}
`

const SubImg = styled.img`
width:90%;
max-width:350px;
height:70%;
position:relative;
z-index:1;
top:-10px;
margin-bottom:10px;
background-color:rgba(255,255,255,0.8);
`
const SubText = styled.div`
width:100%;
height:5.6rem;
padding:5px 10px;
 display: -webkit-box;
 word-break: break-word;
 -webkit-line-clamp: 3;
-webkit-box-orient: vertical;
text-overflow:ellipsis;
margin-top:-10px;
overflow:hidden;
font-size:1.1rem;
line-height:1.6rem;
`

export default function Home()
{
  
  return (
    
    <MainBlock>
        <MainArticleBlock>
        <TitleBox>
             디아블로2 리마스터 최초 공개!! (똥겜 or 갓겜인가?)
         </TitleBox>
        <MainImg src={diablo}/>
        <MainText>
          시스템 사양은 디아블로 3보다 훨씬 더 높으며, CPU/RAM 사양은 WoW 어둠땅보다 높다. 권장사양기준으로 RAM이 16GB로 3D 그래픽 렌더링과 광원 효과로 인해 기본 메모리 사양이 높아진걸로 추측된다. 하지만 디아블로 2처럼 2D 그래픽으로 전환하는 것도 가능한걸로 보아 실제로 플레이를 해봐야 알 수 있을것으로 보인다. macOS의 시스템 사양은 아직 발표하지 않았다.
3. 상세[편집]
2021년 2월 20일 발표와 동시에 공식 사이트에서 2개의 상품을 예약판매 중이며 2021년 내 출시한다. 디아블로 2: 레저렉션에는 디아블로 2와 확장팩인 파괴의 군주의 스토리가 포함되어 있고[7], 디아블로 대악마 컬렉션은 디아블로 2: 레저럭션에 디아블로 3 이터널 컬렉션[8]에 디아블로 3의 수집품[9]이 추가된 패키지이다.
디아블로 2 레저럭션: 48,000원
디아블로 대악마 컬렉션: 72,000원[10]
            </MainText>
        </MainArticleBlock>
      <SubBoxes>
        <SubBox>
          <SubTitle>
            COVID 19, can we get back daily life oneday?
          </SubTitle>
          <SubImg src={covid}/>
          <SubText>
          This is a story about COVID 19. No matter whoever's fault, it doesn't matter. Since 2019, it just destroyed our daily life and I really hate it.  
          </SubText>
          <br/>
        </SubBox>
           <SubBox>
          <SubTitle>
            박찬욱 감동영화 기생충 칸에서는 호평 나에게는 혹평
          </SubTitle>
          <SubImg src={parasite}/>

          <SubText>
          내꺼하 자! 네 옆에 있을게! 어! 이 세상 끝까지 책임질게! 뚜루루루루 따라라 뚜루루루 따라! 뚜!
          </SubText>
        </SubBox>
        </SubBoxes>
    </MainBlock>
  );
}


// link 로 각각 해당 게시글로 연결 -> 각블록 전체에 걸기