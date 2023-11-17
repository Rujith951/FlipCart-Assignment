import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showDrawer } from "../redux/creatives/creativeActionCreators";
import Card from "./Card";
import { useFilterContext } from "./Content";

function Creatives() {
	const { text } = useFilterContext();
	let { visible, creatives } = useSelector(state => state.creatives);
	const dispatch = useDispatch();

	const percent = (100 / 5) * creatives.length;
	creatives = creatives.filter(c =>
		c.title.toLowerCase().includes(text.toLowerCase())
	);

	const handleFunctionality = () => {
		dispatch(showDrawer());
	};
	return (
		<div className="h-[75%]">
			<div className="w-[70%] bg-gray-200 rounded-full h-[2%] mb-3 dark:bg-gray-700">
				<div
					className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
					style={{
						width: `${percent}%`,
					}}
				/>
			</div>
			<div className="h-[8%]">
				<button
					disabled={visible || creatives.length == 5}
					onClick={handleFunctionality}
					type="submit"
					className="text-white bg-blue-700 hover:bg-blue-800 outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center active:scale-95 transition-all"
				>
					Add Creative
				</button>
			</div>

			<div className="h-[90%] overflow-x-hidden overflow-y-scroll flex items-center p-3 flex-col gap-y-4">
				{creatives.map(creatives => {
					return <Card key={creatives.id} {...creatives} />;
				})}
			</div>
		</div>
	);
}

export default Creatives;
