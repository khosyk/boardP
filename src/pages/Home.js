import styled from 'styled-components';
import Article from './Article/Article';

//images
import Profile from '../images/profile.jpg';
import Ability from '../images/ability.jpg';
import Career from '../images/career.jpg';
import List from '../images/list.jpg';
import LoginImage from '../images/login.jpg';
import SigninImage from '../images/signin.jpg';
import { useRef, useState } from 'react';


const MainBlock = styled('div')`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  background-color: #f1f3f5;
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
    justify-content: space-around;
    align-content: flex-start;
  }
`;

const SidePosition = styled.div`
  position: sticky;
  width: 25%;
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

const RanksBlock = styled.div`
  background-color: white;
  width: 100%;
  min-width: 280px;
  height: fit-content;
  padding-bottom:10px;
  margin-top: 2rem;
  margin-bottom: 3rem;
  @media (min-width: 769px) {
    display: none;
  }
`;

const RankBlock = styled.div`
  font-size: 0.9rem;
  line-height: 1.2rem;
  padding: 0.5rem;
`;

const RankMainTitle = styled.div`
border-bottom:1px solid grey;
margin:0px 7px;
padding: 0.5rem;
`;

const RankTitle = styled.div`
  font-weight:600;
  border-bottom: 1px solid grey;
  padding: 0.4rem 0px;
  word-break: break-word;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const RankText = styled.div`
padding-top:8px;
height:fit-content;
word-break: break-word;
text-overflow: ellipsis;
white-space: pre-wrap;
overflow: hidden;
`

const RankContent = styled.div`
  padding-left: 8px;
  word-break: break-word;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

function Home() {

  const resumeData = [{
    title: '자기소개',
    user: '이희운',
    img: '/static/media/profile.5fa9a47b.jpg',
    link: '/issue/1',
  }, {
    title: '역량',
    user: '이희운',
    img: '/static/media/ability.0d839a5a.jpg',
    link:'/issue/2',
  }, {
    title: '경력',
    user: '이희운',
    img: '/static/media/career.27e87147.jpg',
    link:'/issue/3',
    }, {
      title: '게시판 둘러보기',
      user: '이희운',
      img: '/static/media/list.eacc4e23.jpg',
      link:'/issue',
  },{
    title: '로그인 둘러보기',
    user: '이희운',
    img: '/static/media/login.76357c14.jpg',
    link:'/issue',
    },
    {
      title: '회원가입 둘러보기',
      user: '이희운',
      img: '/static/media/signin.01849878.jpg',
      link:'/issue',
    },
    {
      title: '이미지 없는 게시글 예시',
      user: '이희운',
      img: '',
      link:'/',
    },{
      title: '이미지 없는 게시글 예시',
      user: '이희운',
      img: '',
      link:'/',
    },{
      title: '이미지 없는 게시글 예시',
      user: '이희운',
      img: '',
      link:'/',
    },
  ]
  
  

  return (
    <MainBlock>
      <MainPosition>
      <RanksBlock>
          <RankMainTitle >
          셀프 QnA
          </RankMainTitle>
          <RankBlock>
            <RankTitle>
              Q. 어떤 개발자가 되고 싶은지?
            </RankTitle>
            <RankText>
              A. ‘소통’ 하는 개발자가 되고 싶습니다. <br />
             단순히 개발자가 아닌, 한사람으로써 소통은 사회에서 가장 중요한 덕목 중 하나라고 생각합니다. 지금까지 많은 기술 발전이 이뤄졌지만 앞으로도 대체 못할 단 한가지는 사람들간의 소통이라고 생각합니다. 메신저 전화 영상통화 등 다양한 방법으로 전달의 방법은 진보되고 달라졌지만 본질인 사람과 사람 사이의 소통은 반대로 퇴화하고 있다고 생각합니다. 의미의 전달, 감정의 오고 감은 텍스트와 전화로 퇴색되었으며 빛을 잃었습니다. 하지만 그런 상황 속에서 프론트엔드 엔지니어의 소통의 능력은 더욱 부각되고 중요해질 거라고 생각합니다. 사용자와 웹 앱이 소통하는 다리 역할을 하는 포지션이라고 생각하기 때문입니다. 사용자에게 UI와 UX를 통해 서비스의 표정 감정 느낌을 나타내는 프론트엔드 엔지니어는 항상 사용자의 의견과 견해를 중요시 해야하고 피드백에 민감해야 한다고 생각합니다. 이는 현실에서도 이어진다고 봅니다. 사용자와 또는 같은 개발자와의 의사소통과 표현에서 거부감을 느끼고 꺼려하는 개발자들이 많습니다. 하지만 반대로 저는 ‘소통’ 하는 능력을 강점으로 더 나은 서비스 더 나은 환경을 조성 할 수 있는 그런 개발자가 되고 싶습니다.
            </RankText>
          </RankBlock>
        </RanksBlock>
        {resumeData.map((resumeData, index) => <Article key={index} resumeData={resumeData} />)}
      </MainPosition>
      <SidePosition>
        <RankMainTitle >
        셀프 QnA
        </RankMainTitle>
        <RankBlock>
          <RankTitle>Q. 비전공자에서 개발자가 된 계기?</RankTitle>
          <RankContent>A. 미래의 지배계급 라인을 타고 싶어서 </RankContent>
          <RankTitle>Q. 어떤 개발자가 되고 싶은지?</RankTitle>
          <RankContent>A. ‘소통’ 하는 개발자가 되고 싶습니다. </RankContent>
          <RankTitle>Q. 장점 3가지?</RankTitle>
          <RankContent>A. 커뮤니케이션, 적응력, 실행력 </RankContent>
          <RankTitle>Q. 기억에 남는 활동은?</RankTitle>
          <RankContent>A. 500인분 코스요리 접시 닦기, 폭설 속에 뉴질랜드 산 등산  </RankContent>
          <RankTitle>Q. 합격한다면 하고싶은 것?</RankTitle>
          <RankContent>A. 개발 학원 돈 주고 다니기, 다양한 프로젝트 </RankContent>
          <RankTitle>Q. 버킷리스트 2가지?</RankTitle>
          <RankContent>A. 바닷가 살기, 뉴질랜드 캠핑여행 </RankContent>
        </RankBlock>
      </SidePosition>
    </MainBlock>
  );
}

export default Home;
