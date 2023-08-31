import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Projects() {
    return (
        <Section>
            <Container id="projects">
                <Row>
                    <Col md={7}>
                        <h1 style={{ paddingBottom: 15}}>
                            Welcome to the future home of the projects that I have been working on.
                            Currently, this page is a work in progress while I figure out how to add them to the site.
                            In the mean time, check out some of the other pages.
                        </h1>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}