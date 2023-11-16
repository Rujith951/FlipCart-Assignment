import { createContext, useContext, useState } from "react";
import { LIGHT } from "../constants";

const ThemeContext = createContext();

export function useThemeContext() {
	return useContext(ThemeContext);
}

function ThemeContextProvider(props) {
	const [theme, setTheme] = useState(LIGHT);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{props.children}
		</ThemeContext.Provider>
	);
}

export default ThemeContextProvider;
