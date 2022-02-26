import React from 'react';
import ModuleCard from '../Components/ModuleCard';
import {
	BrowserRouter as Router,
	Link,
	Route,
	Routes,
	Switch,
} from 'react-router-dom';
import ModuleDetail from '../Components/ModuleDetail';

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
			<div className="flex flex-col justify-center items-center text-h1-big text-Bebas">
				Our Modules
			</div>
			<Router>
				<div className="flex flex-col justify-evenly">
					{modules.map((module, key) => (
						<>
							<Link
								to={`/module/${module.module_name
									.toLowerCase()
									.replace(/ /g, '-')}`}
								key={module.number}
							>
								<ModuleCard module={module.number} name={module.module_name} />
							</Link>
						</>
					))}
				</div>
			</Router>
		</div>
	);
}

export default OurModules;
