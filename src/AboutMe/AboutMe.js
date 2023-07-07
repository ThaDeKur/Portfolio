import "./AboutMe.css"
import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { useHolderjs } from "holderjs";

function AboutMe() {
	return (
		<Alert variant="success">
			<Alert.Heading>Greetings! I'm Deepak Kumar Thakur,</Alert.Heading>

			<Row>
				<Col sm={2}>
					<Image src="holder.js/195x175" rounded />
				</Col>
				<Col sm={10} className="aboutMeBody">
					<p>
						<span className="display-6">A</span> recent graduate in Electronics and Telecommunications Engineering with a passion for software development and web technologies. Throughout my academic journey, I developed a strong foundation in coding principles, algorithms, and data structures. Driven by a fascination for software engineering, I delved into front-end and back-end web development during my spare time. I quickly found myself captivated by the process of bringing ideas
						to life through clean and efficient code. I have experience working with HTML, CSS, JavaScript, and have built projects using popular library like React.js. During my degree, I actively sought opportunities to expand my knowledge and skills. I engaged in internships and collaborative projects that allowed me to apply my technical expertise in real-world scenarios. These experiences provided valuable insights into agile development methodologies, teamwork, and
						problem-solving. I possess a strong analytical mindset and a knack for understanding complex systems. I am continuously motivated to learn and embrace new technologies, staying up to date with industry trends. The prospect of creating intuitive user experiences and contributing to the development of innovative software solutions excites me.
					</p>
				</Col>
			</Row>
			<hr />
			<p className="mb-0">As I embark on my professional journey, I am eager to join a team where I can contribute my skills and work collaboratively on challenging projects. If you're seeking a dedicated software engineer or web developer with a solid technical foundation and a thirst for continuous growth, I would be delighted to connect with you.</p>
		</Alert>
	);
}

export default AboutMe;
