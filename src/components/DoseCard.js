import pills from "./pills";

export default function DoseCard({ frequency }) {
	const currentDose = pills.filter((pill) => pill.frequency === frequency);

	return (
		<div className="flex flex-col items-center mt-8 text-white">
			<h2 className="bg-gray-700 z-10 relative text-lg uppercase text-center -mb-6 p-2 w-4/12 rounded-lg border border-gray-600">
				{frequency}
			</h2>
			<div className="bg-gray-800 px-6 pt-8 pb-2 w-5/12 rounded-lg border border-gray-700">
				<ul className="list-disc mx-16">
					{currentDose.map((pill) => (
						<li>{pill.name}</li>
					))}
				</ul>
				<span className="flex justify-end -mx-8 -my-4">
					<button className="flex justify-end bg-indigo-600 rounded-full px-6 py-2">
						Taken
					</button>
				</span>
			</div>
		</div>
	);
}
