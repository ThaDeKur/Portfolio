import "./PageNavbar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function PageNavbar() {
	return (
		<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
			<Navbar.Brand href="#Home">Deepak Kumar Thakur's Portfolio</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="me-auto"></Nav>
				<Nav>
					<Nav.Link href="#Home">Home</Nav.Link>
					<Nav.Link href="#Contact">Contact Me</Nav.Link>
					<NavDropdown title="More Options" id="collasible-nav-dropdown">
						<NavDropdown.Item href="#AboutMe">About Me</NavDropdown.Item>
						<NavDropdown.Item href="#Skills">Skills</NavDropdown.Item>
						<NavDropdown.Item href="#Projects">Projects</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#Footer">Footer</NavDropdown.Item>
					</NavDropdown>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default PageNavbar;
