import useLocalStorage from "./useLocalStorage";

const useForm = (initInput) => {
  const [input, setInput] = useLocalStorage("form", initInput);

  const handleChanges = evt => {
		// const {name, value} = evt.target;
		setInput({
			...input, [evt.target.name]: [evt.target.value],
		})
		// setFirstName(e.target.value);
  };

  const clearForm = e => {
    e.preventDefault();
    setInput(initInput);
	};
	
	return ([input, handleChanges, clearForm]);
}

export default useForm;