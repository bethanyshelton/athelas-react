import MultiSelect from "./MultiSelect.js";

export default function AddForm() {
	return (
		<form className="flex justify-center text-white bg-gray-800 pt-4">
			<div className="flex flex-col w-full sm:w-8/12 md:w-7/12 lg:w-6/12 xl:w-4/12">
				<div className="m-4">
					<input
						name="name"
						placeholder="Name"
						type="text"
						className="placeholder-white bg-gray-800 border-0 border-b-2 border-pink-400 p-2 w-full focus:outline-none focus:ring-2 focus:ring-pink-400"
					></input>
				</div>
				<div className="m-4">
					<input
						name="dose"
						placeholder="Dose"
						type="text"
						className="placeholder-white bg-gray-800 border-0 border-b-2 border-pink-400 p-2 w-7/12 focus:outline-none focus:ring-2 focus:ring-pink-400"
					></input>
					<select
						name="unit"
						className="bg-gray-800 border-0 border-b-2 border-pink-400 p-2 w-5/12 focus:outline-none focus:ring-2 focus:ring-pink-400"
					>
						<option value="" disabled selected>
							Unit
						</option>
						<option value="mg">mg</option>
						<option value="mcg">mcg</option>
						<option value="g">g</option>
						<option value="iu">IU</option>
						<option value="tsp">teaspoon(s)</option>
						<option value="tbsp">tablespoon(s)</option>
						<option value="drops">drop(s)</option>
						<option value="pill">pill(s)</option>
					</select>
				</div>
				<div className="m-4">
					<MultiSelect />
				</div>
				<div className="m-4">
					<button className="bg-pink-400 text-gray-800 rounded-full px-6 py-2 w-full hover:bg-pink-500">
						Add
					</button>
				</div>
			</div>
		</form>
	);
}
