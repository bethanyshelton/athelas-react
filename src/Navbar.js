export default function Navbar() {
	return (
		<nav className="flex py-8 text-indigo-400 border-b-2 border-gray-800">
			<h1 className="flex-1 w-6/12 text-center font-sans text-3xl tracking-wide">
				Welcome to Athelas
			</h1>
			<div className="flex-1 w-6/12 text-center divide-x divide-dashed divide-indigo-300">
				<a href="/" className="px-12">
					Today
				</a>
				<a href="/plan" className="px-12">
					Plan
				</a>
				<a href="/add" className="px-12">
					Add New Pill
				</a>
			</div>
		</nav>
	);
}
