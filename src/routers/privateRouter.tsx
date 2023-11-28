import { getIsLogin } from "@/utils/auth";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
	return getIsLogin() ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
