import React, { useState } from "react";
import styled from "styled-components";
import ReactHtmlParser from "react-html-parser";
import axios from "axios";
import { useHistory } from "react-router";

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

const BrdToolbar = styled.div`
	width: 70%;
	height: 30px;
`;

const BrdImageUpload = styled.label`
	border: 1px solid black;
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

const Preview = styled.div`
	width: 70%;
	min-height: 200px;
	border: 1px solid #757e86;
	margin-top: 30px;
	margin-bottom: 50px;
`;

const PreviewBlock = styled.div`
	width: 100%;
	min-height: 200px;
`;

const BtnBlock = styled.div`
	display: flex;
	justify-content: flex-end;
	position: relative;
	bottom: 0px;
	width: 100%;
`;

const Delete = styled.button`
	position: relative;
	font-family: "NanumBarunpenR";
	border: none;
	padding: 3px 15px;
	font-weight: 300;
	font-size: 0.8rem;
	cursor: pointer;
	z-index: 1;
`;

const Update = styled.button`
	position: relative;
	font-family: "NanumBarunpenR";
	border: none;
	padding: 3px 15px;
	font-weight: 300;
	font-size: 0.8rem;
	cursor: pointer;
	z-index: 1;
`;

export default function BoardContainer() {
	const [input, setInput] = useState({
		title: "",
		content: "",
		id: 0,
		active: true,
	});

	const { id, content, title } = input;

	const [viewContent, setViewContent] = useState([]);

	const history = useHistory();

	const getValue = (e) => {
		const { name, value } = e.target;
		console.log(name, value);
		setInput({
			...input,
			[name]: value,
		});
	};

	//Remove

	const onRemove = (id) => {
		if (window.confirm("정말 삭제합니까?")) {
			alert("삭제 되었습니다.");
			setViewContent(
				viewContent.filter((viewContent) => viewContent.id !== id)
			);
		} else {
			alert("취소합니다.");
		}
	};

	///update functions

	const callUpdate = (id) => {
		setViewContent(
			viewContent.map(
				(viewContent) =>
					viewContent.id === id
						? { ...viewContent, active: !viewContent.active }
						: viewContent
				//content: clinput value; input display:true none false yes
			)
		);
	};

	const callSave = async (e) => {
		e.preventDefault();
		setViewContent(viewContent.concat({ ...input }));

		console.log("Check Vale", id, content, title);

		try {
			const url = "https://jsonplaceholder.typicode.com/posts";

			const data = JSON.stringify({
				title,
				body: content,
				userId: "",
			});

			const result = await axios.post(url, data); // 담아라 = 선언해라

			console.log(result);

			history.push({
				pathname: `/issue/${result.data.id}`,
			});

			// HTTP 상태코드 200,201 성공 그외는 실패
		} catch (error) {
			console.log(error);

			alert("서버 접속에 문제가 생겼습니다.");
			return false;
		}
		// setInput({ id: id + 1 }); //id값은 서버에서 생성한다. (재시작 리로드에서 변경될 수 있다.)
	};

	// const onUpdate = (id) => {
	// 	setViewContent(
	// 		viewContent.map((viewContent) =>
	// 			viewContent.id === id
	// 				? { ...viewContent, active: !viewContent.active }
	// 				: viewContent
	// 		)
	// 	);
	// };

	//1. 펑션들 상위 컴포넌트로 올리기, 스테이트 상위에 저장,

	//2. 저장 된 스테이트를 기반으로 페이지에 스테이트 전달

	// 3. 수정펑션 제작// 수정 클릭 ->id 확인하여 해당내용 추출 ->
	// 보드로 전달 페이지 이동 -> 보드 내용 수정 ->
	//   저장클릭 -> 기존배열로 반환,

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
				<BrdImageUpload for="input-file"> 이미지 업로드 </BrdImageUpload>
				<input
					id="input-file"
					type="file"
					onChange={getValue}
					style={{ margin: "10px 0px", display: "none" }}
				/>
			</BrdToolbar>
			<textarea
				name="content"
				onChange={getValue}
				value={viewContent.content}
				placeholder="내용을입력해주세요."
				style={{
					width: "70%",
					resize: "vertical",
					minHeight: "500px",
				}}></textarea>
			<BrdBtnBlock>
				<BrdBtn onClick={callSave}>저장</BrdBtn>
			</BrdBtnBlock>
			{viewContent.map((viewContent) => (
				<Preview key={viewContent.id}>
					<PreviewBlock>
						<h2
							style={{
								padding: "10px",
								fontSize: "1.2rem",
								borderBottom: "1px solid #757e86",
							}}>
							{viewContent.id} | 제목:{viewContent.title}
						</h2>
						<br />
						<div style={{ margin: "10px", fontSize: "1rem" }}>
							{ReactHtmlParser(viewContent.content)}
						</div>
					</PreviewBlock>
					<BtnBlock>
						<Update
							onClick={(e) => {
								e.preventDefault();
								callUpdate(viewContent.id);
							}}>
							수정
						</Update>
						<Delete
							onClick={(e) => {
								e.preventDefault();
								onRemove(viewContent.id);
								console.log(viewContent.id);
							}}>
							삭제
						</Delete>
					</BtnBlock>
				</Preview>
			))}
		</BrdBox>
	);
}
