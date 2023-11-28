import { useState, useCallback } from "react";
import { stringEvent } from "@/types";

export interface UseInputProps {
	[key: string]: string;
}

const useInput = (initialForm: UseInputProps) => {
	const [form, setForm] = useState<UseInputProps>(initialForm);

	const onChange = useCallback(
		(
			e:
				| React.ChangeEvent<HTMLInputElement>
				| React.ChangeEvent<HTMLTextAreaElement>
				| React.ChangeEvent<HTMLSelectElement>
				| stringEvent
		) => {
			const { name, value } = e.target;
			setForm((form) => ({ ...form, [name]: value }));
		},
		[]
	);

	const reset = useCallback(() => setForm(initialForm), [initialForm]);
	return { form, setForm, onChange, reset };
};

export default useInput;
