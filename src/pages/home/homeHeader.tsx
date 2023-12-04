import { styled } from "styled-components";

import LogoSVG from "src/assets/logo.svg?react";

const HomeHeader = () => {
	return (
		<HomeHeaderContainer>
			<LogoFigure>
				<LogoSVG width="150px" />
			</LogoFigure>
			<UserArticle>
				<p>
					<strong>{localStorage.getItem("nickname")}</strong> 님
				</p>
			</UserArticle>
		</HomeHeaderContainer>
	);
};

export default HomeHeader;

const HomeHeaderContainer = styled.section`
	height: 90px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const LogoFigure = styled.figure`
	padding: 1rem;
`;

const UserArticle = styled.article`
	> p {
		font-size: 1.3rem;
		font-weight: var(--font-weight-bold);
		color: #555555;
		strong {
			font-size: 1.5rem;
			color: #0c69b6;
		}
	}
`;
