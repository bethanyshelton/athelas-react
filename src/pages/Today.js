import DoseCard from "../components/DoseCard";

export default function Today() {
	return (
		<div>
			<DoseCard frequency="wake-up" />
			<DoseCard frequency="breakfast" />
			<DoseCard frequency="lunch" />
			<DoseCard frequency="dinner" />
			<DoseCard frequency="bed-time" />
		</div>
	);
}
