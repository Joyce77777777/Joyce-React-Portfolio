import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import headshot from "../images/Portfolio_Headshot.jpg";
import "../style/About.css";

function About() {
  return (
    // About section
    <section id="about" className="py-5">
      <h1 className="about-heading">About Me</h1>
      <Container>
        <Row>
          <Col
            xs={12}
            md={4}
            className="d-flex justify-content-center align-items-center mb-4 mb-md-0"
          >
            <Image src={headshot} rounded fluid className="about-image" />
          </Col>
          <Col xs={12} md={8}>
            <Card>
              <Card.Body>
                <Card.Title className="text-center mb-4">
                  Hello, I'm Joyce Zhou
                </Card.Title>
                <Card.Text>
                  I am a finance professional whose career spans across public accounting, financial management, and risk control. With an educational foundation in financial accounting and management from prestigious institutions, my expertise extends from internal audits to sophisticated financial analyses.
                </Card.Text>
                <Card.Text>
                  My education at University was crucial, but diving into a Full Stack Developer Coding Bootcamp also refined my technical acumen, equipping me with skills in Quickbooks, Sage, Excel, and several programming languages which enhance my data-driven approach to financial management.
                </Card.Text>
                <Card.Text>
                  Beyond number crunching, my experiences in various accounting and finance roles have ingrained a deep understanding of regulatory compliances, risk assessment, and strategic planning. My philosophy is centered around precision and ethics, ensuring accuracy and integrity in all financial records and reports.
                </Card.Text>
                <Card.Text>
                  My career has not only been about managing numbers but also about crafting clear financial narratives that aid decision-making and support business objectives. I am ready to bring my analytical prowess and meticulous attention to detail to your team, helping to drive financial stability and growth.
                </Card.Text>
                <Card.Text>
                  Let's collaborate to advance our financial strategies, where my blend of analytical and technical skills will contribute to robust and innovative solutions. I am committed to excellence and eager to contribute to your organization's success.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

// Export About
export default About;
