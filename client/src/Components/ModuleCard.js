import React from 'react';

function ModuleCard({ module, name, img }) {
	console.log(img);

	return (
		<div className="w-4/5 border-solid border-slate-400 border-1 shadow-md flex m-auto justify-center leading-loose my-12 ease-out duration-300 hover:scale-105 hover:ease-in hover:duration-300 cursor-pointer">
			<div>
				<img style={{ width: '40vw', height: '40vh' }} src={img} alt="img" />
			</div>
			<div className="flex flex-col">
				<div className="text-left mb-4 ml-8 mt-10">
					<h3 className="text-gray-500 mb-2">Module {module}</h3>
					<p className="font-bold font-Roboto text-2xl w-96">{name}</p>
				</div>
				<h2 className="text-left mb-4 ml-8 mt-8 font-medium">
					Learning outcomes
				</h2>
				<div className="flex mb-4 ml-12 mt-2">
					<ul className="list-disc mr-20">
						<li>Lorem Ipsum</li>
						<li>Lorem Ipsum</li>
						<li>Lorem Ipsum</li>
					</ul>
					<ul className="list-disc">
						<li>Lorem Ipsum</li>
						<li>Lorem Ipsum</li>
						<li>Lorem Ipsum</li>
					</ul>
				</div>
			</div>

			<div className="w-2/5 flex justify-center items-center text-left mx-6">
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged.
				</p>
			</div>
			<div className="flex flex-col justify-center items-center p-12">
				<h3 className="font-bold text-lg my-6">Complete</h3>
				<div className="w-12 h-12 bg-sky-500 rounded-full"></div>
			</div>
		</div>
	);
}

export default ModuleCard;
