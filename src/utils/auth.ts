export const getIsLogin = (): boolean => {
	if (localStorage.getItem("nickname")) return true;
	return false;
};
