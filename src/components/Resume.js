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
            <div className="resume-item">
              <h4>Master of Banking and Finance</h4>
              <h5>Queen Mary University of London | London, UK | November 2016</h5>
            </div>
            <div className="resume-item">
              <h4>Bachelor of Finance, Accounting and Management</h4>
              <h5>Ningbo Nottingham University | Ningbo, Zhejiang | July 2015</h5>
            </div>
            <div className="resume-item">
              <h4>College Diploma: Accounting</h4>
              <h5>St. Lawrence College | Toronto, Ontario | October 2020</h5>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <hr className="star-secondary" />
            <h3>Professional Experience</h3>
            <div className="resume-item">
              <h4>Accounting Supervisor</h4>
              <h5>GreySuits Advisors Inc. | Toronto, Ontario | January 2021 - February 2024</h5>
              <ul>
                <li>Managed accounts receivable and payable, financial reporting, and assisted with client audits.</li>
                <li>Prepared financial reports including balance sheets, income statements, and cash flow statements.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Risk Control Department Trainee</h4>
              <h5>HNA Group Co., Ltd. | Haikou, Hainan | July 2017 - July 2018</h5>
              <ul>
                <li>Conducted internal audits of fund projects, and managed departmental reports on investment risks.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Audit Assistant (Intern)</h4>
              <h5>Beihai Accounting Firm | Yantai, Shandong | June 2014 - July 2014</h5>
              <ul>
                <li>Collected and analyzed financial data for audit purposes.</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

// Export Resume
export default Resume;
