import "./PageNavbar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-scroll";
import Container from "react-bootstrap/Container";

function PageNavbar() {
	return (
		<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
			<Container>
			<Navbar.Brand><Link to="Home" spy={true} smooth={true} offset={0} duration={100} className="brand">ThaDeKur</Link></Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="me-auto"></Nav>
				<Nav>
					<Link to="Home" spy={true} smooth={true} offset={0} duration={100} className="navLink hover-navLink">Home</Link> 
					<Link to="AboutMe" spy={true} smooth={true} offset={-100} duration={100} className="navLink hover-navLink">About Me</Link> 
					<Link to="Skills" spy={true} smooth={true} offset={-100} duration={100} className="navLink hover-navLink">Skills</Link> 
					<Link to="Projects" spy={true} smooth={true} offset={-100} duration={100} className="navLink hover-navLink">Projects</Link> 
					<Link to="Contact" spy={true} smooth={true} offset={-100} duration={100} className="navLink hover-navLink">Contact</Link> 
				</Nav>
			</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default PageNavbar;
