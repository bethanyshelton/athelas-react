import { useState } from "react";

export default function AddForm(props) {
	const [newPill, setNewPill] = useState({
		name: "",
		dose: "",
		unit: "",
		frequency: "",
	});

	function handleChange(event) {
		const { name, value } = event.target;

		setNewPill((prevPill) => ({
			...prevPill,
			[name]: value,
		}));
	}

	function submitPill(event) {
		props.onAdd(newPill);
		event.preventDefault();
	}

	return (
		<form
			className="flex justify-center text-white bg-gray-800 pt-4"
			autoComplete="off"
			onSubmit={submitPill}
		>
			<div className="flex flex-col w-full sm:w-8/12 md:w-7/12 lg:w-6/12 xl:w-4/12">
				<div className="m-4">
					<input
						onChange={handleChange}
						name="name"
						value={newPill.name}
						placeholder="Name"
						type="text"
						className="placeholder-white bg-gray-800 border-0 border-b-2 border-pink-400 p-2 w-full focus:outline-none focus:ring-2 focus:ring-pink-400"
					></input>
				</div>
				<div className="m-4">
					<input
						onChange={handleChange}
						name="dose"
						value={newPill.dose}
						placeholder="Dose"
						type="text"
						className="placeholder-white bg-gray-800 border-0 border-b-2 border-pink-400 p-2 w-7/12 focus:outline-none focus:ring-2 focus:ring-pink-400"
					></input>
					<select
						onChange={handleChange}
						name="unit"
						value={newPill.unit}
						className="bg-gray-800 border-0 border-b-2 border-pink-400 p-2 w-5/12 focus:outline-none focus:ring-2 focus:ring-pink-400"
					>
						<option value="" disabled>
							Unit
						</option>
						<option value="mg">mg</option>
						<option value="mcg">mcg</option>
						<option value="g">g</option>
						<option value="iu">IU</option>
						<option value="tsp">teaspoon(s)</option>
					</select>
				</div>
				<div className="m-4">
					<select
						onChange={handleChange}
						name="frequency"
						value={newPill.frequency}
						className="bg-gray-800 border-0 border-b-2 border-pink-400 p-2 w-full focus:outline-none focus:ring-2 focus:ring-pink-400"
					>
						<option value="" disabled>
							Frequency
						</option>
						<option value="wake-up">Wake Up</option>
						<option value="breakfast">Breakfast</option>
						<option value="lunch">Lunch</option>
						<option value="dinner">Dinner</option>
						<option value="bed-time">Bed Time</option>
					</select>
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
