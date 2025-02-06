import { Container, Row, Col, Card, ProgressBar, Button } from "react-bootstrap";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Container id="about" className="py-5">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-4"
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-5"
      >
        I am a passionate web developer with expertise in React, TypeScript, and Bootstrap, focusing on building scalable and user-friendly applications.
      </motion.p>

      {/* Experience and Education Cards - Centered */}
      <Row className="justify-content-center mb-5">
        {/* Experience Card */}
        <Col xs={12} md={6} className="mb-4">
          <Card className="transparent-card shadow-lg border-radius-lg">
            <Card.Body className="text-center">
              <FaBriefcase size={40} className="text-primary mb-3" />
              <Card.Title>Experience</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">2+ years as Frontend Developer</Card.Subtitle>
              <Card.Text>
                I have worked with React, React Native, and modern web technologies to build fast and responsive applications.
              </Card.Text>
              <Button variant="primary" size="sm">View Experience</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Education Card */}
        <Col xs={12} md={6} className="mb-4">
          <Card className="transparent-card shadow-lg border-radius-lg">
            <Card.Body className="text-center">
              <FaGraduationCap size={40} className="text-warning mb-3" />
              <Card.Title>Education</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">BE in Computer Science</Card.Subtitle>
              <Card.Text>
                Graduated with a degree in Computer Science Engineering, specializing in software development, algorithms, and system design.
              </Card.Text>
              <Button variant="outline-primary" size="sm">View Education</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Skills Progress */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h5 className="">Skills</h5>
        <Row className="mb-4">
          <Col xs={12}  className="mb-3">
            <ProgressBar now={90} label="React (90%)" className="mb-2" />
            <ProgressBar now={80} label="React Native (80%)" className="mb-2" />
            <ProgressBar now={85} label="Node.js (85%)" className="mb-2" />
          </Col>
          <Col xs={12}  className="mb-3">
            <ProgressBar now={75} label="Python (75%)" className="mb-2" />
            <ProgressBar now={90} label="HTML (90%)" className="mb-2" />
            <ProgressBar now={85} label="CSS (85%)" className="mb-2" />
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
};

export default About;
