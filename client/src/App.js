import './App.css';
import Features from './Components/Features';
import Header from './Components/Header';
import Hero from './Components/Hero';
import ModuleGrid from './Components/ModuleGrid';
import ModuleCard from './Components/ModuleCard';
import { Contact } from './Components/Contact';

function App() {
	return (
		<div className="App">
			<Header />
			<Hero />
			<Features />
			<ModuleGrid />
			<Contact />
		</div>
	);
}

export default App;
