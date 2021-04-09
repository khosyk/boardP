import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

const BrdBox = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const BrdTitle = styled.input`
	margin-top: 3%;
	width: 70%;
	height: 30px;
	font-size: 1rem;
	border: none;
	border-radius: 2px;
	text-indent: 2px;
	font-family: "NanumBarunpenR";
	border: 1px solid #757e86;
`;

const TextareaBlock = styled.div`
	margin-top: 10px;
	font-size: 1rem;
	width: 70%;
	border: none;
	border-radius: 2px;
	text-indent: 2px;
`;

const TextArea = styled.textarea`
	min-height: 400px;
	width: 100%;
	resize: vertical;
	position: relative;
	&:hover {
		& + div {
			opacity: 0.9;
			display: flex;
		}
	}
`;

const TextAreaToolTip = styled.div`
	opacity: 0;
	display: none;
	position: absolute;
	width: 230px;
	color: white;
	justify-content: center;
	background-color: rgba(0, 0, 0, 0.78);
	text-align: left;
	border-radius: 4px;
	height: 1.4rem;
	line-height: 1.2rem;
	margin-top: 5px;
	transition: all 0.2s ease-in;
`;

const BrdBtnBlock = styled.div`
	display: flex;
	margin-top: 10px;
	width: 70%;
	justify-content: flex-end;
`;

const BrdBtn = styled.button`
	font-family: "NanumBarunpenR";
	border: 1px solid #757e86;
	border-radius: 2px;
	padding: 3px 15px;
	font-weight: 300;
	font-size: 0.8rem;
	cursor: pointer;
`;

export default function Edit() {
	const dataLoad = async () => {
		try {
			const url = "https://jsonplaceholder.typicode.com/posts/1";
			const result = await axios.get(url);
			console.log(result);
		} catch (error) {}
	};
	console.log(window);
	dataLoad();

	const [input, setInput] = useState({
		title: "",
		content: "",
	});

	const { title, content } = input;

	const [viewContent, setViewContent] = useState([]);

	const getValue = (e) => {
		const { name, value } = e.target;
		setInput({
			...input,
			[name]: value,
		});
	};

	const onEdit = async () => {
		try {
			const url = "https://jsonplaceholder.typicode.com/posts/1";
			const data = {
				body: JSON.stringify({
					id: this.id,
					title: "foo",
					body: "hey",
				}),
			};

			const updateResult = await axios.put(url, data);
			console.log(updateResult);
		} catch (error) {
			console.log(`Error:${error}`);
		}
	};

	return (
		<BrdBox>
			<BrdTitle
				name="title"
				type="text"
				onChange={getValue}
				placeholder="글 제목을 입력해주세요."
				value={title}
			/>
			<TextareaBlock>
				<TextArea />
				<TextAreaToolTip>글 상자 사이즈를 변경 할 수 있어요.</TextAreaToolTip>
			</TextareaBlock>
			<BrdBtnBlock>
				<BrdBtn onClick={onEdit}>저장</BrdBtn>
			</BrdBtnBlock>
		</BrdBox>
	);
}
