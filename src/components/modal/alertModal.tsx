import { useRecoilState } from "recoil";
import { styled } from "styled-components";

import { alertState, alertContentState, alertCloseFocusState } from "src/stores/alertState";
import Button from "../button";
import Modal from ".";

const AlertModal = () => {
	const [open, setOpen] = useRecoilState(alertState);
	const [children, setChildren] = useRecoilState(alertContentState);
	const [closeFocusRef, setCloseFocusRef] = useRecoilState(alertCloseFocusState);

	const handleCloseModal = () => {
		setChildren(<section />);
		setCloseFocusRef(null);
		setOpen(false);
		closeFocusRef?.current?.focus();
	};

	return open ? (
		<AlertModalContainer>
			<Modal onClose={handleCloseModal}>
				<AlertModalSection>
					{children}

					<ConfirmButton onClick={() => handleCloseModal()}>확인</ConfirmButton>
				</AlertModalSection>
			</Modal>
		</AlertModalContainer>
	) : null;
};

export default AlertModal;

const AlertModalContainer = styled.section`
	z-index: 99;
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const AlertModalSection = styled.section`
	font-size: 1.3rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

const ConfirmButton = styled(Button)`
	font-size: 1rem;
	padding: 0.8rem 1.5rem;
	align-self: end;
`;
