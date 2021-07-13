import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Today from "./pages/Today";
import AddPill from "./pages/AddPill";

export default function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path="/" exact component={Today} />
				<Route path="/add-pill" component={AddPill} />
			</Switch>
			<Footer />
		</Router>
	);
}
