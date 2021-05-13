import React from "react";
import styled from "styled-components";

const MainPosition = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-left: auto;
	margin-right: auto;
	height: 100vh;
	margin-top: -1px;
	background-color: rgba(0, 0, 0, 0.02);
`;

const MainBlock = styled.div`
	display: flex;
	flex-direction: column;
	width: 80%;
	height: 70%;
	justify-content: center;
	align-items: center;
	margin-top: 30px;
	min-width: 700px;
	max-width: 1200px;
	margin-bottom: 5vh;
	@media (max-width: 767px) {
		min-width: 330px;
	}
`;

function Find() {
	return (
		<MainPosition>
			<MainBlock>
				아직 개발중인 기능입니다. 관리자에게 메일을 보내주세요.
				<br />
				hosy12@gmail.com
			</MainBlock>
		</MainPosition>
	);
}

export default Find;
