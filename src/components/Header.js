import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { BiMenu, BiXCircle } from "react-icons/bi";

// Header Top menus

const HeaderBlock = styled.header``;

// mobile Menus

const VisibleButton = styled.div`
    width: 25px;
    height: 25px;
    position: absolute;
    top: 8px;
    left: 19px;
    display: none;
    visibility: hidden;

    @media (max-width: 480px) {
        display: block;
        visibility: visible;
    }
`;

const VisibleMenus = styled.div`
    position: absolute;
    width: 100%;
    top: 0px;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: none;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 999;
    @media (max-width: 480px) {
        display: flex;
        visibility: visible;
    }
`;

const LoginCloseButton = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-end;
    top: -10px;
    right: 20px;
    width: 100%;
`;

const LoginBlock = styled.div`
    background-color: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(255, 255, 255, 1);
    border-radius: 3px;
    width: 60%;
    height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const LoginIdBox = styled.div`
    margin-top: 10px;
`;

const LoginIdSpan = styled.span`
    font-size: 11px;
    display: inline-block;
    width: 20px;
`;

const LoginIdInput = styled.input`
    border: none;
    margin-left: 5px;
    width: 100px;
    height: 1rem;
    font-size: 0.8rem;
    border-radius: 2px;
    &:focus {
        outline: none !important;
        border: 1px solid rgba(0, 0, 0, 0.5);
    }
`;

const LoginPWBox = styled.div`
    margin-top: 5px;
`;

const LoginPwSpan = styled.span`
    display: inline-block;
    font-size: 11px;
    width: 20px;
`;

const LoginPWInput = styled.input`
    border: none;
    margin-left: 5px;
    width: 100px;
    height: 1rem;
    font-size: 0.8rem;
    border-radius: 2px;
    &:focus {
        outline: none !important;
        border: 1px solid rgba(0, 0, 0, 0.5);
    }
`;

const LoginButtonBlock = styled.div`
    margin-top: 5px;
`;

const LoginButtonLogin = styled(Link)`
    border: 1px solid rgba(0, 0, 0, 0.5);
    padding: 0px 5px;
    border-radius: 2px;
    background-color: white;
    font-size: 10px;
`;

const LoginButtonSignin = styled(Link)`
    font-size: 10px;
    margin-left: 10px;
`;

const LoginBottomBlock = styled.div`
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 3px;
    margin-top: 5px;
    width: 70%;
    padding-bottom: 2px;
`;

const LoginBottomMenu = styled(Link)`
    font-size: 11px;
    margin-left: 10px;
    &:active:hover {
        color: red;
        background-color: rgba(255, 255, 255, 0.9);
    }
`;

// PC Version Menus

const HeaderTopBlock = styled.div`
    width: 100%;
    margin-top: 8px;
    display: flex;
    justify-content: center;
    padding: 2px 0px;
    @media (max-width: 480px) {
        display: none;
        visibility: hidden;
    }
`;

const HeaderTopList = styled.li`
    display: flex;
    justify-content: flex-end;
    width: 90%;
`;

const HeaderTopMenus = styled.ul`
    font-size: 11px;
    font-weight: 600;
    &:hover {
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
    }
`;

const HeaderTopUserBlock = styled.div`
    display: flex;
    width: fit-content;
`;

const HeaderTopUser = styled.span``;

const HeaderTopLogout = styled.a`
    margin-left: 50px;
    padding-right: 20px;
    cursor: pointer;
    &:hover {
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    }
    &:active {
        color: red;
    }
    @media (max-width: 768px) {
        padding-right: 0px;
    }
`;

const HeaderTopLogin = styled(Link)`
    margin-right: 50px;
    &:active {
        color: red;
    }
`;

const HeaderTopSignin = styled(Link)`
    padding-right: 20px;
    &:active {
        color: red;
    }
    @media (max-width: 768px) {
        padding-right: 0px;
    }
`;

/// Header main menus

const HeaderMenus = styled.div`
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    display: flex;
    padding: 25px 0px;
    justify-content: center;
    @media (max-width: 480px) {
        padding: 0px;
        padding-top: 2px;
        padding-bottom: 5px;
        margin: 5px 30px;
    }
    @media (min-width: 769px) {
        padding-bottom: 30px;
    }
`;

const LinktoMain = styled.span`
    margin-left: 5%;
    position: absolute;
    top: 5px;
    text-align: center;
    font-size: 18px;
    line-height: 25px;
    height: 25px;
    width: 130px;
    border-radius: 20px;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.9);
    color: white;

    @media (max-width: 768px) {
        top: 7px;
        font-size: 16px;
        height: 20px;
        width: 100px;
        line-height: 20px;
    }
    @media (max-width: 480px) {
        position: fixed;
        font-size: 15px;
        opacity: 0.7;
        margin-left: 2%;
        bottom: 20px;
        top: 92%;
        transition: width 0.1s ease-in;
        z-index: 1;
        background-color: transparent;
    }
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: rgba(0, 0, 0, 0.8);
    }
`;

