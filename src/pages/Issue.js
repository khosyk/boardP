import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FiEdit2 } from "react-icons/fi";

const MainBlock = styled.table`
	width: 75%;
	padding: 0.5%;
	margin-left: 11.5%;
	margin-top: 20px;
	opacity: 0.9;
	background-color: rgba(255, 255, 255, 0.9);
	height: 49rem;
	box-sizing: border-box;
`;

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
`;

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

const TFooter = styled.div`
	margin-top: 5px;
`;

const TTools = styled.tr`
	display: flex;
	justify-content: space-between;
	padding: 5px 25px;
`;

const Guides = styled.td`
	@media (max-width: 900px) {
		margin-left: 3%;
	}
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

const Post = styled(Link)`
	display: block;
	padding: 2px 5px;
	border-radius: 2px;
	margin-top: -5.5px;
	font-weight: 300;
	border: 1px solid #ced4da;
	background-color: #f1f3f5;
	color: #343a40;
`;

const TSearch = styled.tr`
	@media (max-width: 900px) {
		position: absolute;
		left: 20%;
		width: 90%;
		bottom: 1%;
	}
`;

const SearchText = styled.input`
	border: none;
	border-bottom: 1px solid black;
	font-size: 0.9rem;
`;

const SearchBtn = styled.button`
	display: inline-block;
	border: 1px solid #ced4da;
	border-radius: 2px;
	font-weight: 300;
	font-size: 0.9rem;
`;

export default function Issue() {
	return (
		<MainBlock>
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
						<TContent>찌릿찌릿 지구촌</TContent>
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
					<Post>
						<FiEdit2 style={{ fontSize: "0.7rem", marginRight: "3px" }} />
						글쓰기
					</Post>
				</TTools>
			</TFooter>
		</MainBlock>
	);
}
