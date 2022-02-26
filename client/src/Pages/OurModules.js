import React from 'react';
import ModuleCard from '../Components/ModuleCard';

const modules = [
	{
		module: '1',
		module_name: 'Water Resources and Accessibility',
	},
	{
		module: '2',
		module_name: 'Water Health and Safety',
	},
	{
		module: '3',
		module_name: 'Water Sustainability',
	},
	{
		module: '4',
		module_name: 'Sanitation',
	},
	{
		module: '5',
		module_name: 'Hand Hygiene',
	},
	{
		module: '6',
		module_name: 'Disinfection and Other Hygienic Practices',
	},
];

function OurModules({ modules }) {
	console.log(modules);

	return (
		<div>
			<div className="flex flex-col justify-center items-center text-h1-big text-Bebas">
				Our Modules
			</div>
			<div className="flex flex-col justify-evenly">
				<ModuleCard module={1} name={'Water Resources and Accessibility'} />
				<ModuleCard module={2} name={'Water Health and Safety'} />
				<ModuleCard module={3} name={'Water Sustainability'} />
				<ModuleCard module={4} name={'Sanitation'} />
				<ModuleCard module={5} name={'Hand Hygiene'} />
				<ModuleCard
					module={6}
					name={'Disinfection and Other Hygienic Practices'}
				/>
			</div>
		</div>
	);
}

export default OurModules;
