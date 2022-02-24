import React from "react";
import { useSize } from "react-use";
import styled from "styled-components";
import { bp } from "utils/bp";

const SideNav = styled.div`
	background-color: #292929;
	width: 100%;
	flex: 1 0 20%;
	/* min-width: 225px; */
	@media (max-width: ${bp.lg}) {
		flex: 1 0 35%;
	}
	@media (max-width: ${bp.md}) {
		position: fixed;
		top: 8%;
		width: 100%;
		height: 75px;
		z-index: 5;
	}
`;

function DashboardSideNav({ children }) {
	return <SideNav>{children}</SideNav>;
}

export default DashboardSideNav;
