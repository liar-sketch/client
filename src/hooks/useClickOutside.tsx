import { useEffect } from "react";

interface UseClickOutsideProps {
	ref: React.RefObject<HTMLElement>;
	onClickOutside: (event: MouseEvent) => void;
}

const useClickOutside = ({ ref, onClickOutside }: UseClickOutsideProps) => {
	const handleClickOutside = (event: MouseEvent) => {
		if (!ref.current?.contains(event.target as Element)) {
			onClickOutside(event);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [ref, onClickOutside]);
};

export default useClickOutside;
