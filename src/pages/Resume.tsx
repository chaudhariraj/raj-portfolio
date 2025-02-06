import { Container, Row, Col, Card } from "react-bootstrap";

const Resume = () => {
  return (
    <Container id="resume" className="py-5">
      <h2 className="text-center mb-4">Resume</h2>

      <Row className="mb-4">
        <Col>
          <h3>Education</h3>
          <Card className="p-3 mb-3">
            <h5>Bachelor of Technology - Computer Science</h5>
            <p>XYZ University | 2017 - 2021</p>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h3>Experience</h3>
          <Card className="p-3 mb-3">
            <h5>Full Stack Developer</h5>
            <p>ABC Company | 2021 - Present</p>
            <ul>
              <li>Developed responsive web applications using React and TypeScript.</li>
              <li>Implemented REST APIs and integrated backend services.</li>
            </ul>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <h3>Technical Skills</h3>
          <Row>
            <Col md={4}><Card className="p-3 text-center">React</Card></Col>
            <Col md={4}><Card className="p-3 text-center">TypeScript</Card></Col>
            <Col md={4}><Card className="p-3 text-center">Bootstrap</Card></Col>
            <Col md={4}><Card className="p-3 text-center">Node.js</Card></Col>
            <Col md={4}><Card className="p-3 text-center">MongoDB</Card></Col>
            <Col md={4}><Card className="p-3 text-center">AWS</Card></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Resume;
