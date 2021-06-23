import MultiSelect from "./MultiSelect.js";

export default function AddForm() {
	return (
		<form className="text-white bg-gray-800 pt-4 mx-4">
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
				{/* <select
					name="frequency"
					placeholder="When to take: (check all)"
					multiple
					className="form-multiselect bg-gray-800 border-0 border-b-2 border-pink-400 p-2 w-full "
				>
					<option value="" disabled selected>
						When to take: (check all)
					</option>
					<option className="text-red-500" value="wakeUp">
						Wake Up
					</option>
					<option value="breakfast">Breakfast</option>
					<option value="morning">Morning</option>
					<option value="lunch">Lunch</option>
					<option value="afternoon">Afternoon</option>
					<option value="dinner">Dinner</option>
					<option value="evening">Evening</option>
					<option value="bedtime">Bedtime</option>
				</select> */}
			</div>
			<div className="m-4">
				<button className="bg-pink-400 text-gray-800 rounded-full px-6 py-2 w-full">
					Add
				</button>
			</div>
		</form>
	);
}
