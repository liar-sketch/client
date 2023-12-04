import { useState } from "react";
import { styled } from "styled-components";

type gameRoomType = {
	id: number;
	title: string;
	currentHeadCount: number;
	theme: string;
	turnNumber: number;
	difficulty: string;
	timer: number;
};

const gameRoomListTemp: gameRoomType[] = [
	{
		id: 1,
		title: "아무나 들어오세요",
		currentHeadCount: 3,
		theme: "RANDOM",
		turnNumber: 2,
		difficulty: "EASY",
		timer: 20,
	},
	{
		id: 2,
		title: "아무나 들어오세요",
		currentHeadCount: 3,
		theme: "RANDOM",
		turnNumber: 2,
		difficulty: "EASY",
		timer: 20,
	},
	{
		id: 3,
		title: "아무나 들어오세요",
		currentHeadCount: 3,
		theme: "RANDOM",
		turnNumber: 2,
		difficulty: "HARD",
		timer: 20,
	},
];

const RoomList = () => {
	const [gameRoomList, setGameRoomList] = useState(gameRoomListTemp);
	return (
		<>
			{gameRoomList.map((room: gameRoomType) => {
				return <GameRoomCard key={room.id} room={room} />;
			})}
		</>
	);
};

const GameRoomCard = ({ room }: { room: gameRoomType }) => {
	return (
		<RoomCardContainer>
			<RoomHeader>{room.title}</RoomHeader>
			<RoomDescription>
				<Difficulty>
					<strong>난이도: </strong>
					{room.difficulty}
				</Difficulty>
				<Theme>
					<strong>주제: </strong> {room.theme}
				</Theme>
				<CurrentHeadCount>
					<strong>반복: </strong>
					{room.currentHeadCount}
					<strong> 회</strong>
				</CurrentHeadCount>
				<Timer>
					<strong>시간 : </strong>
					{room.timer}
					<strong> 초</strong>
				</Timer>
			</RoomDescription>
		</RoomCardContainer>
	);
};

export default RoomList;

const RoomCardContainer = styled.section`
	display: flex;
	flex-direction: column;
	padding: 0.8rem 1rem;

	background-color: #0c69b699;
	flex: 1 1 50%;
	gap: 0.8rem;
	max-width: calc(50% - 1rem);
	border-radius: 10px;
	cursor: pointer;
	&:hover {
		background-color: #0c69b6aa;
	}
`;

const RoomHeader = styled.section`
	width: 100%;
	color: #252525;
	background-color: #f5f5f5;
	padding: 0.5rem;
	border-radius: 5px;
	font-size: 1.2rem;
	font-weight: var(--font-weight-semiBold);
`;

const RoomDescription = styled.section`
	display: flex;
	gap: 1rem;
	width: 100%;
	justify-content: space-between;
	p {
		color: #ffee00;
		border-radius: 5px;
		border: 1px solid #ffee00;
		padding: 0.2rem 0.5rem;
		background-color: #5ea0d6aa;
		font-size: 1.2rem;
		font-weight: var(--font-weight-semiBold);
		strong {
			font-size: 1rem;
		}
	}
`;

const Difficulty = styled.p``;
const Theme = styled.p``;
const CurrentHeadCount = styled.p``;
const Timer = styled.p``;
