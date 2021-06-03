import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import config from "../config.json";

const BrdBox = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: fit-content;
	min-height: 750px;
`;

const BrdTitle = styled.input`
	margin-top: 20px;
	width: 70%;
	height: 30px;
	font-size: 1rem;
  	border-radius: 2px;
  	text-indent: 2px;
  	background-color: rgba(255,255,255,0.8);
  	border: 1px solid #757e86;
`;

const TextareaBlock = styled.div`
	margin-top: 10px;
	font-size: 1rem;
	width: 70%;
	border: none;
	border-radius: 2px;
`;

const TextAreaInput = styled.textarea`
	min-height: 600px;
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
	width: 235px;
	color: white;
	justify-content: center;
	background-color: rgba(0, 0, 0, 0.78);
	text-align: left;
	border-radius: 4px;
	line-height: 18px;
	font-size:14px;
	letter-spacing: -0.5px;
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
	border: 1px solid #757e86;
	border-radius: 2px;
	padding: 3px 12px;
	font-weight: 300;
	font-size: 13px;
	cursor: pointer;
`;

function EditContainer(props) {	
	const {
		props: {
			match: {
				params: { id },
			},
		},
	} = props;

	const history = useHistory();
	
	const [input, setInput] = useState({
		inputTitle: "",
		inputBody: "",
	});
	const { inputTitle, inputBody } = input;
	

	const getData = async () => {
		const url = `${config.host}/posts/${id}`;
		var result = await axios.get(url);
		var isData = result.data[0];

		return isData;
	};

	useEffect(() => {
		getData().then((isData) =>
			setInput({
				inputTitle: isData.title,
				inputBody: isData.body,
			})
		);
	}, []);

	// useEffect 를 사용해서 componentDidMount 처럼 사용, 무한루프 방지, .then에서 얻어온 isData로 인풋 업데이트
	// .then 사용 이유는 getData()가 프로미스 객체라서
	const getValue = (e) => {
		const { name, value } = e.target;
		setInput({
			...input,
			[name]: value,
		});
	};


	const onEdit = async (e) => {
		e.preventDefault();
		try {
			const url = `${config.host}/posts/${id}`;
			const data = JSON.stringify({
				title: inputTitle,
				body: inputBody,
			});
			const headers = { "Content-Type": "application/json" };
			const updateResult = await axios.put(url, data, { headers });
			const { ok } = updateResult.data;
			if (ok) {
				history.push(`/issue/${id}`);
			}
		} catch (err) {
			alert(`Error from onEdit:${err}`);
		}
	};

	return (
		<BrdBox>
			<BrdTitle
				name="inputTitle"
				type="text"
				onChange={getValue}
				placeholder="글 제목을 입력해주세요."
				value={inputTitle}
			/>

			<TextareaBlock>
				<TextAreaInput
					name="inputBody"
					onChange={getValue}
					placeholder="내용을 수정해주세요."
					value={inputBody}></TextAreaInput>

				<TextAreaToolTip>글 상자 사이즈를 변경 할 수 있어요.</TextAreaToolTip>
			</TextareaBlock>
			<BrdBtnBlock>
				<BrdBtn onClick={onEdit}>저장</BrdBtn>
			</BrdBtnBlock>
		</BrdBox>
	);
}

export default EditContainer;
