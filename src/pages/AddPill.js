import { useState } from "react";
import AddForm from "../components/AddForm";

export default function AddPill() {
	const [pills, setPills] = useState([]);

	function addPill(newPill) {
		setPills((prevPills) => {
			return [...prevPills, newPill];
		});
	}
	console.log(pills);

	return (
		<div>
			<AddForm onAdd={addPill} />
		</div>
	);
}
