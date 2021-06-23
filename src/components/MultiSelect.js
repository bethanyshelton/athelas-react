import React, { useState } from "react";
import Dropdown from "./Dropdown";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronDown,
	faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function MultiSelect() {
	// state showing if dropdown is open or closed
	const [dropdown, setDropdown] = useState(false);
	// managing dropdown items (list of dropdown items)
	const [items, setItems] = useState([
		"Wake Up",
		"Breakfast",
		"Morning",
		"Lunch",
		"Afternoon",
		"Dinner",
		"Evening",
		"Bedtime",
	]);
	// contains selected items
	const [selectedItems, setSelectedItems] = useState([]);

	const toogleDropdown = () => {
		setDropdown(!dropdown);
	};
	// adds new item to multiselect
	const addTag = (item) => {
		setSelectedItems(selectedItems.concat(item));
		setDropdown(false);
	};
	// removes item from multiselect
	const removeTag = (item) => {
		const filtered = selectedItems.filter((e) => e !== item);
		setSelectedItems(filtered);
	};

	return (
		<div className="autocomplete-wrapper">
			<div className="autocomplete">
				<div className="w-full flex flex-col items-center mx-auto">
					<div className="w-full">
						<div className="flex flex-col items-center relative">
							<div className="w-full">
								<div
									className="p-1 py-2 flex border-0 border-b-2 border-pink-400 bg-gray-800"
									onClick={toogleDropdown}
								>
									<input
										placeholder="When to take: (check all)"
										className="bg-gray-800 px-1 appearance-none outline-none placeholder-white"
									/>
									<div className="flex flex-auto flex-wrap">
										{selectedItems.map((tag, index) => {
											return (
												<div
													key={index}
													className="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-white border border-pink-400"
												>
													<div className="text-xs font-normal leading-none max-w-full flex-initial">
														{tag}
													</div>
													<div className="flex flex-auto flex-row-reverse">
														<div onClick={() => removeTag(tag)}>
															<FontAwesomeIcon
																icon={faTimesCircle}
																className="ml-1"
															/>
														</div>
													</div>
												</div>
											);
										})}
										<div className="flex-1"></div>
									</div>
									<div className="text-gray-300 w-8 py-1 pl-2 pr-1 flex items-center">
										<FontAwesomeIcon
											icon={faChevronDown}
											className="text-gray-500 text-sm"
										/>
									</div>
								</div>
							</div>
						</div>
						{dropdown ? (
							<Dropdown list={items} addItem={addTag}></Dropdown>
						) : null}
					</div>
				</div>
			</div>
		</div>
	);
}
