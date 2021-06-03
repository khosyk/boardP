import React from "react";
import styled from "styled-components";

const PageNumber = styled.a`
	margin-left: 2px;
	cursor: pointer;
  	font-size:14px;
  &:hover{
	font-weight:500;
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
