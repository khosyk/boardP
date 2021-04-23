import axios from "axios";
import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import { setEdit } from "../modules/edit";

const BrdBox = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const BrdTitle = styled.input`
	margin-top: 3%;
	width: 80%;
	height: 30px;
	font-size: 1rem;
	border-radius: 2px;
	text-indent: 2px;
	font-family: "NanumBarunpenR";
	border: 1px solid #757e86;
`;

const TextareaBlock = styled.div`
	margin-top: 10px;
	font-size: 1rem;
	width: 80%;
	border: none;
	border-radius: 2px;
	text-indent: 2px;
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

function EditContainer(props, { content }) {
	const {
		props: {
			match: {
				params: { id },
			},
		},
	} = props;

	const [input, setInput] = useState({
		inputTitle: "",
		inputBody: "",
	});

	const { inputTitle, inputBody } = input;

	const getData = async (a) => {
		const url = `http://119.196.223.231:4000/posts/${id}`;
		var result = await axios.get(url);
		var isData = result.data[0];
		setEdit(isData);
	};

	getData();

	/// content 받아서 input에 입력하는거 해야함.

	const getValue = (e) => {
		const { name, value } = e.target;
		setInput({
			...input,
			[name]: value,
		});
	};

	const history = useHistory();

	const onEdit = async () => {
		try {
			const url = `http://119.196.223.231:4000/posts/26`;
			const data = {
				body: JSON.stringify({
					title: inputTitle,
					content: inputBody,
				}),
			};

			const headers = { "Content-Type": "application/json" };
			const updateResult = await axios.put(url, data, { headers });
			history.push(`http://119.196.223.231:4000/posts`);
			console.log(updateResult);
		} catch (error) {
			console.log(`Error:${error}`);
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

const mapStateToProps = (state) => ({
	content: state.edit.content,
});

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			setEdit,
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(EditContainer);
