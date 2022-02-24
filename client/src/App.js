import { useState } from "react";
import { useLogger } from "react-use";
import styled from "styled-components";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddTourPackage from "components/pages/AddTourPackage";
import DashboardHeader from "components/layout/DashboardHeader";
import DashboardSideNav from "components/layout/DashboardSideNav";
import DashboardMain from "components/layout/DashboardMain";

import "assets/css/vendor/normalize.css";
import "assets/css/vendor/bootstrap-grid.css";
import "assets/css/vendor/bootstrap-utils.css";
import "assets/css/styles.css";

function App() {
	useLogger("App");
	const [values, setValues] = useState();
	const [images, setImages] = useState();

	const handleSubmit = () => {
		//
	};

	const handleChange = (e) => {
		setValues({ ...{ [e.target.name]: e.target.value } });
	};

	const onImageChange = (e) => {
		setImages();
	};

	console.log(values);
	return (
		<div className="bootstrap-wrapper">
			<div id="dashboard" className="dashboard-container">
				<BrowserRouter>
					<DashboardHeader />
					<DashboardSideNav />
					<DashboardMain>
						<Routes>
							<Route exact path="/" element={<AddTourPackage />} />
						</Routes>
					</DashboardMain>
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
