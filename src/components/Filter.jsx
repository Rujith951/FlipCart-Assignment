import React from "react";

function Filter() {
	return (
		<div className="h-[70%] mb-3 space-y-2">
			<p className="">title/subtitle</p>
			<input
				className="h-6 w-40 outline-none "
				type="text"
				placeholder="search accross title"
			/>
		</div>
	);
}

export default Filter;
