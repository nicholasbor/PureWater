import React from 'react';

function ModuleCard() {
	return (
		<div className="w-4/5 border-solid border-slate-400 border-2 shadow-md flex m-auto justify-center">
			<div>
				<img src="https://picsum.photos/200/300" alt="img" />
			</div>
			<div>
				<h3>Module 1</h3>
				<h2>Water Resources and Accesibility</h2>
			</div>
			<div>
				<h2>Learning outcomes</h2>
				<ul>
					<li>Lorem Ipsum</li>
					<li>Lorem Ipsum</li>
					<li>Lorem Ipsum</li>
				</ul>
				<ul>
					<li>Lorem Ipsum</li>
					<li>Lorem Ipsum</li>
					<li>Lorem Ipsum</li>
				</ul>
			</div>
			<div>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged.
				</p>
			</div>
			<div>
				<h3>Complete</h3>
				<div className="w-5 h-5 bg-black rounded-xl"></div>
			</div>
		</div>
	);
}

export default ModuleCard;
