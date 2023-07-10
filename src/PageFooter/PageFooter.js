import "./PageFooter.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaLinkedin, FaGithubSquare, FaTwitterSquare, FaEnvelope, FaPhone, FaGlobe } from "react-icons/fa";
import { Link } from "react-scroll";

function PageFooter() {
	return (
		<div className="jumbotronFoot">
			<Container>
				<Row>
					<Col className="contact-info">
						<h4>Contact Me</h4>
						
							<p>
								<FaEnvelope /> Email: <a href="/#">deepakkumarthakur8010@gmail.com</a>
							</p>
						
						
							<p>
								<FaPhone /> Phone: +19 8103066875
							</p>
						
						
							<p>
								<FaGlobe /> Website: <a href="https://ThaDeKur.github.io/portfolio" target="_blank" rel="noopener noreferrer">ThaDeKur.github.io/portfolio</a>
							</p>
						
					</Col>
					<Col className="navigation-links">
						<h4>Navigation</h4>
						<p><Link to="Home" spy={true} smooth={true} offset={0} duration={100} className="navLinkFoot">
							Home
						</Link></p>
						
						<p><Link to="AboutMe" spy={true} smooth={true} offset={-100} duration={100} className="navLinkFoot">
							About Me
						</Link></p>
						
						<p><Link to="Skills" spy={true} smooth={true} offset={-100} duration={100} className="navLinkFoot">
							Skills
						</Link></p>
						
						<p><Link to="Projects" spy={true} smooth={true} offset={-100} duration={100} className="navLinkFoot">
							Projects
						</Link></p>
						
						<p><Link to="Contact" spy={true} smooth={true} offset={-100} duration={100} className="navLinkFoot">
							Contact
						</Link></p>
					</Col>
					<Col className="social-media">
						<h4>Connect with Me</h4>

						<h3><a href="https://github.com/ThaDeKur" target="_blank" rel="noopener noreferrer">
							<FaGithubSquare /><span className="lead"> GitHub</span>
						</a></h3>
						

						<h3><a href="https://www.linkedin.com/in/thadekur/" target="_blank" rel="noopener noreferrer">
							<FaLinkedin /><span className="lead"> LinkedIn</span>
						</a></h3>
						

						<h3><a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
							<FaTwitterSquare /><span className="lead"> Twitter</span>
						</a></h3>
					</Col>
				</Row>

				<Row className="copyRight">
					<p className="lead">&copy; 2023 ThaDeKur. All rights reserved.</p>
				</Row>
			</Container>
		</div>
	);
}

export default PageFooter;
