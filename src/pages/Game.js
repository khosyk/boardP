import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FiEdit2 } from "react-icons/fi";

<<<<<<< HEAD
const MainBlock = styled.div``;
=======
const MainBlock = styled.div`

`
>>>>>>> 53475f028ad5630d0f6b2e5ddd39850668de16fb

const MainTable = styled.table`
	width: 75%;
	padding: 0.5%;
<<<<<<< HEAD
	margin: 20px 12.5%;
	background-color: rgba(255, 255, 255, 0.9);
	height: 49rem;
	box-sizing: border-box;
	min-width: 500px;
=======
	margin:20px 12.5%;
	background-color: rgba(255, 255, 255, 0.9);
	height: 49rem;
	box-sizing: border-box;
	min-width:500px;
>>>>>>> 53475f028ad5630d0f6b2e5ddd39850668de16fb
`;

//table head

const Thead = styled.thead`
	width: 100%;
	height: 25px;
	font-size: 1rem;
	font-weight: 500;
	border-bottom: 1px solid rgba(1, 1, 1, 0.5);
<<<<<<< HEAD
=======

>>>>>>> 53475f028ad5630d0f6b2e5ddd39850668de16fb
`;
const TheadContent = styled.tr`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0px 30px;
<<<<<<< HEAD
	padding-bottom: 5px;
`;

//table body

const Tbody = styled.tbody`
	height: 90%;
	border-bottom: 1px solid rgba(1, 1, 1, 0.5);
`;

const Tlist = styled.tr`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0px 5px;
	padding: 5px 25px;
	line-height: 1.1rem;
	border-bottom: 1px solid rgba(1, 1, 1, 0.3);
`;

const TNumber = styled.td`
	font-size: 0.8rem;
	color: #343a40;
	margin-left: 9px;
=======
	padding-bottom:5px;
`;


//table body

const Tbody = styled.tbody`
	height: 90%;
	border-bottom: 1px solid rgba(1, 1, 1, 0.5);
`;

const Tlist = styled.tr`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0px 5px;
	padding: 5px 25px;
	line-height: 1.1rem;
	border-bottom: 1px solid rgba(1, 1, 1, 0.3);
`;

const TNumber = styled.td`
	font-size: 0.8rem;
	color: #343a40;
	margin-left: 9px;
`;

const TTitle = styled.td`
	margin-left: 10px;
	width: 85%;
`;

const TContent = styled(Link)`
	font-size: 0.9rem;
	color: #212529;
	&:hover {
		color: rgba(0, 0, 0, 0.5);
	}
`;

const Reply = styled(Link)`
	margin-left: 5px;
	font-size: 0.7rem;
	font-weight: 600;
	color: #141618;
	&:hover {
		color: rgba(0, 0, 0, 0.5);
	}
`;

const TDate = styled.td`
	font-size: 0.7rem;
	color: #343a40;
	margin-right: -10px;
`;

///table footer

const TFooter = styled.tfoot`
	margin-top: 5px;
`;

const TTools = styled.tr`
	display: flex;
	justify-content: space-between;
	margin:0px 25px;
	margin-top:10px;

`;



const TSearch = styled.td`
display:flex;
align-content:center;

`;

const SearchText = styled.input`
	border: none;
	border-bottom: 1px solid black;
	font-size: 0.7rem;
	line-height:1rem;
	width:120px;
	margin-left: 5px;
`;

const SearchBtn = styled.button`
	display: inline-block;
	border: 1px solid #ced4da;
	border-radius: 2px;
	font-weight: 300;
	font-size: 0.8rem;
>>>>>>> 53475f028ad5630d0f6b2e5ddd39850668de16fb
`;

const TTitle = styled.td`
	margin-left: 10px;
	width: 85%;
`;

const TContent = styled(Link)`
	font-size: 0.9rem;
	color: #212529;
	&:hover {
		color: rgba(0, 0, 0, 0.5);
	}
`;

const Reply = styled(Link)`
	margin-left: 5px;
	font-size: 0.7rem;
	font-weight: 600;
	color: #141618;
	&:hover {
		color: rgba(0, 0, 0, 0.5);
	}
`;

const TDate = styled.td`
	font-size: 0.7rem;
	color: #343a40;
	margin-right: -10px;
`;

///table footer

const TFooter = styled.tfoot`
	margin-top: 5px;
`;

const TTools = styled.tr`
	display: flex;
	justify-content: space-between;
	margin: 0px 25px;
	margin-top: 10px;
`;

const TSearch = styled.td`
	display: flex;
	align-content: center;
`;

const SearchText = styled.input`
	border: none;
	border-bottom: 1px solid black;
	font-size: 0.7rem;
	line-height: 1rem;
	width: 120px;
	margin-left: 5px;
`;

const SearchBtn = styled.button`
	display: inline-block;
	border: 1px solid #ced4da;
	border-radius: 2px;
	font-weight: 300;
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

const PostBlock = styled.td``;

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

const Guides = styled.td`
margin-left:-12%;
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

`;

const Post = styled(Link)`
	display: block;
	padding: 2px 5px;
	border-radius: 2px;
	font-weight: 300;
	border: 1px solid #ced4da;
	background-color: #f1f3f5;
	color: #343a40;
	font-size:0.8rem;
`;

export default function Game() {
	return (
		<MainBlock>
<<<<<<< HEAD
			<MainTable>
				<Thead>
					<TheadContent>
						<td>번호</td>
						<td>제목</td>
						<td>날짜</td>
					</TheadContent>
				</Thead>
				<Tbody>
					<Tlist>
						<TNumber>1</TNumber>
						<TTitle>
							<TContent>
								디아블로2 리마스터 최초 공개!! (똥겜 or 갓겜인가?)
							</TContent>
							<Reply to="/">12</Reply>
						</TTitle>
						<TDate>{new Date().toLocaleDateString()}</TDate>
					</Tlist>
				</Tbody>
				<TFooter>
					<TTools>
						<TSearch>
							<SearchBtn>검색</SearchBtn>{" "}
							<SearchText placeholder="검색어를 입력해주세요." />
						</TSearch>
						<Guides>
							<Prev>◀ 이전</Prev>
							<Pages>1 2 3 4 5 ...</Pages>
							<Next>다음 ▶</Next>
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
=======
		<MainTable>
			<Thead>
				<TheadContent>
					<td>번호</td>
					<td>제목</td>
					<td>날짜</td>
				</TheadContent>
			</Thead>
			<Tbody>
				<Tlist>
					<TNumber>1</TNumber>
					<TTitle>
						<TContent>디아블로2 리마스터 최초 공개!! (똥겜 or 갓겜인가?)</TContent>
						<Reply to="/">12</Reply>
					</TTitle>
						<TDate>{new Date().toLocaleDateString()}</TDate>
				</Tlist>
			</Tbody>
			<TFooter>
				<TTools>
					<TSearch>
						<SearchBtn>검색</SearchBtn>{" "}
						<SearchText placeholder="검색어를 입력해주세요." />
					</TSearch>
					<Guides>
						<Prev>◀ 이전</Prev>
						<Pages>1 2 3 4 5 ...</Pages>
						<Next>다음 ▶</Next>
					</Guides>
					<PostBlock>
					<Post to='/board'>
						<FiEdit2 style={{ fontSize: "0.7rem", marginRight: "3px" }} />
						글쓰기
					</Post>
					</PostBlock>
				</TTools>
			</TFooter>
			</MainTable>
			</MainBlock>
>>>>>>> 53475f028ad5630d0f6b2e5ddd39850668de16fb
	);
}