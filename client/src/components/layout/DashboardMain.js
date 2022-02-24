import React from "react";
import { Main } from "./styles/main-styled";

function DashboardMain({ children }) {
	return <Main className="dashboard-main">{children}</Main>;
}

export default DashboardMain;
