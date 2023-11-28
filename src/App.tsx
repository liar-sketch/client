import { Route, Routes, BrowserRouter } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyled";
import PrivateRouter from "./routers/privateRouter";
import { ErrorPage, Game, Home, Login } from "./pages";
import "./styles/font/font.css";

const App = () => {
	return (
		<>
			<GlobalStyles />
			<BrowserRouter>
				<Routes>
					<Route element={<PrivateRouter />}>
						<Route path="/" element={<Home />} />
						<Route path="/game" element={<Game />} />
					</Route>
					<Route path="/login" element={<Login />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
