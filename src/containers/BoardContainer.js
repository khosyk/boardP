import React, { useState, uesRef } from "react";
import styled from "styled-components";
import ReactHtmlParser from "react-html-parser";
import axios from "axios";
import { useHistory } from "react-router";
import { BsCardImage } from "react-icons/bs";

const BrdBox = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const BrdTitle = styled.input`
	margin-top: 30px;
	width: 70%;
	height: 30px;
	font-size: 1rem;
	border: none;
	border-radius: 2px;
	text-indent: 2px;
	font-family: "NanumBarunpenR";
	border: 1px solid #757e86;
`;

const BrdToolbar = styled.div`
	display: flex;
	width: 70%;
	margin: 8px 0px;
`;

const BrdImageUpload = styled.label`
	display: block;
	height: 1.5rem;
	font-size: 0.9rem;
	padding: 3px 2px;
	width: 85px;
	text-align: center;
	cursor: pointer;
	border-radius: 2px;
	border-bottom: 0.5px solid rgba(0, 0, 0, 0.3);
	box-shadow: 0px 1px 3px 0.3px rgba(0, 0, 0, 0.1);
	&:active {
		border: 2px solid black;
		box-shadow: none;
	}
`;

const BrdImageUploadInput = styled.input`
	display: none;
	visibility: none;
`;

const BrdTextarea = styled.textarea`
	width: 70%;
	resize: vertical;
	min-height: 500px;
`;

const BrdBtnBlock = styled.div`
	display: flex;
	margin-top: 10px;
	width: 70%;
	justify-content: flex-end;
`;

const BrdBtn = styled.button`
	font-family: "NanumBarunpenR";
	height: 1.5rem;
	width: 50px;
	font-size: 0.9rem;
	padding: 3px 2px;
	background-color: transparent;
	text-align: center;
	cursor: pointer;
	border-radius: 2px;
	border: none;
	border-bottom: 0.5px solid rgba(0, 0, 0, 0.3);
	box-shadow: 0px 1px 3px 0.3px rgba(0, 0, 0, 0.1);
	&:active {
		border: 2px solid black;
		box-shadow: none;
	}
`;

export default function BoardContainer() {
	const [input, setInput] = useState({
		title: "",
		content: "",
		img: "",
	});

	const { content, title, img } = input;

	const [viewContent, setViewContent] = useState([]);

	const history = useHistory();

	const getValue = (e) => {
		const { name, value } = e.target;
		setInput({
			...input,
			[name]: value,
		});
	};

	var nextId = 0;

	const callSave = async (e) => {
		e.preventDefault();

		try {
			const url = "http://119.196.223.231:4000/posts";

			console.log({
				title,
				content,
				userId: "test",
			});

			const data = JSON.stringify({
				title,
				content,
				userId: "test",
			});
			const options = {
				headers: { "Content-Type": "application/json" },
			};

			const result = await axios.post(url, data, options); // 담아라 = 선언해라

			const {
				data: { err, ok },
			} = result;

			console.log(result);

			if (!ok) {
				alert(`error : ${err}`);
				return false;
			}

			history.push({
				pathname: `/issue/${result.data.id}`,
			});

			// HTTP 상태코드 200,201 성공 그외는 실패
		} catch (error) {
			alert(`error:${error}`);
			return false;
		}
		// setInput({ id: id + 1 }); //id값은 서버에서 생성한다. (재시작 리로드에서 변경될 수 있다.)
	};

	return (
		<BrdBox>
			<BrdTitle
				name="title"
				type="text"
				onChange={getValue}
				placeholder="글 제목을 입력해주세요."
				value={viewContent.title}
			/>
			<BrdToolbar>
				<BrdImageUpload htmlFor="input-file">이미지 업로드</BrdImageUpload>
				<BrdImageUploadInput
					name="img"
					id="input-file"
					type="file"
					onChange={getValue}
				/>
			</BrdToolbar>
			<BrdTextarea
				name="content"
				onChange={getValue}
				value={viewContent.content}
				placeholder="내용을입력해주세요."></BrdTextarea>
			<BrdBtnBlock>
				<BrdBtn onClick={callSave}>저장</BrdBtn>
			</BrdBtnBlock>
		</BrdBox>
	);
}
