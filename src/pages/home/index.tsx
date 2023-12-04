import { styled } from "styled-components";
import HomeHeader from "./homeHeader";
import RoomList from "./roomList";

const Home = () => {
	return (
		<HomeContainer>
			<HomeHeader />
			<GameRoomListSection>
				<GameRoomListBackground>
					<GameRoomListBackgroundSection>
						<RoomList />
					</GameRoomListBackgroundSection>
				</GameRoomListBackground>
			</GameRoomListSection>
		</HomeContainer>
	);
};

export default Home;

const HomeContainer = styled.section`
	width: 100%;
	height: 100vh;
`;

const GameRoomListSection = styled.section`
	margin: auto;
	width: 90%;
	height: calc(95% - 90px);
	padding: 2rem;
`;
const GameRoomListBackground = styled.section`
	width: 100%;
	height: 100%;
	background-color: #ffffff22;
	border-radius: 10px;
	overflow-y: auto;
	border: 2px solid #7e7e7e;
`;
const GameRoomListBackgroundSection = styled.section`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	padding: 2rem;
	gap: 2rem;
`;
