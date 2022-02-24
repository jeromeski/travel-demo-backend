import styled from "styled-components";

const Input = styled.input.attrs(({ type, placeholder, name }) => {
	return { type: type || "text", placeholder: placeholder || `Please enter ${name}` };
})`
	display: block;
`;

export default Input;
