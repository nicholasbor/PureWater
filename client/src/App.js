import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import OurModules from './Components/OurModules';
import ModuleDetail from './Components/ModuleDetail';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/modules" element={<OurModules />} />
				<Route path="/modules/:id/:name" element={<ModuleDetail />} />
			</Routes>
		</Router>
	);
}

export default App;
