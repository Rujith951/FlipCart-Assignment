import React from "react";

function Form({ title, setTitle, subtitle, setSubTitle, terror, sterror }) {
	return (
		<div className="h-[60%] p-5">
			<div className="h-[50%] flex flex-col justify-center">
				<label
					htmlFor="first_name"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white tracking-wide"
				>
					Title :
				</label>
				<input
					value={title}
					onChange={e => setTitle(e.target.value)}
					type="text"
					id="first_name"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="enter title"
					required
				/>
				{terror && <p className="text-red-400">Please enter title.</p>}
			</div>
			<div className="h-[50%] ">
				<label
					htmlFor="first_name"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white tracking-wide"
				>
					Subtitle :
				</label>
				<input
					value={subtitle}
					onChange={e => setSubTitle(e.target.value)}
					type="text"
					id="first_name"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="enter subtitle"
					required
				/>
				{sterror && <p className="text-red-400">Please enter sub title.</p>}
			</div>
		</div>
	);
}

export default Form;
