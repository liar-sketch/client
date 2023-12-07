import { styled } from "styled-components";

interface UserProps {
	nickname: string;
	color: string;
}

const User = ({ nickname, color }: UserProps) => {
	return (
		<StyledUserSection color={color}>
			<UserNickName>{nickname}</UserNickName>
		</StyledUserSection>
	);
};

export default User;

interface StyledUserSectionProps {
	color: string;
}

const StyledUserSection = styled.section<StyledUserSectionProps>`
	width: 150px;
	height: 150px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: white;
	border: 1px solid ${(props) => props.color};
`;

const UserNickName = styled.p`
	display: flex;
	text-align: center;
`;
