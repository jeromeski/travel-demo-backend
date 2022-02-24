import React from "react";
import styled from "styled-components";
import { bp } from "utils/bp";

const Main = styled.div`
	flex: 1 1 80%;
	width: 100%;
	height: 100%;

	@media (max-width: ${bp.lg}) {
		flex: 1 1 65%;
	}

	.db-info-wrap {
		color: inherit;
		background-color: var(--bg-color);
		height: 100%;
		width: 100%;
		padding: 25px !important;
	}

	& .row {
		@media (max-width: ${bp.md}) {
			padding-top: 15.5%;
		}
		@media (max-width: ${bp.sm}) {
			padding-top: 17%;
		}
	}
`;

function DashboardMain({ children }) {
	return <Main className="dashboard-main">{children}</Main>;
}

export default DashboardMain;

/*
	@media (max-width: ${bp.md}) {
		&.row {
			transform: translateY(5%) !important;
		}
	}
	@media (max-width: ${bp.lg});
	 {
		flex: 1 1 65%;
		 position: fixed;
		top: 8.5%;
		left: 0;
		z-index: 5; 
	}
*/
