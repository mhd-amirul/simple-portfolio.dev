import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Type from "../../components/TypeWriter";
import { getSystemResources } from "../../lib/sanity/sanityService";

function Home() {
    const systemResources = getSystemResources();

    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Container className="home-content">
                    <Row>
                        <Col md={7} className="home-header">
                            <h1 className="heading">
                                {systemResources.introduction}
                                {/* <span
                                    className="wave"
                                    role="img"
                                    aria-labelledby="wave">
                                    👋🏻
                                </span> */}
                            </h1>

                            <h1 className="heading-name">
                                I'M{" "}
                                <strong className="main-name">
                                    {systemResources.developer}
                                </strong>
                            </h1>

                            <div style={{ padding: 50, textAlign: "left" }}>
                                <Type arguments={systemResources.role} />
                            </div>
                        </Col>

                        <Col md={5} style={{ paddingBottom: 20 }}>
                            <img
                                src={systemResources.image}
                                alt="home pic"
                                className="img-fluid"
                                style={{ maxHeight: "450px" }}
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    );
}

export default Home;
