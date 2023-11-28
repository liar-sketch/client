import { ForwardedRef, forwardRef } from "react";
import { styled } from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	fontSize?: string;
	children: React.ReactNode;
}

const Button = (
	{ fontSize = "1.2rem", children = "확인", ...buttonProps }: ButtonProps,
	ref?: ForwardedRef<HTMLButtonElement>
) => {
	return (
		<ButtonComponent ref={ref} type="button" fontSize={fontSize} {...buttonProps}>
			{children}
		</ButtonComponent>
	);
};

export default forwardRef(Button);

const ButtonComponent = styled.button<{ fontSize: string }>`
	transition: 0.2s all;
	width: fit-content;
	border-radius: 5px;
	border: none;
	color: white;
	background-color: #4545d6;
	padding: 1rem 2rem;
	font-size: ${(props) => props.fontSize};
	cursor: pointer;
	&:hover {
		background-color: #3333d4;
	}
	&:disabled {
		cursor: default;
		background-color: #acacac;
	}
	&:focus {
		outline: none;
	}
`;
