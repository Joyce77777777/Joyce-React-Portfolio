import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../style/Resume.css";

function Resume() {
  return (
    <section id="resume" className="resume-margin">
      <Container className="resume-section">
        <Row>
          <Col className="text-center">
            <h1>Resume</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <hr className="star-secondary" />
            <h3>Professional Summary</h3>
            <div className="resume-item">
              <p>
                Experienced in public accounting and internal audit, Joyce Zhou brings a strong financial professional background, rich experience in multi-tasking within team settings, and excellent internal and external communication skills.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <hr className="star-secondary" />
            <h3>Full Stack Development Skills</h3>
            <ul className="list-inline">
              <li className="list-inline-item"><strong>Languages:</strong> HTML, CSS, JavaScript, Node.js</li>
              <li className="list-inline-item"><strong>Libraries & Frameworks:</strong> React, Express.js, jQuery</li>
              <li className="list-inline-item"><strong>Databases:</strong> MySQL</li>
              <li className="list-inline-item"><strong>DevOps & Tools:</strong> Git, GitHub, VS Code</li>
              <li className="list-inline-item"><strong>Operating Systems:</strong> Windows, macOS</li>
              <li className="list-inline-item"><strong>Skills:</strong> QuickBooks, Sage, Microsoft Excel</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <hr className="star-secondary" />
            <h3>Education</h3>
            
          </Col>
        </Row>
        <Row>
          <Col>
            <hr className="star-secondary" />
            <h3>Professional Experience</h3>
            
          </Col>
        </Row>
      </Container>
    </section>
  );
}

// Export Resume
export default Resume;
