import React from 'react';
import { Contact } from './Contact';
import Features from './Features';
import Header from './Header';
import Hero from './Hero';
import ModuleGrid from './ModuleGrid';

function LandingPage() {
	return (
		<div>
			<Header />
			<Hero />
			<Features />
			<ModuleGrid />
			<Contact />
		</div>
	);
}

export default LandingPage;
