import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getColorData } from "./redux/colors-api/colorActionCreators";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getColorData());
	}, []);
	return <div>App</div>;
}

export default App;
