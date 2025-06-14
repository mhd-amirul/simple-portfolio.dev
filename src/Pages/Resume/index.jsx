import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { getSystemResources } from "../../lib/sanity/sanityService";

function Resume() {
    const systemResources = getSystemResources();
    return (
        <Container fluid className="project-section">
            <Container>
                <h1 className="project-heading">
                    My <strong className="purple">Resume </strong>
                </h1>
                <p style={{ color: "white", marginBottom: "40px" }}></p>
                <Row style={{ paddingBottom: "10px" }}>
                    <Col md={12} className="project-card">
                        {/* <ProjectCard imgPath={ResumeImg} /> */}
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Resume;
