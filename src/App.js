import "./App.css";
import Container from "react-bootstrap/Container";

import PageFooter from "./PageFooter/PageFooter";
import PageContact from "./PageContact/PageContact";
import PageProjects from "./PageProjects/PageProjects";
import PageSkills from "./PageSkills/PageSkills";
import AboutMe from "./AboutMe/AboutMe";
import PageHome from "./Home/PageHome";
import PageNavbar from "./Navbar/PageNavbar";

function App() {
	return (
		<div>
			{PageNavbar()}
			<div id="Home">{PageHome()}</div>
			<Container>
				<h2 id="AboutMe">About Me</h2>
				<div className="aboutMe">{AboutMe()}</div>
				<h2 id="Skills">Skills</h2>
			</Container>
				<div  className="skills">{PageSkills()}</div>
			<Container>
				<h2 id="Projects">Projects</h2>
				<div className="projects">{PageProjects()}</div>
				<h2 id="Contact">Contact</h2>
				<div className="contact">{PageContact()}</div>
			</Container>
			<div id="Footer">{PageFooter()}</div>
			
		</div>
	);
}

export default App;
