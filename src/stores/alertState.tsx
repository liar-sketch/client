import { atom } from "recoil";

export const alertState = atom<boolean>({
	key: "alertState",
	default: false,
});

export const alertContentState = atom<React.ReactNode>({
	key: "alertContentState",
	default: <section />,
});

export const alertCloseFocusState = atom<React.RefObject<HTMLElement> | null>({
	key: "alertCloseFocusState",
	default: null,
});
