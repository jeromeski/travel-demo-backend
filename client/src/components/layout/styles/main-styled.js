import styled from "styled-components";
import { bp } from "utils/bp";

export const Main = styled.div`
	flex: 1 1 80%;
	width: 100%;
	height: 100%;
	background-color: var(--bg-color);

	@media (max-width: ${bp.lg}) {
		flex: 1 1 65%;
	}

	@media (max-width: ${bp.md}) {
		padding-top: 75px;
	}

	.db-info-wrap {
		color: inherit;
		background-color: var(--bg-color);
		height: 100%;
		width: 100%;
		padding: 25px;

		@media (max-width: ${bp.sm}) {
			padding: 15px;
		}
	}
`;
