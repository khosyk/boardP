import React, { useState } from "react";
import styled from "styled-components";



const BrdBox = styled.form`
display:flex;
flex-direction:column;
align-items:center;
background-color:green;
width: 500px;
height: 600px;
`

const BrdTitle = styled.input`

`

const BrdInput = styled.input`

`

const BrdBtn = styled.button`

`

export default function Board()
{

  
  return (
		<BrdBox>
			<BrdTitle placeholder="title here" />
			<BrdInput placeholder="content here" />
			<BrdBtn>저장</BrdBtn>
		</BrdBox>
	);
};