const LinkList = styled.li`
    display: flex;
    justify-content: space-between;
    width: 450px;
    font-weight: 600;
    @media (max-width: 768px) {
        width: 350px;
    }
    @media (max-width: 480px) {
        width: 230px;
    }
    transition: all 0.2s ease-in-out;
`;

const Item = styled.ul`
    font-size: 16px;
    letter-spacing: -0.1px;
    color: ${(props) => (props.selected ? "#343a40" : "black")};
    border-bottom: ${(props) => (props.selected ? "#ff6b6b" : "transparent")}
        2px solid;
    @media (max-width: 480px) {
        font-size: 12px;
    }
`;

//1. Header로 로그인 상태 확인하고, 로그인 되었음을 알려주는 태그 만들기,
//2. 로그아웃 기능 구현 (useCookies에 removeCookies('USID')) 호출
//3. 이슈 보드페이지에 로그인시에만 댓글 작성 가능 (토큰 정보 확인해서 구현)
//4. 홈에서 각 페이지 게시글 연동
//5. 된글 기능 구현 (like 숫자로 타이틀 불러오기)

// setLogin 후 user 값이 변하지 않음.
const Header = ({
    location: { pathname },
    visibleMenu,
    setVisibleMenu,
    user,
    userActive,
    logoutFunction,
    randomTrait,
    moveToMain,
}) => {
    return (
        <HeaderBlock draggable="false">
            <LinktoMain onClick={moveToMain}>
                {randomTrait.props.children}
            </LinktoMain>
            <VisibleButton onClick={() => setVisibleMenu(!visibleMenu)}>
                <BiMenu
                    style={{ fontSize: "13px", color: " rgba(0, 0, 0, 0.7)" }}
                />
            </VisibleButton>
            {visibleMenu ? (
                <VisibleMenus>
                    <LoginCloseButton>
                        <BiXCircle
                            onClick={() => setVisibleMenu(!visibleMenu)}
                            style={{
                                fontSize: "13px",
                                color: "rgba(255,255,255,0.8)",
                            }}
                        />
                    </LoginCloseButton>
                    <LoginBlock>
                        <LoginIdBox>
                            <LoginIdSpan>ID :</LoginIdSpan> <LoginIdInput />
                        </LoginIdBox>
                        <LoginPWBox>
                            <LoginPwSpan>PW:</LoginPwSpan> <LoginPWInput />
                        </LoginPWBox>
                        <LoginButtonBlock>
                            <LoginButtonLogin to="/login">
                                로그인
                            </LoginButtonLogin>
                            <LoginButtonSignin to="/signIn">
                                회원가입
                            </LoginButtonSignin>
                        </LoginButtonBlock>
                    </LoginBlock>
                    <LoginBottomBlock>
                        <LoginBottomMenu to="/find">
                            아이디를 잊으셨나요?
                        </LoginBottomMenu>
                        <LoginBottomMenu to="/find">
                            패스워드를 잊으셨나요?
                        </LoginBottomMenu>
                    </LoginBottomBlock>
                </VisibleMenus>
            ) : (
                ""
            )}
            <HeaderTopBlock>
                <HeaderTopList>
                    <HeaderTopMenus>
                        {userActive ? (
                            <HeaderTopUserBlock>
                                <HeaderTopUser>{user.name} 님</HeaderTopUser>
                                <HeaderTopLogout
                                    onClick={() => logoutFunction()}
                                >
                                    로그아웃
                                </HeaderTopLogout>
                            </HeaderTopUserBlock>
                        ) : (
                            <HeaderTopLogin to="/login">로그인</HeaderTopLogin>
                        )}
                    </HeaderTopMenus>
                    <HeaderTopMenus>
                        {!userActive ? (
                            <HeaderTopUserBlock>
                                <HeaderTopSignin to="/signIn">
                                    회원가입
                                </HeaderTopSignin>
                            </HeaderTopUserBlock>
                        ) : null}
                    </HeaderTopMenus>
                </HeaderTopList>
            </HeaderTopBlock>

            <HeaderMenus>
                <LinkList>
                    <Item selected={pathname === "/"}>
                        <Link to="/">HOME</Link>
                    </Item>
                    <Item selected={pathname.startsWith("/issue")}>
                        <Link to="/issue">ISSUE</Link>
                    </Item>
                    <Item selected={pathname.startsWith("/game")}>
                        <Link to="/game">GAME</Link>
                    </Item>
                    <Item selected={pathname.startsWith("/movie")}>
                        <Link to="/movie">MOVIE</Link>
                    </Item>
                </LinkList>
            </HeaderMenus>
        </HeaderBlock>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.login.user,
    };
};

export default withRouter(connect(mapStateToProps)(Header));
