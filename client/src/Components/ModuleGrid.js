import React from 'react';

const ModuleGrid = () => {
	return (
		<div className="bg-gray-200 pt-10 px-5 pb-20">
			<h1 className="flex justify-center items-center text-3xl text-black font-bold pb-8">
				OUR MODULES
			</h1>
			<div className="container pt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-screen-lg">
				<div className="bg-white p-3 rounded-md shadow-lg">
					<h1 className="text-left pl-2 text-sm">Module 1</h1>
					<p className="text-lg text-left pl-2 font-bold">
						Water Resources and Accessibility
					</p>
				</div>

				<div className="bg-white p-3 rounded-md shadow-lg">
					<h1 className="text-left pl-2 text-sm">Module 2</h1>
					<p className="text-lg text-left pl-2 font-bold">
						Water Health and Safety
					</p>
				</div>

				<div className="bg-white p-3 rounded-md shadow-lg">
					<h1 className="text-left pl-2 text-sm">Module 3</h1>
					<p className="text-lg text-left pl-2 font-bold">
						Water Sustainability
					</p>
				</div>

				<div className="bg-white p-3 rounded-md shadow-lg">
					<h1 className="text-left pl-2 text-sm">Module 4</h1>
					<p className="text-lg text-left pl-2 font-bold">Sanitation</p>
				</div>

				<div className="bg-white p-3 rounded-md shadow-lg">
					<h1 className="text-left pl-2 text-sm">Module 5</h1>
					<p className="text-lg text-left pl-2 font-bold">Hand Hygiene</p>
				</div>

				<div className="bg-white p-3 rounded-md shadow-lg">
					<h1 className="text-left pl-2 text-sm">Module 6</h1>
					<p className="text-lg text-left pl-2 font-bold">
						Disinfection and other Hygiene Practices
					</p>
				</div>
			</div>
			<div className="flex justify-center flex-wrap pt-14">
				<button
					type="button"
					className="btn bg-blue-400 text-white hover:bg-gray-300 hover:text-black"
				>
					CLICK HERE TO LEARN MORE
				</button>
			</div>
		</div>
	);
};

export default ModuleGrid;
