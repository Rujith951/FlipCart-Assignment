import { useEffect } from "react";
import Content from "./components/Content";
import { DARK } from "./constants";
import { useThemeContext } from "./context/ThemeContext";
import { getColorData } from "./redux/colors-api/colorActionCreators";
import store from "./redux/store";
import Drawer from "./components/Drawer";

store.dispatch(getColorData());

function App() {
	const { theme } = useThemeContext();
	return (
		<div
			style={{ background: theme === DARK ? "#444" : "#FFF" }}
			className="h-screen w-screen overflow-x-hidden p-3 transition-all duration-300 relative"
		>
			<Content />
			<Drawer />
		</div>
	);
}

export default App;
