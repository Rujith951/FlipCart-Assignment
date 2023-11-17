import { useFilterContext } from "./Content";

function Filter() {
	const { text, setText } = useFilterContext();

	return (
		<div className="h-[70%] mb-3 space-y-2">
			<p className="">title/subtitle</p>
			<input
				value={text}
				onChange={e => {
					setText(e.target.value);
				}}
				type="text"
				id="filter"
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				placeholder="search by title...."
				required
			/>
		</div>
	);
}

export default Filter;
