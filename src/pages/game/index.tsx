import { styled } from "styled-components";
import LogoSVG from "src/assets/logo.svg?react";
import Button from "@/components/button";
import User from "./user";
import Board from "./board";
import Chat from "./chat";

interface DataType {
	nickname: string;
	color: string;
}

const Data: DataType[] = [
	{ nickname: "inhwa", color: "red" },
	{ nickname: "inhwa", color: "blue" },
	{ nickname: "inhwa", color: "yellow" },
	{ nickname: "inhwa", color: "pink" },
	{ nickname: "inhwa", color: "green" },
	{ nickname: "inhwa", color: "black" },
];
const Game = () => {
	return (
		<GameContainer>
			<StyledHeader>
				<LogoSVG />
			</StyledHeader>
			<StyledContent>
				<UserListSection>
					{Data.map((user) => (
						<User key={user.nickname} nickname={user.nickname} color={user.color} />
					))}
				</UserListSection>
				<BoardSection>
					<Board />
				</BoardSection>
			</StyledContent>
			<SideSection>
				<Button>차례종료</Button>
			</SideSection>
			<StyledFooter>
				<ChatSection>
					<Chat />
				</ChatSection>
			</StyledFooter>
		</GameContainer>
	);
};
export default Game;

const GameContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	height: 100px;
	padding-left: 20px;
`;

const StyledContent = styled.body`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const UserListSection = styled.section`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	place-items: center;
	text-align: center;
	gap: 20px;
`;

const BoardSection = styled.section`
	width: 500px;
	height: 500px;
	display: flex;
	position: fixed;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	background-color: white;
`;

const StyledFooter = styled.footer`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const SideSection = styled.section`
	width: 100%;
	display: flex;
	justify-content: center;
	text-align: center;
`;

const ChatSection = styled.section`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
`;
