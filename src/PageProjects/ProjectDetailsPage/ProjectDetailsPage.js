import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MainProjects from "../ProjectDetails/MainProjectDetails.json"
import MoreProjects from "../ProjectDetails/MoreProjectDetails.json"
import "./ProjectDetailsPage.css";
import { useHolderjs } from "holderjs";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function ProjectDetailsPage() {
	const { projectId } = useParams();
	const [status, setStatus] = useState(null);
	const [project, setProject] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		const findProjectDetails = () => {
			const selectedProjectMain = MainProjects.find((project) => project.id === projectId);
			const selectedProjectMore = MoreProjects.find((project) => project.id === projectId);

			if (selectedProjectMain) {
				setProject(selectedProjectMain);	
			} else if (selectedProjectMore){
				setProject(selectedProjectMore);
			} else {
				setStatus("Project ID Not Found");
			}
		};
		findProjectDetails();
	}, [projectId]);

	const handleBackButtonClick = () => {
		navigate("/");
	};

	return (
		<div>
			<Button className="backButton" onClick={handleBackButtonClick}>
				Back
			</Button>
			<div>
				{project ? (
					<div>
						<Container>
							<Image src="holder.js/100px250" fluid />;<h1>{project.title}</h1>
							<p className="description">{project.long_description}</p>
							<div className="buttonContainer">
								{project.buttons.map((button, index) => (
									<span key={index}><Button href={button.link} target="_blank" rel="noopener noreferrer" variant={button.variant}>{button.label}</Button></span>
								))}
							</div>
						</Container>
					</div>
				) : (
					<>{status ? <div>{status}</div> : <div>Loadding</div>}</>
				)}
			</div>
		</div>
	);
}

export default ProjectDetailsPage;
