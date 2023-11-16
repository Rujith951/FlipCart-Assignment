import React from "react";

function Card({ title, subtitle, color }) {
	return (
		<div
			key={color}
			className="min-w-[300px] min-h-[120px] p-2 rounded-md text-center flex justify-center items-center flex-col"
			style={{
				background: color,
			}}
		>
			<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{title}
			</h5>
			<p className="font-normal text-gray-700 dark:text-gray-400">{subtitle}</p>
		</div>
	);
}

export default Card;
