import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showDrawer } from "../redux/creatives/creativeActionCreators";
import Card from "./Card";

function Creatives() {
	const { visible, creatives } = useSelector(state => state.creatives);
	const dispatch = useDispatch();

	const handleFunctionality = () => {
		dispatch(showDrawer());
	};
	return (
		<div className="h-[75%]">
			<div className="h-[8%]">
				<button
					disabled={visible || creatives.length == 5}
					onClick={handleFunctionality}
					type="submit"
					className="text-white bg-blue-700 hover:bg-blue-800 outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 active:scale-95 transition-all"
				>
					Add Creative
				</button>
			</div>
			<div className="h-[92%] overflow-x-hidden overflow-y-scroll flex items-center p-3 flex-col gap-y-4">
				{creatives.map(creatives => {
					return <Card {...creatives} />;
				})}
			</div>
		</div>
	);
}

export default Creatives;
