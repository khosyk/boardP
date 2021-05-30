import React, { useMemo, useState } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setList, setPage } from '../modules/pages';
import Home from '../pages/Home';

import Profile from '../images/profile.jpg';
import Ability from '../images/ability.jpg';
import Career from '../images/career.jpg';
import List from '../images/list.jpg';
import LoginImage from '../images/login.jpg';
import SigninImage from '../images/signin.jpg';
// 제작-> 경쟁과 협력, 커뮤니티 3대종파 이슈 게임 무비,
// 올림픽처럼 1, 2, 3 등을 정해서 그들끼리 경쟁하고 협력할 수 있게끔 만듬

// 화면이 1200px 이상 => 일정크기까지 늘어나다가, 화면위치에 컨텐츠 고정
// 컨텐츠 사이즈 유지, 박스사이즈로 조절,

// 화면이 960px 이하 => 일정크기까지 줄어들다가, 화면 안으로 (기준은 768px)

function HomeContainer() {
  try {
  } catch (error) {
    alert(`Home error: ${error}`);
  }

  const resumeData = [
    {
      title: '자기소개',
      user: '이희운',
      img: '/static/media/profile.1f9219a8.jpg',
      link: '/issue/1',
    },
    {
      title: '역량',
      user: '이희운',
      img: '/static/media/ability.0d839a5a.jpg',
      link: '/issue/2',
    },
    {
      title: '경력',
      user: '이희운',
      img: '/static/media/career.27e87147.jpg',
      link: '/issue/3',
    },
    {
      title: '게시판 둘러보기',
      user: '이희운',
      img: '/static/media/list.eacc4e23.jpg',
      link: '/issue',
    },
    {
      title: '로그인 둘러보기',
      user: '이희운',
      img: '/static/media/login.76357c14.jpg',
      link: '/login',
    },
    {
      title: '회원가입 둘러보기',
      user: '이희운',
      img: '/static/media/signin.01849878.jpg',
      link: '/signin',
    },
    {
      title: '비전공자가 개발자가 되고 싶은 이유?',
      user: '이희운',
      img: '',
      link: '/',
    },
    {
      title: '블로그 글 살펴보기',
      user: '이희운',
      img: '',
      link: '/',
    },
    {
      title: '깃허브 살펴보기',
      user: '이희운',
      img: '',
      link: '/',
    },
    
    {
      title: '깃허브 살펴보기',
      user: '이희운',
      img: '',
      link: '/',
    },
    {
      title: '깃허브 살펴보기',
      user: '이희운',
      img: '',
      link: '/',
    },
    {
      title: '깃허브 살펴보기',
      user: '이희운',
      img: '',
      link: '/',
    },
    {
      title: '깃허브 살펴보기',
      user: '이희운',
      img: '',
      link: '/',
    },
    {
      title: '깃허브 살펴보기',
      user: '이희운',
      img: '',
      link: '/',
    },
    {
      title: '깃허브 살펴보기',
      user: '이희운',
      img: '',
      link: '/',
    },
    {
      title: '깃허브 살펴보기',
      user: '이희운',
      img: '',
      link: '/',
    },
    {
      title: '깃허브 살펴보기',
      user: '이희운',
      img: '',
      link: '/',
    },
    {
      title: '깃허브 살펴보기',
      user: '이희운',
      img: '',
      link: '/',
    },
    {
      title: '깃허브 살펴보기',
      user: '이희운',
      img: '',
      link: '/',
    },
    {
      title: '깃허브 살펴보기',
      user: '이희운',
      img: '',
      link: '/',
    },
  ];

  


  return <Home resumeData={resumeData}  />;
}

const mapStateToProps = (state) => ({
  page: state.pages.page,
  contents: state.pages.contents,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setList,
      setPage,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
// link 로 각각 해당 게시글로 연결 -> 각블록 전체에 걸기
// P 1920// 1360 // 1200 //M 992 // 768
