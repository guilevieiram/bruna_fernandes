import Nav from './components/Nav.js';
import HomePage from './components/HomePage.js';
import Experiences from './components/Experiences.js';
import Display from './components/Display.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import SocialMedia from './components/SocialMedia.js';

function App () {
	return (
		<div className="overflow-x-hidden font-body">
			<Nav />
			<SocialMedia />
			<HomePage />
			<Experiences />
			<Display />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;