import React, { useRef, useState } from "react";
import styled from "styled-components";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ReactHtmlParser from "react-html-parser";
import "./Ck.css";
import Status from "../modules/Status";

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

export default function Edit() {
	
	const [input, setInput] = useState({
		title: "COVID 19, can we get back daily life oneday?",
		content: "",
			});

	const {title,content} = input
	
	const [viewContent, setViewContent] = useState([]);

	const getValue = (e) => {
		const { name, value } = e.target;
		setInput({
			...input,
			[name]: value,
		});
	};

	//Remove


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
				value={title}
			/>
			<CKWrapper>
				<CKEditor
					editor={ClassicEditor}
					data=" <p>
					Agency chief Tedros Adhanom Ghebreyesus told journalists that
					WHO’s Advisory Committee on Vaccine Safety has been reviewing
					available data on the vaccine and will meet with the European
					Medicines Agency (EMA) on Tuesday. Germany, France, Italy and
					Spain have become the latest countries to temporarily halt use of
					the shot, following reports of blood clots in people who received
					the vaccine from two batches produced in Europe.
				</p>
				<br />
				<p>
					“This does not necessarily mean these events are linked to
					vaccination, but it’s routine practice to investigate them, and it
					shows that the surveillance system works and that effective
					controls are in place”, Tedros said. Dr. Mariângela Simão, a WHO
					Assistant Secretary-General, said the agency is working very
					closely with the EMA, and with national regulatory authorities in
					Europe and other regions, in assessing the adverse effects of the
					AstraZeneca vaccine and all other vaccines. WHO has not received
					reports about “thrombo-embolic events” in other parts of the
					world, she added. Tedros stressed that “the greatest threat” most
					countries face now is lack of access to vaccines, saying he
					receives calls from leaders worldwide “almost every day” asking
					when their nations will receive doses through the COVAX
					initiative.
				</p>
				<br />
				<p>
					Syrian war remembrance The ongoing conflict in Syria has brought
					the country’s once highly-effective health system “to its knees”,
					Tedros said in acknowledging the 10th anniversary of the crisis.
					WHO and its partners continue to deliver services and supplies,
					protect public health and support a network of more than 1,700
					health facilities. Tedros pointed out that tragically, Syria is
					not an isolated case. “Syria is one of many crises around the
					world, from Myanmar to Yemen and Tigray in Ethiopia, where
					millions of people have been denied access to essential health
					services, and where health facilities have been destroyed and
					health workers have been attacked and intimidated.
				</p>"
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
					onClick=''>
					저장
				</BrdBtn>
			</BrdBtnBlock>
		</BrdBox>
	);
}
