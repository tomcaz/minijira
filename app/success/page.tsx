import React from "react"
import { Card, Col, Container, Row } from "react-bootstrap"

const Success = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Card>
                            Support created successfully.
                        </Card>
                    </Col>
                </Row>
            </Container >
        </>
    )
}

export default Success