import React from "react";
import styled from "styled-components";

const BoxWrapper = styled.div`
	color: inherit;
	padding: 25px;
	margin-bottom: 30px;
	background-color: var(--light-color);
	height: 350px;
	max-width: 100%;
	/* display: flex; */
	.db-box-item {
		max-width: 100%;
	}
`;

function DashboardBox({ children }) {
	return (
		<BoxWrapper>
			<div className="db-box-item">{children}</div>
		</BoxWrapper>
	);
}

export default DashboardBox;
