import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import store from "./redux/store.js";
import { Provider } from "react-redux";
import ThemeContextProvider from "./context/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<ThemeContextProvider>
			<App />
		</ThemeContextProvider>
	</Provider>
);
