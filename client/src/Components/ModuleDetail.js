import React from 'react';
import { useParams } from 'react-router-dom';

const ModuleDetail = () => {
	const { name } = useParams();

	console.log(name);

	return (
		<div>
			<h2>Hello {name} </h2>
		</div>
	);
};

export default ModuleDetail;
