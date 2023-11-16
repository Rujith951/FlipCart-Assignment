import React from "react";
import Theme from "./Theme";
import Color from "./Color";
import Filter from "./Filter";

function Head() {
	return (
		<div className="h-[25%] flex flex-col ">
			<div className="flex justify-between">
				<p className="text-lg font-semibold">Filter By</p>
				<Theme />
			</div>
			<div className="flex-1 flex items-center">
				<div className="h-[60%] w-[50%] flex items-center justify-between">
					<Color />
					<Filter />
				</div>
			</div>
		</div>
	);
}

export default Head;
