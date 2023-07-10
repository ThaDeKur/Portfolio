import "./PageHome.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { FaLinkedin, FaGithubSquare, FaClosedCaptioning } from "react-icons/fa";
import { Link } from "react-scroll";

function PageHome() {
	return (
		<div className="jumbotronHome">
			<Container>
				<Row xs={1} sm={2}>
					<Col sm={9}>
						<h1 className="display-4">Welcome to my portfolio!</h1>
						<h1 className="display-6">I'm Deepak Kumar Thakur</h1>
						<p className="lead">Dynamic individual seeking for a position to gain professional experience and apply it to the benefit of the organization.</p>
						<p>Please feel free to explore my portfolio to see the projects I've worked on and the skills I bring to the table. Don't hesitate to download my resume for a more detailed overview. I also invite you to connect with me on LinkedIn. If you have any questions or would like to discuss a potential opportunity, I'm just a message away. I look forward to working together and contributing to your team's success.</p>

						<p className="lead">
							<a className="btn btn-primary btn-lg" href="/#" role="button" rel="noopener noreferrer">
								Download My Resume
							</a>
							<Link to="Contact" spy={true} smooth={true} offset={-100} duration={100} className="btn btn-primary btn-lg m-2" role="button">Contact Me</Link> 
						</p>
					</Col>
					<Col sm={3}>
						<div className="imageContainer">
							<Image src="holder.js/250x250" rounded />
							
						</div>
						<div className="iconContainer">
								<h1>
									<a href="https://www.linkedin.com/in/thadekur/" target="_blank" rel="noopener noreferrer">
										<FaLinkedin />
									</a>
								</h1>
								<h1>
									<a href="https://github.com/ThaDeKur" target="_blank" rel="noopener noreferrer">
										<FaGithubSquare />
									</a>
								</h1>
								<h1>
									<a href="https://www.codechef.com/users/thadekur" target="_blank" rel="noopener noreferrer">
										<FaClosedCaptioning />
									</a>
								</h1>
							</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default PageHome;
