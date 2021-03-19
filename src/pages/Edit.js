import React, { useRef, useState } from "react";
import styled from "styled-components";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ReactHtmlParser from "react-html-parser";
import "./Ck.css";

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

const CKWrapper = styled.div`
	margin-top: 10px;
	font-size: 1rem;
	width: 70%;
	border: none;
	border-radius: 2px;
	text-indent: 2px;
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

export default function Edit() {
	const [input, setInput] = useState({
		title: "",
		content: "",
		id: 0,
		active: true,
	});

	const { id } = input;

	const [viewContent, setViewContent] = useState([]);

	const getValue = (e) => {
		const { name, value } = e.target;
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
			<CKWrapper>
				<CKEditor
					editor={ClassicEditor}
					data="<p>내용을 작성해주세요.</p>"
					onReady={(editor) => {
						// You can store the "editor" and use when it is needed.
						console.log("Editor is ready to use!", editor);
					}}
					onChange={(event, editor) => {
						const data = editor.getData();
						console.log({ event, editor, data });
						setInput({
							...input,
							content: data,
						});
					}}
					onBlur={(event, editor) => {
						console.log("Blur.", editor);
					}}
					onFocus={(event, editor) => {
						console.log("Focus.", editor);
					}}
				/>
			</CKWrapper>
			<BrdBtnBlock>
				<BrdBtn
					onClick={(e) => {
						e.preventDefault();
						setViewContent(viewContent.concat({ ...input }));
						setInput({ id: id + 1 });
					}}>
					저장
				</BrdBtn>
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
