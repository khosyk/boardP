import React, { useMemo, useState, useEffect } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, setLogin } from '../modules/login';
import { useCookies } from 'react-cookie';
import config from '../config.json';
import axios from 'axios';

import Header from '../components/Header';

import {
  AiOutlineSmile,
  AiFillFire,
  AiOutlineBulb,
  AiFillThunderbolt,
} from 'react-icons/ai';

//1. Header로 로그인 상태 확인하고, 로그인 되었음을 알려주는 태그 만들기,
//2. 로그아웃 기능 구현 (useCookies에 removeCookies('USID')) 호출
//3. 이슈 보드페이지에 로그인시에만 댓글 작성 가능 (토큰 정보 확인해서 구현)
//4. 홈에서 각 페이지 게시글 연동
//5. 된글 기능 구현 (like 숫자로 타이틀 불러오기)

// setLogin 후 user 값이 변하지 않음.
const HeaderContainer = () => {
  //redux
  const { user, userActive } = useSelector((state) => ({
    user: state.login.user,
    userActive: state.login.userActive,
  }));

  const dispatch = useDispatch();
  const setLogoutFunc = () => dispatch(logout());

  //Hooks
  const [visibleMenu, setVisibleMenu] = useState(false);

  const [cookies, setCookie, removeCookie] = useCookies(['USID']);

  const history = useHistory();

  const logoutFunction = () => {
    removeCookie('USID');
    history.push('/');
    setLogoutFunc();
  };

  const randomTrait =() => {
    var traits = [
      <span>
        <AiOutlineSmile
          style={{
            fontSize: '12px',
            color: 'yellow',
            lineHeight: '20px',
          }}
        />
        POSITIVE
      </span>,
      <span>
        <AiFillThunderbolt
          style={{
            fontSize: '12px',
            color: '#a9e34b',
            lineHeight: '20px',
          }}
        />
        ENERGETIC
      </span>,
      <span>
        <AiOutlineBulb
          style={{
            fontSize: '12px',
            color: 'yellow',
            lineHeight: '20px',
          }}
        />
        CREATIVE
      </span>,
      <span>
        <AiFillFire
          style={{
            fontSize: '12px',
            color: 'red',
            lineHeight: '20px',
          }}
        />
        PASSIONATE
      </span>,
    ];
    var n = Math.floor(Math.random() * 4);
    return traits[n];
  };

  const test = randomTrait();

  const moveToMain = (e) => {
    e.preventDefault();
    history.push('/');
  };

  const setLoginFunc = (user) => dispatch(setLogin(user));

  const getLoginInfo = async () => {
    try {
      const token = cookies.USID;
      if (!token) return;

      const url = `${config.host}/users/token-verify`;
      const data = JSON.stringify({
        token,
      });
      const headers = {
        'Content-Type': 'application/json',
      };
      const result = await axios.post(url, data, { headers });

      const ok = result.data.ok;
      if (!ok) {
        return;
      }
      const userData = result.data.userInfo;
      setLoginFunc(userData);
    } catch (error) {
      alert(`'에러 발생 관리자에게 문의하세요.'${error}`);
      return;
    }
  };

  useEffect(() => {
    getLoginInfo();
  }, []);

  return (
    <>
      <Header
        visibleMenu={visibleMenu}
        setVisibleMenu={setVisibleMenu}
        userActive={userActive}
        user={user}
        logoutFunction={logoutFunction}
        randomTrait={test}
        moveToMain={moveToMain}
      />
    </>
  );
};

export default withRouter(HeaderContainer);
