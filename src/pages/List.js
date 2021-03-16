import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Tlist = styled.tr`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0px 5px;
	padding: 5px 25px;
	line-height: 1.1rem;
	border-bottom: 1px solid rgba(1, 1, 1, 0.3);
`;

const TNumber = styled.td`
	font-size: 0.8rem;
	color: #343a40;
	margin-left: 9px;
`;

const TTitle = styled.td`
	margin-left: 10px;
	width: 85%;
`;

const TContent = styled.span`
	font-size: 0.9rem;
	color: #212529;
	&:hover {
		color: rgba(0, 0, 0, 0.5);
	}
`;

const Reply = styled.span`
	margin-left: 5px;
	font-size: 0.7rem;
	font-weight: 600;
	color: #141618;
	&:hover {
		color: rgba(0, 0, 0, 0.5);
	}
`;

const TDate = styled.td`
	font-size: 0.7rem;
	color: #343a40;
	margin-right: -10px;
`;

export default function List({ id, review, title }) {
	return (
		<Tlist>
			<TNumber>{id}</TNumber>
			<TTitle>
				<TContent>
					<Link to={`/issue/${id}`}>
						{title}
					</Link>
				</TContent>
				<Reply>
					<Link to={`/issue/${id}`}>{review}</Link>
				</Reply>
			</TTitle>
			<TDate>{new Date().toLocaleDateString()}</TDate>
		</Tlist>
	);
}
