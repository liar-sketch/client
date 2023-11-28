import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";
import App from "./App.tsx";
import AlertModal from "./components/modal/alertModal.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<RecoilRoot>
		<RecoilNexus />
		<AlertModal />
		<App />
	</RecoilRoot>
);
