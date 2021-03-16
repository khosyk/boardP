import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FiEdit2 } from "react-icons/fi";
import List from "./List";

const MainBlock = styled.div`
<<<<<<< HEAD
	width: 75%;
	margin: 0px 12.5%;
=======

`

const MainTable = styled.table`
	width: 75%;
	padding: 0.5%;
	margin:20px 12.5%;
>>>>>>> 53475f028ad5630d0f6b2e5ddd39850668de16fb
	background-color: rgba(255, 255, 255, 0.9);
	height: 48rem;
	box-sizing: border-box;
<<<<<<< HEAD
	min-width: 500px;
	margin-top: -0.5px;
`;

const Banner = styled.div`
	height: 100px;
	background-color: green;
`;

const MainTable = styled.table`
	width: 100%;
	height: 90%;
`;

=======
	min-width:500px;
`;

>>>>>>> 53475f028ad5630d0f6b2e5ddd39850668de16fb
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
	margin: 0px 30px;
<<<<<<< HEAD
	padding-bottom: 5px;
`;

=======
	padding-bottom:5px;
`;


>>>>>>> 53475f028ad5630d0f6b2e5ddd39850668de16fb
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
	margin: 0px 25px;
	margin-top: 10px;
`;

const TSearch = styled.td`
	display: flex;
	align-content: center;
	@media (max-width: 960px) {
	}
`;

const SearchText = styled.input`
	border: none;
	border-bottom: 1px solid black;
	font-size: 0.7rem;
<<<<<<< HEAD
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
=======
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
	@media (max-width: 960px) {
	}
>>>>>>> 53475f028ad5630d0f6b2e5ddd39850668de16fb
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

<<<<<<< HEAD
const PostBlock = styled.td``;
=======


const PostBlock = styled.td`

`;
>>>>>>> 53475f028ad5630d0f6b2e5ddd39850668de16fb

const Post = styled(Link)`
	display: block;
	padding: 2px 5px;
	border-radius: 2px;
	font-weight: 300;
	border: 1px solid #ced4da;
	background-color: #f1f3f5;
	color: #343a40;
<<<<<<< HEAD
	font-size: 0.8rem;
`;

// issue 포스팅 누르면 /issue/1 -> 가라 포스팅 (수정,삭제버튼 링크) -> 수정링크 issue/1/modify /삭제링크 issue/1/delete
=======
	font-size:0.8rem;
`;
>>>>>>> 53475f028ad5630d0f6b2e5ddd39850668de16fb

export default function Issue() {
	const [data, setData] = useState([
		{
			id: 1,
			title: "COVID 19, can we get back daily life oneday?",
			review: 15,
		},
		{
			id: 2,
			title: "조용히 대학입시를 덮친 저출산 여파",
			review: 1,
		},
		{
			id: 3,
			title: "의외로 일본에 많은 외국인 국적",
			review: 5,
		},
	]);

	const { id, title, review } = data;

	return (
		<MainBlock>
<<<<<<< HEAD
			<Banner>hello</Banner>
			<MainTable>
				<Thead>
					<TheadContent>
						<td>번호</td>
						<td>제목</td>
						<td>날짜</td>
					</TheadContent>
				</Thead>
				<Tbody>
					{data.map((row) => (
						<List
							key={row.id}
							id={row.id}
							title={row.title}
							review={row.review}
						/>
					))}
				</Tbody>
				<TFooter>
					<TTools>
						<TSearch>
							<SearchBtn>검색</SearchBtn>{" "}
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
						<TContent>COVID 19, can we get back daily life oneday?</TContent>
						<Reply to="/">15</Reply>
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
						<FiEdit2  style={{ fontSize: "0.7rem", marginRight: "3px" }} />
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
