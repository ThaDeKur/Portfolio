import { useRef } from "react";
import { useState } from "react";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import emailjs from "@emailjs/browser";
import Modal from "react-bootstrap/Modal";

function PageContact() {
	const [email, setEmail] = useState("");
	const [error, setError] = useState("Enter a valid Gmail ID");

	const [isValidEmail, setIsValidEmail] = useState(false);

	const [validated, setValidated] = useState(false);
	const form = useRef();

	const [showSuccess, setShowSuccess] = useState(false);
	const [showNotSuccess, setShowNotSuccess] = useState(false);
	const [showInvalidEntry, setShowInvalidEntry] = useState(false);

	const handleClose = () => {
		setShowSuccess(false);
		setShowNotSuccess(false);
		setShowInvalidEntry(false);
	};
	const handleShowSuccess = () => setShowSuccess(true);
	const handleShowNotSuccess = () => setShowNotSuccess(true);
	const handleShowInvalidEntry = () => setShowInvalidEntry(true);

	function checkEmail(email) {
		return /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);
	}

	const handleEmailChange = (event) => {
		if (!checkEmail(event.target.value)) {
			setError("Please! enter a valide Gmail ID only");
			setIsValidEmail(false);
		} else {
			setError(null);
			setIsValidEmail(true);
			event.target.isInvalid = false;
		}
		setEmail(event.target.value);
	};

	const handleChange = (event) => {
		setValidated(true);
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
			return false;
		} else {
			return true;
		}
	};

	const sendEmail = (e) => {
		e.preventDefault();

		if (handleChange(e) && isValidEmail === true) {
			emailjs.sendForm("service_0d5si34", "template_eyjegdv", form.current, "R-IUgkld-7Z7dhCTB").then(
				(result) => {
					console.log(result.text);
					handleShowSuccess();
					setEmail("");
					e.target.reset();
					setValidated(false);
				},
				(error) => {
					console.log(error.text);
					handleShowNotSuccess();
				}
			);
		} else {
			console.log("No");
			handleShowInvalidEntry();
		}
	};

	return (
		<>
			<Modal show={showSuccess} onHide={handleClose} backdrop="static" keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>Mail Sent Succesfully</Modal.Title>
				</Modal.Header>
				<Modal.Body>I will not close if you click outside me. Don not even try to press escape key.</Modal.Body>
				<Modal.Footer>
					<Button variant="success" onClick={handleClose}>
						Ok
					</Button>
				</Modal.Footer>
			</Modal>

			<Modal show={showNotSuccess} onHide={handleClose} backdrop="static" keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>Mail NOT Sent Succesfully</Modal.Title>
				</Modal.Header>
				<Modal.Body>I will not close if you click outside me. Don not even try to press escape key.</Modal.Body>
				<Modal.Footer>
					<Button variant="danger" onClick={handleClose}>
						Ok
					</Button>
				</Modal.Footer>
			</Modal>

			<Modal show={showInvalidEntry} onHide={handleClose} backdrop="static" keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>Invalid Entry</Modal.Title>
				</Modal.Header>
				<Modal.Body>I will not close if you click outside me. Don not even try to press escape key.</Modal.Body>
				<Modal.Footer>
					<Button variant="warning" onClick={handleClose}>
						Ok
					</Button>
				</Modal.Footer>
			</Modal>

			<Form ref={form} noValidate validated={validated} onChange={handleChange} onSubmit={sendEmail}>
				<Row className="mb-3">
					<Form.Group as={Col} md="6" controlId="Form.ControlInput1">
						<Form.Label>Name</Form.Label>
						<Form.Control required name="name" type="text" placeholder="Enter Your Name" autoComplete="on"/>
						<Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
						<Form.Control.Feedback type="invalid">Please provide Your Name.</Form.Control.Feedback>
					</Form.Group>
					<Form.Group as={Col} md="6" controlId="Form.ControlInput2">
						<Form.Label>Email address</Form.Label>
						<InputGroup hasValidation>
							<InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
							<Form.Control required name="email" value={email} onChange={handleEmailChange} isInvalid={true} type="email" placeholder="name@gmail.com" autoComplete="on"/>
							<Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
						</InputGroup>
					</Form.Group>
				</Row>
				<Form.Group className="mb-3" controlId="Form.ControlInput3">
					<Form.Label>Subject</Form.Label>
					<Form.Control required name="subject" size="lg" type="text" placeholder="Enter Subject" autoComplete="on"/>
					<Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
					<Form.Control.Feedback type="invalid">Please provide the Subject.</Form.Control.Feedback>
				</Form.Group>
				<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
					<Form.Label>Mail Body</Form.Label>
					<Form.Control required name="message" as="textarea" rows={3} autoComplete="on"/>
					<Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
					<Form.Control.Feedback type="invalid">Please provide a Body.</Form.Control.Feedback>
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</>
	);
}

export default PageContact;
