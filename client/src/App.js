import './App.css';
import OurModules from './Pages/OurModules';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/module" element={<OurModules />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
