import React, { useState } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setList, setPage } from '../modules/pages';
import Home from '../pages/Home';

// 제작-> 경쟁과 협력, 커뮤니티 3대종파 이슈 게임 무비,
// 올림픽처럼 1, 2, 3 등을 정해서 그들끼리 경쟁하고 협력할 수 있게끔 만듬

// 화면이 1200px 이상 => 일정크기까지 늘어나다가, 화면위치에 컨텐츠 고정
// 컨텐츠 사이즈 유지, 박스사이즈로 조절,

// 화면이 960px 이하 => 일정크기까지 줄어들다가, 화면 안으로 (기준은 768px)

function HomeContainer() {

  const [artilceData, setAlticleData] = useState({
    title: '',
    image: '',
    writer: '',
    date: '',
  });

  const sideData = {title:'어떤 개발자가 되고 싶은지?', content:'소통을 중요하게 생각하는 개발자가 되고싶습니다.'}
  return <Home />;
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
