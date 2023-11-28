import { setRecoil } from "recoil-nexus";
import { alertState, alertContentState, alertCloseFocusState } from "src/stores/alertState";

export const alert = (children: React.ReactNode, focusState: React.RefObject<HTMLElement> | null) => {
	setRecoil(alertContentState, children);
	setRecoil(alertCloseFocusState, focusState);
	setRecoil(alertState, true);
};
