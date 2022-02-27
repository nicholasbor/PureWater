import React from 'react';
import { Link } from 'react-router-dom';

const ModuleGrid = () => {
	return (
		<div className="bg-gray-200 pt-10 px-5 pb-20">
			<h1
				style={{ fontSize: '45px' }}
				className="flex justify-center items-center font-Bebas text-black font-bold pb-8"
			>
				OUR MODULES
			</h1>
			<div className="container pt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-screen-lg">
				<Link to="/modules/1/water-resources-and-accessibility">
					<div className="bg-white p-3 rounded-md shadow-lg ease-out duration-300 hover:scale-105 hover:ease-in hover:duration-300">
						<h1 className="text-left pl-2 text-sm">Module 1</h1>
						<p className="text-lg text-left pl-2 font-bold">
							Water Resources and Accessibility
						</p>
					</div>
				</Link>

				<Link to="/modules/2/water-health-and-safety">
					<div className="bg-white p-3 rounded-md shadow-lg ease-out duration-300 hover:scale-105 hover:ease-in hover:duration-300">
						<h1 className="text-left pl-2 text-sm">Module 2</h1>
						<p className="text-lg text-left pl-2 font-bold">
							Water Health and Safety
						</p>
					</div>
				</Link>

				<Link to="/modules/3/water-sustainability">
					<div className="bg-white p-3 rounded-md shadow-lg ease-out duration-300 hover:scale-105 hover:ease-in hover:duration-300">
						<h1 className="text-left pl-2 text-sm">Module 3</h1>
						<p className="text-lg text-left pl-2 font-bold">
							Water Sustainability
						</p>
					</div>
				</Link>

				<Link to="/modules/4/sanitation">
					<div className="bg-white p-3 rounded-md shadow-lg ease-out duration-300 hover:scale-105 hover:ease-in hover:duration-300">
						<h1 className="text-left pl-2 text-sm">Module 4</h1>
						<p className="text-lg text-left pl-2 font-bold">Sanitation</p>
					</div>
				</Link>

				<Link to="/modules/5/hand-hygiene">
					<div className="bg-white p-3 rounded-md shadow-lg ease-out duration-300 hover:scale-105 hover:ease-in hover:duration-300">
						<h1 className="text-left pl-2 text-sm">Module 5</h1>
						<p className="text-lg text-left pl-2 font-bold">Hand Hygiene</p>
					</div>
				</Link>

				<Link to="/modules/6/disinfection-and-other-hygienic-practices">
					<div className="bg-white p-3 rounded-md shadow-lg ease-out duration-300 hover:scale-105 hover:ease-in hover:duration-300">
						<h1 className="text-left pl-2 text-sm">Module 6</h1>
						<p className="text-lg text-left pl-2 font-bold">
							Disinfection and Hygiene Practices
						</p>
					</div>
				</Link>
			</div>
			<div className="flex justify-center flex-wrap pt-14">
				<Link to="/modules">
<<<<<<< HEAD
					<button type="button" className="animate-float px-10 py-3 text-xl uppercase mt-10 rounded-lg text-white bg-blue-400 hover:duration-300 hover:bg-sky-700 shadow-sm hover:shadow-lg hover:text-white">
=======
					<button
						type="button"
						className="animate-float bg-blue-400 px-10 py-3 text-xl uppercase mt-10 rounded-lg text-white"
					>
>>>>>>> 14d04277d1a2bb3ace27a3d92902b5c9f2f9b342
						CLICK HERE TO LEARN MORE
					</button>
				</Link>
			</div>
		</div>
	);
};

export default ModuleGrid;
