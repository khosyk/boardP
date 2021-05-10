import React from "react";
import styled from "styled-components";

const PageNumber = styled.a`
	margin-left: 5px;
	cursor: pointer;
	color: black;
	background-color: white;
  font-size:1rem;
  &:hover{
    font-weight:600;
  }
  &:active{
    color:red;
  }
`;

export default function Page({ getCurrentPage, data })
{
  
	return (
		<>
			<PageNumber onClick={getCurrentPage}>
				{data}
			</PageNumber>
		</>
	);
}
