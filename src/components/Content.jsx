import React, { createContext, useContext, useState } from "react";
import Creatives from "./Creatives";
import Head from "./Head";

const FilterContext = createContext();
export const useFilterContext = () => {
	return useContext(FilterContext);
};

function Content() {
	const [text, setText] = useState("");

	return (
		<div className="h-full w-[60%] ">
			<FilterContext.Provider value={{ text, setText }}>
				<Head />
				<Creatives />
			</FilterContext.Provider>
		</div>
	);
}

export default Content;
