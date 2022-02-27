import React from 'react';
import ModuleCard from './ModuleCard';
import { Link, Route, Routes, Switch } from 'react-router-dom';
import Header from './Header';

function OurModules() {
	const modules = [
		{
			number: '1',
			module_name: 'Water Resources and Accessibility',
		},
		{
			number: '2',
			module_name: 'Water Health and Safety',
		},
		{
			number: '3',
			module_name: 'Water Sustainability',
		},
		{
			number: '4',
			module_name: 'Sanitation',
		},
		{
			number: '5',
			module_name: 'Hand Hygiene',
		},
		{
			number: '6',
			module_name: 'Disinfection and Other Hygienic Practices',
		},
	];

	return (
		<div>
			<Header />
			<div
				styles={{ fontSize: '48px' }}
				className="flex flex-col justify-center items-center font-Bebas"
			>
				Our Modules
			</div>
			<div className="flex flex-col justify-evenly">
				{modules.map((module, i) => (
					<>
						<Link
							to={`/modules/${module.number}/${module.module_name
								.toLowerCase()
								.replace(/ /g, '-')}`}
						>
							<ModuleCard
								key={i}
								module={module.number}
								name={module.module_name}
							/>
						</Link>
					</>
				))}
			</div>
		</div>
	);
}

export default OurModules;
