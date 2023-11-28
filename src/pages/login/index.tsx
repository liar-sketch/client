import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

import Button from "@/components/button";
import Input from "@/components/input";
import { alert } from "@/utils/modalManager";

const Login = () => {
	const [nickname, setNickname] = useState<string>(localStorage.getItem("nickname") ?? "");
	const inputRef = useRef<HTMLInputElement>(null);
	const navigate = useNavigate();

	const isNicknameValid = (nickname: string) => {
		if (nickname.length > 5) {
			inputRef.current?.blur();
			alert("5글자라고요. 선 넘지 마세요.", inputRef);
			return false;
		}
		return true;
	};

	const handleChangeInput = (nickname: string) => {
		setNickname(nickname);
	};

	const handleClickEnterGame = () => {
		localStorage.setItem("nickname", nickname);
		navigate("/");
	};

	const handleKeyDownEnter = (event: React.KeyboardEvent) => {
		if (event.key === "Enter") handleClickEnterGame();
	};

	useEffect(() => {
		inputRef.current?.focus();
	}, []);

	return (
		<LoginSection>
			<h2>Liar Sketch 에 오신걸 환영합니다! </h2>
			<h3>사용하실 닉네임을 입력해주세요.</h3>
			<InputArticle>
				<Input
					ref={inputRef}
					value={nickname}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
						const text = event.target.value.replace(/(\s*)/g, "");
						if (isNicknameValid(text)) handleChangeInput(text);
					}}
					maxLength={5}
					spellCheck="false"
					onKeyDown={(event) => {
						if (nickname) handleKeyDownEnter(event);
					}}
					placeholder="최대 5글자"
					width="110px"
				/>
				<Button disabled={!nickname} onClick={handleClickEnterGame}>
					입장하기
				</Button>
			</InputArticle>
		</LoginSection>
	);
};

export default Login;

const LoginSection = styled.section`
	width: 450px;
	height: 100vh;
	gap: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	margin: auto;
	color: #555;
`;

const InputArticle = styled.article`
	display: flex;
	justify-content: center;
	gap: 1rem;
`;
