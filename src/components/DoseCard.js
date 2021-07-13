import pills from "../pages/AddPill";

export default function DoseCard(props) {
	const currentDose = pills.filter(
		(pill) => pill.frequency === props.frequency
	);

	return (
		<div className="flex flex-col items-center mt-4 text-white">
			<h2 className="bg-gray-700 z-10 relative text-lg text-center -mb-4 w-6/12 md:w-4/12 lg:w-2/12 xl:w-1/12 rounded-md">
				{pills.frequency}
			</h2>
			<div className="bg-gray-800 pt-6 pb-2 w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12 rounded-md border border-gray-600">
				<ul className="list-square mx-8 mb-2">
					{currentDose.map((dose, index) => (
						<li key={index}>{dose.name}</li>
					))}
				</ul>
				<span className="flex justify-end -mx-8 -my-6">
					<button className="flex justify-end bg-pink-500 rounded-full px-4 py-2 hover:bg-pink-400">
						Taken
					</button>
				</span>
			</div>
		</div>
	);
}
