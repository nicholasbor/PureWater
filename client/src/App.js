import './App.css';
import Features from './Components/Features';
import Header from './Components/Header';
import Hero from './Components/Hero';
import ModuleGrid from './Components/ModuleGrid';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <ModuleGrid />
    </div>
  );
}

export default App;