import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
    return (
        <Section>
            <Container fluid className="home-section" id="home">
                <Row>
                    <Col md={7} className="home-header">
                        <h1 style={{ paddingBottom: 15 }} className="heading">
                            Hi There! My name is Alden Lipiarski{" "}
                            <span className="wave" role="img" aria-labelledby="wave">
                                👋🏻
                            </span>
                        </h1>

                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

export default Home;
