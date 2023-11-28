import { ForwardedRef, forwardRef } from "react";
import { css, styled } from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	fontSize?: string;
	width?: string;
	height?: string;
}
const Input = (
	{ fontSize = "1.2rem", width = "100%", height = "100%", ...inputProps }: InputProps,
	ref?: ForwardedRef<HTMLInputElement>
) => {
	return <InputComponent ref={ref} fontSize={fontSize} width={width} height={height} {...inputProps} />;
};

export default forwardRef(Input);

const InputComponent = styled.input<{ fontSize: string; width: string; height: string }>`
	outline: 1px solid #9c9c9c;
	border-radius: 5px;
	border: none;
	padding: 1rem;
	${({ width, height, fontSize }) => {
		return css`
			width: ${width};
			height: ${height};
			font-size: ${fontSize};
		`;
	}}
	&:focus {
		outline-color: #808080;
	}
`;
