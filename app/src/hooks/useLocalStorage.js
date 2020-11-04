import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
	const [storedValue, setStoredValue] = useState(() => {
		try {
			const item = localStorage.getItem(key);
			return item ? JSON.parse(item) : initialValue;
		} catch (err) {
			console.log(err);
			return initialValue;
		}
	});
	const setValue = value => {
		try {
			//allow value to be a function to match useState API
			const valueToStore = value instanceof Function ? value(storedValue) : value;
			setStoredValue(valueToStore);
			localStorage.setItem(key, JSON.stringify(valueToStore))
		} catch (err) {
			console.log(err);
		}
	};
	return [storedValue, setValue];
};

export default useLocalStorage;