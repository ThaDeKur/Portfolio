import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { useHolderjs } from "holderjs";

function AboutMe() {
	return (
		<Alert variant="success">
			<Alert.Heading>Hey, nice to see you</Alert.Heading>

			<Row className="g-4">
				<Col sm={2}>
					<Image src="holder.js/195x180" rounded />
				</Col>
				<Col sm={10}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra iaculis mauris, in placerat nulla vulputate eu. Nullam ac quam iaculis, semper justo at, consequat quam. Praesent ac arcu neque. Suspendisse finibus auctor magna vitae tristique. Sed dictum mauris eget metus lobortis, vel tincidunt purus hendrerit. Proin vel diam id nisi vestibulum pharetra. Nulla facilisi. Aliquam id justo magna. Quisque in lorem ac tellus hendrerit pellentesque. Nunc eget vulputate quam,
					sed scelerisque mauris. Fusce dictum turpis vitae sapien eleifend, id congue arcu venenatis. Suspendisse convallis mi sed mauris luctus, eget rutrum leo volutpat. Sed vulputate lacinia velit, sed condimentum metus cursus sed.
				</Col>
			</Row>
			<hr />
			<p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
		</Alert>
	);
}

export default AboutMe;
