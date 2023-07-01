import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion";
import { useHolderjs } from "holderjs";

function PageProjects() {
	return (
		<>
			<Row xs={1} sm={2} md={2} className="g-4">
				<Col key={1}>
					<Card>
						<Card.Img variant="top" src="holder.js/100px160" />
						<Card.Body>
							<Card.Title>Card title</Card.Title>
							<Card.Text>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>

				<Col key={2}>
					<Card>
						<Card.Img variant="top" src="holder.js/100px160" />
						<Card.Body>
							<Card.Title>Card title</Card.Title>
							<Card.Text>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>

				<Col key={3}>
					<Card>
						<Card.Img variant="top" src="holder.js/100px160" />
						<Card.Body>
							<Card.Title>Card title</Card.Title>
							<Card.Text>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>

				<Col key={4}>
					<Card>
						<Card.Img variant="top" src="holder.js/100px160" />
						<Card.Body>
							<Card.Title>Card title</Card.Title>
							<Card.Text>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
            <Accordion>
					<Accordion.Item eventKey="0">
						<Accordion.Header>Accordion Item #1</Accordion.Header>
						<Accordion.Body>
							<Row xs={1} sm={2} md={3} className="g-4">
								<Col key={1}>
									<Card>
										<Card.Img variant="top" src="holder.js/100px160" />
										<Card.Body>
											<Card.Title>Card title</Card.Title>
											<Card.Text>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
											<Button variant="primary">Go somewhere</Button>
										</Card.Body>
									</Card>
								</Col>

								<Col key={2}>
									<Card>
										<Card.Img variant="top" src="holder.js/100px160" />
										<Card.Body>
											<Card.Title>Card title</Card.Title>
											<Card.Text>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
											<Button variant="primary">Go somewhere</Button>
										</Card.Body>
									</Card>
								</Col>
								<Col key={3}>
									<Card>
										<Card.Img variant="top" src="holder.js/100px160" />
										<Card.Body>
											<Card.Title>Card title</Card.Title>
											<Card.Text>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
											<Button variant="primary">Go somewhere</Button>
										</Card.Body>
									</Card>
								</Col>
							</Row>
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
		</>
	);
}

export default PageProjects;
