import React, { useEffect } from 'react';
import ModuleCard from './ModuleCard';
import { Link } from 'react-router-dom';
import Header from './Header';
import Image1 from '../Images/water-resources.jpg';
import Image2 from '../Images/water-health-safety.jpg';
import Image3 from '../Images/sustainability.jpg';
import Image4 from '../Images/sanitation.jpg';
import Image5 from '../Images/hygienic-practices.jpg';
import Image6 from '../Images/disinfection.jpg';

function OurModules() {
	useEffect(() => {
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	}, []);

	const modules = [
		{
			number: '1',
			module_name: 'Water Resources and Accessibility',
			img: Image1,
		},
		{
			number: '2',
			module_name: 'Water Health and Safety',
			img: Image2,
		},
		{
			number: '3',
			module_name: 'Water Sustainability',
			img: Image3,
		},
		{
			number: '4',
			module_name: 'Sanitation',
			img: Image4,
		},
		{
			number: '5',
			module_name: 'Hand Hygiene',
			img: Image5,
		},
		{
			number: '6',
			module_name: 'Disinfection and Other Hygienic Practices',
			img: Image6,
		},
	];

	return (
		<div>
			<Header />
			<div
				style={{ fontSize: '48px' }}
				className="flex flex-col justify-center items-center font-Bebas"
			>
				<h2>Our Modules</h2>
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
								img={module.img}
							/>
						</Link>
					</>
				))}
			</div>
		</div>
	);
}

export default OurModules;
