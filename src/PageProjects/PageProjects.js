import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion";
import MainProjects from "./ProjectDetails/MainProjectDetails.json";
import MoreProjects from "./ProjectDetails/MoreProjectDetails.json";
import { useNavigate } from "react-router-dom";
import { useHolderjs } from "holderjs";

function PageProjects() {
	let navi = useNavigate();

	function redirect(id) {
		navi("/portfolio/project/" + id);
	}

	return (
		<>
			<Row xs={1} sm={2} md={2} className="g-4">
				{MainProjects.map((project, index) => (
					<Col key={index}>
						<Card key={index}>
							<Card.Img variant="top" src={project.image} alt={project.title} />
							<Card.Body>
								<Card.Title>{project.title}</Card.Title>
								<Card.Text>{project.description}</Card.Text>
								<Button variant="primary" id={project.id} onClick={(e) => redirect(e.target.id)}>
									View Project
								</Button>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
			<hr />
			<Accordion>
				<Accordion.Item eventKey="0">
					<Accordion.Header>More Projects</Accordion.Header>
					<Accordion.Body>
						<Row xs={1} sm={2} md={3} className="g-4">
							{MoreProjects.map((project, index) => (
								<Col key={index}>
									<Card key={index}>
										<Card.Img variant="top" src={project.image} alt={project.title} />
										<Card.Body>
											<Card.Title>{project.title}</Card.Title>
											<Card.Text>{project.description}</Card.Text>
											<Button variant="primary" id={project.id} onClick={(e) => redirect(e.target.id)}>
												View Project
											</Button>
										</Card.Body>
									</Card>
								</Col>
							))}
						</Row>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</>
	);
}

export default PageProjects;
