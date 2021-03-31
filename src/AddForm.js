import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";

export default function AddForm() {
	return (
		<form className="mt-2 text-white bg-gray-800 pt-8 pb-2 mx-6 rounded-lg border border-gray-700">
			<div className="m-4">
				<input
					name="name"
					placeholder="Name"
					type="text"
					className="bg-gray-800 rounded-full border border-indigo-400 p-2 w-full"
				></input>
			</div>
			<div className="m-4">
				<input
					name="dose"
					placeholder="Dose"
					type="text"
					className="bg-gray-800 rounded-full border border-indigo-400 p-2 w-7/12"
				></input>
				<select
					name="unit"
					className="bg-gray-800 rounded-full border border-indigo-400 p-2 w-5/12"
				>
					<option value="" disabled selected>
						Unit
					</option>
					<option value="mg">mg</option>
					<option value="mcg">mcg</option>
					<option value="g">g</option>
					<option value="iu">IU</option>
					<option value="tsp">teaspoons</option>
					<option value="tbsp">tablespoons</option>
					<option value="drops">drops</option>
					<option value="pill">pill</option>
				</select>
			</div>
			<div className="m-4">
				<select
					name="frequency"
					multiple
					className="bg-gray-800 rounded-3xl border border-indigo-400 p-2 w-full "
				>
					<option value="" disabled selected>
						When to take
					</option>
					<option value="wakeUp">Wake Up</option>
					<option value="morning">Morning</option>
					<option value="afternoon">Afternoon</option>
					<option value="evening">Evening</option>
					<option value="bedtime">Bedtime</option>
				</select>
			</div>
			<div>
				<Grid component="label" container alignItems="center" spacing={1}>
					<Grid item>Save for later</Grid>
					<Grid item>
						<Switch
							value="checked" // some value you need
						/>
					</Grid>
					<Grid item>Currently Taking</Grid>
				</Grid>
			</div>
			<div className="m-4">
				<button className=" bg-indigo-600 rounded-full px-6 py-2 w-full">
					Add
				</button>
			</div>
		</form>
	);
}
