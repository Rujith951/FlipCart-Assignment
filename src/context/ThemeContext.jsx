import { createContext, useContext, useEffect, useState } from "react";
import { LIGHT } from "../constants";

const ThemeContext = createContext();

export function useThemeContext() {
	return useContext(ThemeContext);
}

const StoredTheme = JSON.parse(localStorage.getItem("theme"));

function ThemeContextProvider(props) {
	const [theme, setTheme] = useState(StoredTheme ?? LIGHT);

	useEffect(() => {
		localStorage.setItem("theme", JSON.stringify(theme));
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{props.children}
		</ThemeContext.Provider>
	);
}

export default ThemeContextProvider;
