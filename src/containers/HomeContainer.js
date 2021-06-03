import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setList, setPage } from '../modules/pages';
import Home from '../pages/Home';
import config from '../config.json';

// 제작-> 경쟁과 협력, 커뮤니티 3대종파 이슈 게임 무비,
// 올림픽처럼 1, 2, 3 등을 정해서 그들끼리 경쟁하고 협력할 수 있게끔 만듬

// 화면이 1200px 이상 => 일정크기까지 늘어나다가, 화면위치에 컨텐츠 고정
// 컨텐츠 사이즈 유지, 박스사이즈로 조절,

// 화면이 960px 이하 => 일정크기까지 줄어들다가, 화면 안으로 (기준은 768px)

function HomeContainer() {
  
  
  const [mainData,setMainData] = useState();

  const getFirstData = async () => {
    try {
      const result = await axios.get(`${config.host}/posts?page=1`);

      const {
        data: { contents: contentsData,ok },
      } = result;
      
      if (!ok) {
        console.log('failed to load data');
        return;
      }

      const contents = [];

      for (let i = 0; i < contentsData.length; i++) {
        if (contentsData[i]) {
          const { title, id, userId, imagePath } = contentsData[i];
          contents.push({ title, id , userId, imagePath });
        }
      }
      setMainData(contents);
    } catch (error) {
      alert(`error :(( ${error}`);
    }
  };

  useEffect(() => {
    getFirstData();
    return;
  },[])

  return <Home mainData={mainData} />;
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
