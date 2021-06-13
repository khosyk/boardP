import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiEdit2 } from 'react-icons/fi';
import List from '../pages/PageComponents/List';
import BannerImg from '../images/banner.png';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setList, setPage,setType } from '../modules/pages';
import axios from 'axios';
import Page from '../pages/PageComponents/Page';
import config from '../config.json';

const MainBlock = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  background-color: rgba(255, 255, 255, 0.9);
	box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.05);
  border-radius: 2px;
  box-sizing: border-box;
  margin-top: -0.5px;
  margin-bottom: 10vh;
  max-width: 1060px;
  padding-bottom:10px;
  min-height:750px;
`;

const BannerBlock = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  max-width: 1060px;
  margin-bottom: 5px;
  overflow: hidden;
  justify-content: center;
`;

const Banner = styled.img`
  margin-left: auto;
  margin-right: auto;
`;

const MainTable = styled.table`
  width: 100%;
`;

//table head

const Thead = styled.thead`
  width: 100%;
  height: 25px;
  font-size: 1rem;
  font-weight: 500;
  border-bottom: 1px solid rgba(1, 1, 1, 0.5);
`;
const TheadContent = styled.tr`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px 20px;
  padding-bottom: 5px;
`;

//table body

const Tbody = styled.tbody`
  border-bottom: 1px solid rgba(1, 1, 1, 0.5);
`;

///table footer

const TFooter = styled.tfoot`
  margin-top: 5px;
`;

const TTools = styled.tr`
  display: flex;
  justify-content: space-between;
  margin: 0px 5px;
  margin-top: 10px;
  @media (max-width: 450px) {
    margin: 0px;
  }
`;

const TSearch = styled.td`
  display: flex;
  align-content: center;
  justify-content: flex-start;
`;

const SearchText = styled.input`
  border: none;
  border-bottom: 1px solid black;
  font-size: 0.7rem;
  line-height: 1rem;
  width: 100px;
  margin-left: 5px;
  @media (max-width: 450px) {
    width: 60px;
  }
`;

const SearchBtn = styled.button`
  display: inline-block;
  padding: 1px 5px;
  font-weight: 300;
  border-radius: 2px;
  border: 1px solid #ced4da;
  background-color: #f1f3f5;
  color: #343a40;
  font-size: 0.8rem;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 1px 1px black;
  }
  &:active {
    transform: translate(0px, 3%);
    box-shadow: 0px 0px 1px black;
  }
`;

const Guides = styled.td`
  display: flex;
  flex-direction: row;
  margin-top: 3px;
  margin-left: -2%;
`;

const First = styled.a`
  padding-top: 2px;
  font-size: 0.8rem;
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    font-weight: 600;
  }
  &:active {
    color: red;
  }
`;

const Pages = styled.span`
  display: flex;
  height: 1rem;
  font-size: 0.8rem;
  margin-right: 10px;
  width: 68px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const PostBlock = styled.td`
  margin-top: -1px;
`;

const Post = styled(Link)`
  display: block;
  margin-top: 1px;
  padding: 3px 3px;
  border-radius: 2px;
  font-weight: 300;
  font-size: 0.8rem;
  border: 1px solid #ced4da;
  background-color: #f1f3f5;
  color: #343a40;
  &:hover {
    box-shadow: 0px 1px 1px black;
  }
  &:active {
    transform: translate(0px, 3%);
    box-shadow: 0px 0px 1px black;
  }
