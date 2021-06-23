import React from "react";

export default function Dropdown({ list, addItem }) {
	return (
		<div
			id="dropdown"
			className="absolute shadow top-100 bg-gray-800 z-40 w-full"
		>
			<div className="flex flex-col w-full">
				{list.map((item, key) => {
					return (
						<div
							key={key}
							className="cursor-pointer w-full hover:bg-blue-500"
							onClick={() => addItem(item)}
						>
							<div className="flex w-full items-center p-1 pl-2 border-transparent border-l-2 relative">
								<div className="w-full items-center flex">
									<div className="mx-2 leading-6  ">{item}</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
