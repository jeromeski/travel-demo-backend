import { useState } from "react";
import { useLogger } from "react-use";
import styled from "styled-components";

import "assets/css/global.css";

const Page = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
	padding: 10px;
	.form {
		display: flex;
		flex-direction: column;
	}
`;

function Form({ children, onSubmit, ...props }) {
	return (
		<form className="form" onSubmit={onSubmit} {...props}>
			{children}
		</form>
	);
}

const Input = styled.input.attrs(({ type, placeholder, name }) => {
	return { type: type || "text", placeholder: placeholder || `Please enter ${name}` };
})`
	display: block;
`;

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
		<Page>
			<Form onSubmit={handleSubmit}>
				<Input type="text" name="title" onChange={handleChange} />
				<Input type="file" name="image" accept="image/*" onChange={onImageChange} />
			</Form>
		</Page>
	);
}

export default App;
