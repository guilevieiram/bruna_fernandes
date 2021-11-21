import Nav from './components/Nav.js';
import HomePage from './components/HomePage.js';
import Experiences from './components/Experiences.js';
import Dysplay from './components/Display.js';


function App() {
	return (
		<div className="overflow-x-hidden">
			<Nav />
			<HomePage />
			<Experiences />
			<Dysplay />
		</div>
	);
}

export default App;