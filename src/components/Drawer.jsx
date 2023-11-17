import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Color from "./Color";
import {
	addCreative,
	closeDrawer,
} from "../redux/creatives/creativeActionCreators";
import Form from "./Form";
import { DARK } from "../constants";
import { useThemeContext } from "../context/ThemeContext";

function Drawer() {
	const [title, setTitle] = useState("");
	const [subtitle, setSubTitle] = useState("");
	const [terror, settError] = useState(false);
	const [sterror, setstError] = useState(false);
	const [color, setColor] = useState("");

	const formProps = {
		title,
		setTitle,
		subtitle,
		setSubTitle,
		terror,
		sterror,
	};

	const { visible } = useSelector(state => state.creatives);
	const dispatch = useDispatch();
	const { theme } = useThemeContext();

	const unVisibleDrawer = () => {
		dispatch(closeDrawer());
	};

	const handleDone = () => {
		if (title && subtitle && color) {
			const payload = {
				title,
				subtitle,
				color,
				id: Date.now(),
			};
			dispatch(closeDrawer());
			setTitle("");
			setSubTitle("");
			setColor("");
			settError(false);
			setstError(false);
			dispatch(addCreative(payload));
		} else {
			if (!title) settError(true);
			if (!subtitle) setstError(true);
			if (!color) alert("please select a color");
		}
	};

	return (
		<div
			className="absolute inset-0 left-[70%] w-[30%] bg-gray-200 shadow-2xl transition-all duration-300"
			style={{
				transform: visible === false ? "translateX(100%)" : "translateX(0%)",
				background: theme === DARK ? "#555" : "#FFF",
			}}
		>
			<div className="h-[60%] ">
				<div className="h-[15%] flex items-center justify-between px-5">
					<p className="text-xl">Create Creatives</p>
					<svg
						role="button"
						onClick={unVisibleDrawer}
						xmlns="http://www.w3.org/2000/svg"
						height="12px"
						viewBox="0 0 329.26933 329"
						width="12px"
					>
						<path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" />
					</svg>
				</div>
				<Form {...formProps} />
				<div className="h-[25%] pl-5 flex flex-col justify-center gap-2">
					<p>Select Color :</p>
					<Color setColor={setColor} />
				</div>
			</div>
			<div className="h-[40%] p-5 flex items-end ">
				<button
					onClick={handleDone}
					type="submit"
					className="text-white bg-blue-700 hover:bg-blue-800 outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 active:scale-95 transition-all"
				>
					Done
				</button>
			</div>
		</div>
	);
}

export default Drawer;
