import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Today from "./pages/Today";
import AddPill from "./pages/AddPill";

function App() {
	return (
		<Router>
			<body className="min-h-screen bg-gray-800">
				<Navbar />
				<Switch>
					<Route path="/" exact component={Today} />
					<Route path="/add-pill" component={AddPill} />
				</Switch>
				<Footer />
			</body>
		</Router>
	);
}

export default App;
