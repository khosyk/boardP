import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Tlist = styled.tr`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-left: auto;
	margin-right: auto;
	padding: 5px 10px;
	line-height: 1.1rem;
	border-bottom: 1px solid rgba(1, 1, 1, 0.3);
	width: 98%;
	&:last-child {
		border-bottom: none;
	}
`;

const TNumber = styled.td`
	font-size: 0.8rem;
	color: #343a40;
	margin-left: 9px;
`;

const TTitle = styled.td`
	margin-right: auto;
	margin-left: 20px;
	text-align: left;
`;

const TContent = styled.span`
	display: inline-block;
	font-size: 0.9rem;
	color: #212529;
	height: 0.9rem;
	word-break: break-word;
	overflow: hidden;
	text-overflow: ellipsis;
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
	var date = new Date();

	// Format day/month/year to two digits
	var formattedDate = ("0" + date.getDate()).slice(-2);
	var formattedMonth = ("0" + (date.getMonth() + 1)).slice(-2);
	var formattedYear = date.getFullYear().toString().substr(2, 2);

	// Combine and format date string
	var dateString = formattedYear + "/" + formattedMonth + "/" + formattedDate;
	return (
		<Tlist>
			<TNumber>{id}</TNumber>
			<TTitle>
				<TContent>
					<Link to={`/issue/${id}`}>{title}</Link>
				</TContent>
				<Reply>
					<Link to={`/issue/${id}`}>{review}</Link>
				</Reply>
			</TTitle>
			<TDate>{dateString}</TDate>
		</Tlist>
	);
}
