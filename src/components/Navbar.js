import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<nav className="flex items-center py-8 text-pink-500 border-b-2 border-pink-500">
			<h1 className="flex-1 w-6/12 text-center font-sans text-3xl tracking-wide">
				Athelas
			</h1>
			<div className="flex-1 w-6/12 text-center divide-x divide-pink-300">
				<Link to="/" className="px-2 sm:px-6 hover:text-pink-300">
					Today
				</Link>
				<Link to="/add-pill" className="px-2 sm:px-6 hover:text-pink-300">
					New Pill
				</Link>
			</div>
		</nav>
	);
}
