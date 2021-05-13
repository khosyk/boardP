import React, { useState, uesRef, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router";
import config from "../config.json";
const BrdBox = styled.div`
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

const BrdImageUploadInput = styled.input`
	display: block;
	height: 1.5rem;
	font-size: 0.9rem;
	padding: 3px 2px;
	width: 85px;
	text-align: center;
	cursor: pointer;
	border-radius: 2px;
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
	background-color: #f1f3f5;
	text-align: center;
	cursor: pointer;
	border-radius: 2px;
	border: 1px solid #ced4da;
	color: #343a40;
	&:hover {
		box-shadow: 0px 1px 1px black;
	}
	&:active {
		transform: translate(0px, 3%);
		box-shadow: 0px 0px 1px black;
	}
`;

export default function BoardContainer() {
	const [input, setInput] = useState({
		title: "",
		content: "",
		img: "",
	});

	const { content, title, img } = input;

	const history = useHistory();

	const getValue = async (e) => {
		const { name, value } = e.target;
		setInput({
			...input,
			[name]: value,
		});
	};

	const callSave = async (e) => {
		e.preventDefault();

		try {
			const url = `${config.host}/posts`;

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

	//admin 일떄만 수정 가능하게
	// image src 로 해당 이미지 사용하기,
	const textAreaRef = useRef(null);

	const uploadImage = async (e) => {
		try {
			const file = e.target.files[0];
			const uri = "http://localhost:4000/images";

			const formData = new FormData();
			formData.append("image", file);

			/*
      위 두줄은
      <form>
				<input type="file" name="image" />
			</form>;
      */

			const config = {
				headers: {
					"content-type": "multipart/form-data", //파일 데이터를 보내겠다.
				},
			};

			const result = await axios.post(uri, formData, config);
			//img 글상자 안에 넣기 시도중. 현재 태그를 넣어서 등록은 되는데 스타일이 적용안되고,
			//글상자에 스트링이 아닌 이미지 태그로 들어가기를 원함
			var imgPath = result.data.path;
			var imgStyle = '{width:"150px", height:"150px"}';
			var imgArray = [
				`<img style={${imgStyle}} src=${imgPath} alt=${imgPath}/>`,
			];
			const test = imgArray.map((data) => data);
			setInput({
				...input,
				content: test,
			});
		} catch (err) {
			console.log("err", err);
		}
		e.preventDefault();
	};

	return (
		<BrdBox>
			<BrdTitle
				name="title"
				type="text"
				onChange={getValue}
				placeholder="글 제목을 입력해주세요."
				value={input.title}
			/>
			<BrdToolbar>
				<input type="file" name="image" id="imageData" onChange={uploadImage} />
			</BrdToolbar>
			<BrdTextarea
				name="content"
				onChange={getValue}
				value={input.content}
				placeholder="내용을입력해주세요."
				ref={textAreaRef}></BrdTextarea>
			<BrdBtnBlock>
				<BrdBtn onClick={callSave}>저장</BrdBtn>
			</BrdBtnBlock>
		</BrdBox>
	);
}
