import React, { useState, useRef, useEffect } from "react";
import { styled } from "styled-components";

interface Message {
	text: string;
	nick: string;
	color?: string;
}

interface MessageListProps {
	messages: Message[];
}

interface MessageFormProps {
	onSendMessage: (message: string) => void;
}

const MessageListData: Message[] = [
	{ text: "ffffffff", nick: "타락천사", color: "orange" },
	{ text: "ffffffff", nick: "타락천사", color: "orange" },
	{ text: "ffffffff", nick: "박창우", color: "black" },
	{ text: "ffffffff", nick: "오예환", color: "green" },
	{ text: "ffffffff", nick: "타락천사", color: "orange" },
];
const mynick = "인화";
const mycolor = "blue";

const Chat = () => {
	const [messages, setMessages] = useState<Message[]>(MessageListData);
	const messageListRef = useRef<HTMLDivElement>(null);

	const handleSendMessage = (message: string) => {
		setMessages((prevMessages) => [...prevMessages, { text: message, nick: mynick, color: mycolor }]);
	};

	useEffect(() => {
		if (messageListRef.current) {
			messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
		}
	}, [messages]);

	return (
		<ChatContainer>
			<MessageListSection ref={messageListRef}>
				<MessageList messages={messages} />
			</MessageListSection>
			<MessageForm onSendMessage={handleSendMessage} />
		</ChatContainer>
	);
};

const MessageList: React.FC<MessageListProps> = ({ messages }) => (
	<div>
		{messages.map((message, index) => (
			<Message key={index} {...message} />
		))}
	</div>
);

const Message = ({ text, nick, color }: Message) => (
	<StyledMessage color={color || mycolor}>
		{nick} : {text}
	</StyledMessage>
);

const MessageForm: React.FC<MessageFormProps> = ({ onSendMessage }) => {
	const [message, setMessage] = useState("");

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		onSendMessage(message);
		setMessage("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<StyledInput type="text" value={message} onChange={(event) => setMessage(event.target.value)} />
		</form>
	);
};

export default Chat;

interface StyledMessageProps {
	color: string;
}

const ChatContainer = styled.section`
	display: flex;
	flex-direction: column;
	width: 1100px;
	height: 200px;
	gap: 10px;
	padding: 10px;
	justify-content: space-between;
	box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
	opacity: 0.8;
	border-radius: 8px;
`;

const MessageListSection = styled.div`
	flex: 1;
	overflow-y: auto;
	&::-webkit-scrollbar-thumb {
		background-color: #e0e0e0;
	}
`;

const StyledMessage = styled.p<StyledMessageProps>`
	display: flex;
	text-align: center;
	color: ${(props) => props.color};
	margin-bottom: 3px;
`;

const StyledInput = styled.input`
	width: 100%;
	padding: 8px;
	border: none;
	box-shadow: inset 6px 6px 5px -5px rgba(0, 0, 0, 0.25);
	outline: none;
	border-radius: 5px;
`;
