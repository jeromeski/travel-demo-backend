import React from "react";
import DashboardBox from "components/layout/DashboardBox";

function AddTourPackage() {
	return (
		<div className="db-info-wrap db-add-tour-wrap">
			<div className="row">
				<div className="col-lg-8 col-xl-9">
					<DashboardBox />
					<DashboardBox />
					<DashboardBox />
					<DashboardBox />
				</div>
				<div className="col-lg-4 col-xl-3">
					<DashboardBox />
					<DashboardBox />
				</div>
			</div>
		</div>
	);
}

export default AddTourPackage;
