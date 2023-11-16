import React from "react";
import Spinner from "./Spinner";
import { useSelector } from "react-redux";

function Color() {
	const colors = useSelector(state => state.color);
	const { loading, data, error } = colors;
	return (
		<div className="h-[80%] w-[30%] grid grid-cols-4 gap-3  ">
			{loading ? (
				<Spinner />
			) : error ? (
				<p className="text-red-500 text-base">{error}</p>
			) : (
				<>
					{data.map(itm => (
						<div
							role="button"
							key={itm}
							className="h-4 w-4 rounded-full border-[1px] border-black  "
							style={{ background: itm }}
						/>
					))}
				</>
			)}
		</div>
	);
}

export default Color;
