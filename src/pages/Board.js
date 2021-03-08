import React, { useState } from "react";
import styled from "styled-components";



const BrdBox = styled.form`
display:flex;
flex-direction:column;
align-items:center;
`

const BrdTitle = styled.input`
margin-top:3%;
width:70%;
height:30px;
font-size:1rem;
border:none;
border-radius:2px;
text-indent:2px;
font-family:'NanumBarunpenR';
border: 1px solid #495057;
`

const BrdText = styled.textarea`
margin-top:10px;
font-size:1rem;
width:70%;
height:600px;
border:none;
border-radius:2px;
font-family:'NanumBarunpenR';
font-weight:lighter;
color:#343a40;
text-indent:2px;
border: 1px solid #495057;
resize: none;

`

const BrdBtnBlcok = styled.div`
display:flex;
margin-top:10px;
width:70%;
justify-content:flex-end;
`;

const BrdBtn = styled.button`
	font-family:'NanumBarunpenR';
	border: 1px solid #495057;
	border-radius: 2px;
	padding:3px 15px;
	font-weight: 300;
	font-size: 0.8rem;
`

export default function Board()
{

  
  return (
		<BrdBox>
			<BrdTitle placeholder="글 제목을 입력해주세요." />
			<BrdText placeholder="내용을 작성해주세요." />
			<BrdBtnBlcok><BrdBtn>저장</BrdBtn></BrdBtnBlcok>
		</BrdBox>
	);
};