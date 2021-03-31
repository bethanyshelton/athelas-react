export default function DoseCard() {
	return (
		<div className="mt-8 text-white">
			<h2 className="bg-gray-700 z-10 relative text-lg font-bold uppercase text-center -mb-6 p-2 mx-96 rounded-lg border border-gray-600">
				Morning
			</h2>
			<div className="bg-gray-800 px-6 pt-8 pb-2 mx-72 rounded-lg border border-gray-700">
				<ul className="list-disc list-inside px-24">
					<li>Vitamin Name</li>
					<li>Vitamin Name</li>
					<li>Vitamin Name</li>
					<li>Vitamin Name</li>
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
