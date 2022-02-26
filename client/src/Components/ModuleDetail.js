import React from 'react';
import { useParams } from 'react-router-dom';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

function Module() {
	const { name } = useParams();

	return (
		<Routes>
			<Route path="/module/:name" element={<ModuleDetail name={name} />} />
		</Routes>
	);
}

const ModuleDetail = ({ name }) => {
	return (
		<div>
			<h2>Hello {name}</h2>
		</div>
	);
};

export default Module;
