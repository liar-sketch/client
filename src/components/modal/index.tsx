import { useEffect, useRef } from "react";
import { styled } from "styled-components";

import useClickOutside from "@/hooks/useClickOutside";

export interface ModalProps {
	ablebackdrop?: boolean;
	children: React.ReactNode;
	onClose?: () => void;
}

const Modal = ({
	ablebackdrop = false,
	onClose = () => {
		return null;
	},
	children,
}: ModalProps) => {
	const modalContentRef = useRef<HTMLInputElement>(null);

	const handleClickOutside = () => {
		if (!ablebackdrop)
			modalContentRef.current?.animate(
				[{ outline: "1px solid #dbdbdb" }, { outline: "none" }, { outline: "1px solid #dbdbdb" }],
				{ duration: 500 }
			);
	};
	if (!ablebackdrop) useClickOutside({ ref: modalContentRef, onClickOutside: handleClickOutside });

	const handleKeydown = (event: KeyboardEvent) => {
		if (event.key === "Escape" || event.key === "Enter") onClose();
	};

	useEffect(() => {
		document.addEventListener("keydown", handleKeydown);
		return () => {
			document.removeEventListener("keydown", handleKeydown);
		};
	}, []);

	return (
		<ModalContainer>
			<ModalBackgroundSection
				onClick={(e) => {
					e.preventDefault();
					e.stopPropagation();
					if (ablebackdrop) onClose();
				}}
			/>
			<ModalContentSection ref={modalContentRef}>{children}</ModalContentSection>
		</ModalContainer>
	);
};

export default Modal;

const ModalContainer = styled.section`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1;
`;
const ModalBackgroundSection = styled.section`
	position: inherit;
	width: 100%;
	height: 100%;
	opacity: 0.56;
	background-color: var(--color-black);
	z-index: 1;
`;

const ModalContentSection = styled.section`
	z-index: 20;
	padding: 40px 40px 32px 40px;
	height: fit-content;
	width: fit-content;
	background-color: var(--color-white);
	border-radius: 4px;
`;