`;

// issue 포스팅 누르면 /issue/1 -> 가라 포스팅 (수정,삭제버튼 링크) -> 수정링크 issue/1/modify /삭제링크 issue/1/delete

class IssueContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
    };
  }

  //data 요청 -> data에서 필요한거 뽑아내기 (여기서는 for,if문을 사용해서 title,id)
  //얻은 데이터를 원하는 데이터형식으로 (여기선어레이) 저장 , const contents = [] 에 해당 데이터를 넣는다.
  //해당데이터를 넣는기능은 이전에 리듀서(handleActions)에서 정의한 setList 기능을 mapDispatchToProps를 통해 얻어서 사용;
  // 얻은 데이터를 this.props.setList(contents); 로 저장
  // 기종 initialstate가 내가 원하는 데이터를 저장한 initialstate로 됨.

  // 1. async 기본페이지 -> 페이지 데이터  2. 클릭 async 데이터 변경 -> 페이지에 반영

  getFirstData = async () => {
    try {
      const result = await axios.get(`${config.host}/posts?page=1&type=issue`);

      const {
        data: { contents: contentsData, page },
      } = result;
      const contents = [];

      for (let i = 0; i < contentsData.length; i++) {
        if (contentsData[i]) {
          const { title, id } = contentsData[i];
          contents.push({ title, id });
        }
      }
      this.props.setList(contents);
      this.props.setPage(page);
    } catch (error) {
      alert(`error :(( ${error}`);
    }
  };


  getCurrentPage = async (e) => {
    var currentPage = parseInt(e.target.innerText, 10);

    try {
      const result = await axios.get(
        `${config.host}/posts?page=${currentPage}`
      );
      const {
        data: { contents: contentsData, page },
      } = result;

      const contents = [];

      for (let i = 0; i < contentsData.length; i++) {
        if (contentsData[i]) {
          const { title, id } = contentsData[i];
          contents.push({ title, id });
        }
      }

      if (contents[0] === undefined) {
        alert('게시글이 없습니다.');
        return false;
      } else {
        this.props.setList(contents);
        this.props.setPage(page);
      }
    } catch (error) {
      alert(`error :(( ${error}`);
    }
  };

  async componentDidMount() {
    this.getFirstData();
    this.props.setType('issue')
  }

  getValue = (e) => {
    var { value } = e.target;
    this.setState({ ...this.state, userInput: value });
  };

  getSearch = async () => {
    try {
      const result = await axios.get(`${config.host}/posts?type=issue`);

      const {
        data: { contents: contentsData },
      } = result;

      const contents = [];
      const filteredContents = contentsData.filter((contentsData) => {
        return contentsData.title.includes(this.state.userInput);
      });

      for (let i = 0; i < filteredContents.length; i++) {
        if (filteredContents[i]) {
          const { title, id } = filteredContents[i];
          contents.push({ title, id });
        }
      }

      this.props.setList(contents);
    } catch (error) {
      alert(`error:< : ${error}`);
    }
  };

  render() {
    const userActive = this.props.userActive;
    //declare contents data
    const data = this.props.contents.sort(function test(a, b) {
        return a - b;
    });
    
    //pageRance setting function
    function pageRange(size, startAt) {
      return [...Array(size).keys()].map((i) => i + startAt);
    } 
    
    var pageNumbers = pageRange(
      this.props.page.totalPage,
      this.props.page.currentPage
    );
    
    return (
        <MainBlock>
            <BannerBlock>
                <Banner alt="bannerImage" src={BannerImg} />
            </BannerBlock>
            <MainTable>
                <Thead>
                    <TheadContent>
                        <td>번호</td>
                        <td>제목</td>
                        <td>날짜</td>
                    </TheadContent>
                </Thead>
                <Tbody id="test">
                    {data ? (
                        data.map((row) => (
                            <List
                                key={row.id}
                                id={row.id}
                                title={row.title}
                                review={row.review}
                                type={this.props.type}
                            />
                        ))
                    ) : (
                        <tr>
                            <td>"Data has not found"</td>
                        </tr>
                    )}
                </Tbody>
                <TFooter>
                    <TTools>
                        <TSearch>
                            <SearchBtn onClick={this.getSearch}>검색</SearchBtn>
                            <SearchText
                                onInput={this.getValue}
                                placeholder="검색어를 입력해주세요."
                            />
                        </TSearch>
                        <Guides>
                            <First onClick={this.getFirstData}>■ 처음</First>
                            <Pages>
                                {pageNumbers.map((data) => (
                                    <Page
                                        key={data}
                                        getCurrentPage={this.getCurrentPage}
                                        data={data}
                                    />
                                ))}
                            </Pages>
                        </Guides>
                        {userActive ? (
                            <PostBlock>
                                <Post to="/board" >
                                    <FiEdit2
                                        style={{
                                            fontSize: "0.7rem",
                                            marginRight: "3px",
                                        }}
                                    />
                                    글쓰기
                                </Post>
                            </PostBlock>
                        ) : (
                            <td></td>
                        )}
                    </TTools>
                </TFooter>
            </MainTable>
        </MainBlock>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.pages.page,
  contents: state.pages.contents,
  userActive: state.login.userActive,
  type: state.pages.type
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setList,
      setPage,
      setType,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(IssueContainer);
