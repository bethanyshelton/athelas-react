const currentYear = new Date().getFullYear();

export default function Footer() {
	return (
		<div className="flex items-center bg-gray-800 justify-center text-pink-500 fixed bottom-0 inset-x-0 py-2 border-t-2 border-pink-500">
			<p>&copy; {currentYear} Bethany Shelton </p>
		</div>
	);
}
