import React, { useState } from "react";
import styled from "styled-components";

export default function Board() {
	const brddate = new Date().toLocaleDateString("ko-KR");
	const [state, setState] = useState({
		maxNo: 3,
		boards: [
			{
				brdno: 1,
				brdwriter: "Lee SunSin",
				brdtitle: "If you intend to live then you die",
				brddate,
			},
			{
				brdno: 2,
				brdwriter: "So SiNo",
				brdtitle: "Founder for two countries",
				brddate,
			},
		],
	});
	const { maxNo } = state;

	const handleSaveData = (data) => {
		setState({
			boards: boards.concat({ brdno: maxNo, brddate, ...data }),
			maxNo: maxNo + 1,
		});
	};

	const { boards } = state;

	return (
		<div style={{ margin: "50px" }}>
			<BoardForm onSaveData={handleSaveData} />
			<table border="1">
				<tbody>
					<tr align="center">
						<td width="50">No.</td>
						<td width="300">Title</td>
						<td width="100">Name</td>
						<td width="100">Date</td>
					</tr>
					{boards.map((row) => (
						<BoardItem key={row.brdno} row={row} />
					))}
				</tbody>
			</table>
		</div>
	);
}

const BoardForm = ({ onSaveData }) => {
	const [bdstate, setBdstate] = useState({});

	const handleChange = (e) => {
		setBdstate({
			...bdstate,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onSaveData(bdstate);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input placeholder="title" name="brdtitle" onChange={handleChange} />
			<input placeholder="name" name="brdwriter" onChange={handleChange} />
			<button type="submit">Save</button>
		</form>
	);
};

const BoardItem = ({ row }) => {
	return (
		<tr>
			<td>{row.brdno}</td>
			<td>{row.brdtitle}</td>
			<td>{row.brdwriter}</td>
			<td>{row.brddate}</td>
		</tr>
	);
};
