import Navbar from "./Navbar";
import Today from "./Today";
import Footer from "./Footer";

function App() {
	return (
		<div>
			<body className="bg-gray-900 h-screen">
				<Navbar />
				<div>
					<Today />
				</div>
				<Footer />
			</body>
		</div>
	);
}

export default App;
