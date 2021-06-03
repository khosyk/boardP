import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FiEdit2 } from "react-icons/fi";
import List from '../pages/PageComponents/List';
import BannerImg from "../images/gameBanner.png";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setList } from "../modules/pages";
import axios from "axios";

const MainBlock = styled.div`
	width: 90%;
	margin-left: auto;
	margin-right: auto;
	background-color: rgba(255, 255, 255, 0.9);
	box-sizing: border-box;
	margin-top: -0.5px;
	margin-bottom: 10vh;
	max-width: 1060px;
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
	border-bottom: 1px solid black;
`;

const MainTable = styled.table`
	width: 100%;
	height: 90%;
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
	margin: 0px 15px;
	padding-bottom: 5px;
`;

//table body

const Tbody = styled.tbody`
	height: 90%;
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
		margin-top: 10px;
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

const SearchBtn = styled(Link)`
	display: inline-block;
	padding: 2px 5px;
	border-radius: 2px;
	font-weight: 300;
	border: 1px solid #ced4da;
	background-color: #f1f3f5;
	color: #343a40;
	font-size: 0.8rem;
`;

const Guides = styled.td`
	margin-left: -12%;
`;

const Prev = styled(Link)`
	font-size: 0.8rem;
	margin-right: 10px;
`;

const Pages = styled(Link)`
	font-size: 0.8rem;
	margin-right: 10px;
`;

const Next = styled(Link)`
	font-size: 0.8rem;
	margin-right: 10px;
`;

const PostBlock = styled.td`
	margin-top: -1px;
`;

const Post = styled(Link)`
	display: block;
	padding: 2px 5px;
	border-radius: 2px;
	font-weight: 300;
	border: 1px solid #ced4da;
	background-color: #f1f3f5;
	color: #343a40;
	font-size: 0.8rem;
`;

// issue 포스팅 누르면 /issue/1 -> 가라 포스팅 (수정,삭제버튼 링크) -> 수정링크 issue/1/modify /삭제링크 issue/1/delete

class MovieContainer extends Component {
	//data 요청 -> data에서 필요한거 뽑아내기 (여기서는 for,if문을 사용해서 title,id)
	//얻은 데이터를 원하는 데이터형식으로 (여기선어레이) 저장 , const contents = [] 에 해당 데이터를 넣는다.
	//해당데이터를 넣는기능은 이전에 리듀서(handleActions)에서 정의한 setList 기능을 mapDispatchToProps를 통해 얻어서 사용;
	// 얻은 데이터를 this.props.setList(contents); 로 저장
	// 기종 initialstate가 내가 원하는 데이터를 저장한 initialstate로 됨.

	async componentDidMount() {
		const result = await axios.get(
			"https://jsonplaceholder.typicode.com/posts/"
		);

		const { data } = result;
		const contents = [];

		for (let i = 0; i < data.length; i++) {
			if (data[i]) {
				const { title, id } = data[i];
				contents.push({ title, id });
			}
		}
		this.props.setList(contents);
	}

	render() {
		const data = this.props.contents;

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
					<Tbody>
						{data ? (
							data.map((row) => (
								<List
									key={row.id}
									id={row.id}
									title={row.title}
									review={row.review}
								/>
							))
						) : (
							<tr>
								<td>"not found"</td>
							</tr>
						)}
					</Tbody>
					<TFooter>
						<TTools>
							<TSearch>
								<SearchBtn to="/serach">검색</SearchBtn>
								<SearchText placeholder="검색어를 입력해주세요." />
							</TSearch>
							<Guides>
								<Prev to="/issue">◀ 이전</Prev>
								<Pages to="/issue">1 2 3 4 5 ...</Pages>
								<Next to="/issue">다음 ▶</Next>
							</Guides>
							<PostBlock>
								<Post to="/board">
									<FiEdit2 style={{ fontSize: "0.7rem", marginRight: "3px" }} />
									글쓰기
								</Post>
							</PostBlock>
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
});

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			setList,
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);
