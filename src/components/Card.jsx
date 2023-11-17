import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCreatives } from "../redux/creatives/creativeActionCreators";

function Card({ title, subtitle, color, id }) {
	const { creatives } = useSelector(state => state.creatives);
	const dispatch = useDispatch();

	const deleteCard = () => {
		let creativesCopy = structuredClone(creatives);
		let returnedC = creativesCopy.filter(itm => itm.id !== id);
		dispatch(removeCreatives(returnedC));
	};
	return (
		<div
			key={color}
			className="min-w-[300px] min-h-[120px] p-2 rounded-md text-center flex "
			style={{
				background: color,
			}}
		>
			<div className=" h-full w-[70%] flex justify-center items-center flex-col">
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{title}
				</h5>
				<p className=" font-normal text-gray-700 dark:text-gray-400">
					{subtitle}
				</p>
			</div>
			<div className="h-full flex items-center justify-center w-[30%]">
				<button
					onClick={deleteCard}
					className="h-3 flex items-center justify-center w-10 text-[10px] rounded-md bg-blue-100"
				>
					delete
				</button>
			</div>
		</div>
	);
}

export default Card;
