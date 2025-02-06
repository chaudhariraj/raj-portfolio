import { useState } from "react";
import { Container, Card, Row, Col, Modal, Button } from "react-bootstrap";
import { projects, Project } from "../utiles/projectsData";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);

  const handleShow = (project: Project) => {
    setCurrentProject(project);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <Container id="projects" className="py-5">
      <h2 className="text-center mb-4">Projects</h2>
      <Row>
        {projects.map((project) => (
          <Col md={6} key={project.id} className="mb-4">
            <Card onClick={() => handleShow(project)} className="project-card">
              <Card.Img variant="top" src={project.img} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal for Project Details */}
      <Modal show={showModal} onHide={handleClose} centered size="lg">
        {currentProject && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{currentProject.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h5>Role:</h5>
              <p>{currentProject.role}</p>
              <h5>Duration:</h5>
              <p>{currentProject.duration}</p>
              <h5>Location:</h5>
              <p>{currentProject.location}</p>
              <h5>Responsibilities:</h5>
              <pre>{currentProject.details}</pre>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </Container>
  );
};

export default Projects;
