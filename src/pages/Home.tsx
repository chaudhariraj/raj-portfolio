import { motion } from "framer-motion";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import profileImg from "../assets/profile.jpg"; 

const roles = ["Developer", "Youtuber", "Freelancer"];

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000); // Change text every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <Container id="home" className="vh-100 d-flex align-items-center">
      <Row className="w-100 d-flex align-items-center justify-content-center">
        {/* Left Section - Profile Image with Double L-Shaped Border */}
        <Col md={6} className="text-center">
          <div className="profile-container">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="profile-border"
            />
            <Image src={profileImg} alt="Profile" className="profile-img" />
          </div>
        </Col>

        {/* Right Section - Animated Text */}
        <Col md={6} className="text-center text-md-start">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title"
          >
          <span className="highlight-text-background">Hi, I'm </span>
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="hero-name"
          >
            Raj Chaudhari
          </motion.h1>
          {/* Animated Role Text */}
          <motion.h2
            key={roleIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="role-text"
          >
            {roles[roleIndex]}
          </motion.h2>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="hero-description"
          >
            Passionate about crafting amazing web experiences. Specializing in React, TypeScript, and UI/UX.
          </motion.p>
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Button variant="primary" className="me-3" size="lg">
              Donwload CV
            </Button>
            <Button variant="outline-info" size="lg">
              Contact Me
            </Button>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
