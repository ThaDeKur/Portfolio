import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useHolderjs } from "holderjs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaCopyright, FaJava, FaPython, FaDatabase, FaGit, FaGithub } from "react-icons/fa";
import { FaHtml5, FaCss3, FaJsSquare, FaBootstrap, FaReact, FaPhp } from "react-icons/fa";
import { FaUser, FaUsers, FaBusinessTime, FaScrewdriver, FaHandshake, FaChartArea } from "react-icons/fa";
import "./PageSkills.css"

function PageSkills() {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex) => {
		setIndex(selectedIndex);
	};

	return (
		<Carousel activeIndex={index} onSelect={handleSelect} >
			<Carousel.Item >
				<img className="d-block w-100" src="holder.js/800x400?text= &bg=373940" alt="First slide" />
				<Carousel.Caption className="sliderCaption">
					<h2>Software Development Skills</h2>
					<Row>
						<Col className="lead">
							<p>
								<span>
									<FaCopyright />
								</span>{" "}
								C/Embedded C 
							</p>
							<p>
								<span>
									<FaJava />
								</span>{" "}
								Java
							</p>
							<p>
								<span>
									<FaPython />
								</span>{" "}
								Python
							</p>
							<p>
								<span>
									<FaDatabase />
								</span>{" "}
								MySQL
							</p>
							<p>
								<span>
									<FaGit />
								</span>{" "}
								Git
							</p>
							<p>
								<span>
									<FaGithub />
								</span>{" "}
								GitHub
							</p>
						</Col>
					</Row>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src="holder.js/800x400?text= &bg=282c34" alt="Second slide" />

				<Carousel.Caption className="sliderCaption">
					<h2>Web Development Skills</h2>
					<Row>
						<Col className="lead">
							<p>
								<span>
									<FaHtml5 />
								</span>{" "}
								HTML 5
							</p>
							<p>
								<span>
									<FaCss3 />
								</span>{" "}
								CSS 3
							</p>
							<p>
								<span>
									<FaJsSquare/>
								</span>{" "}
								JavaScript
							</p>
							<p>
								<span>
									<FaBootstrap />
								</span>{" "}
								Bootstrap
							</p>
							<p>
								<span>
									<FaPhp />
								</span>{" "}
								PhP
							</p>
							<p>
								<span>
									<FaReact />
								</span>{" "}
								React.js
							</p>
						</Col>
					</Row>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src="holder.js/800x400?text= &bg=20232a" alt="Third slide" />

				<Carousel.Caption className="sliderCaption">
					<h2>Soft Skills</h2>
					<Row>
						<Col className="lead">
							<p>
								<span>
									<FaHandshake />
								</span>{" "}
								Communication
							</p>
							<p>
								<span>
									<FaUsers />
								</span>{" "}
								Teamwork
							</p>
							<p>
								<span>
									<FaScrewdriver />
								</span>{" "}
								Problem-solving
							</p>
							<p>
								<span>
									<FaChartArea />
								</span>{" "}
								Adaptability
							</p>
							<p>
								<span>
									<FaUser />
								</span>{" "}
								Leadership
							</p>
							<p>
								<span>
									<FaBusinessTime />
								</span>{" "}
								Time Management
							</p>
						</Col>
					</Row>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default PageSkills;
