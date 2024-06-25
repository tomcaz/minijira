'use client'
import { clearLastId, selectLastId, selectSupport } from "@/lib/features/support/supportSlice"
import { useAppSelector } from "@/lib/hooks"
import React, { useEffect, useState } from "react"
import { Alert, Card, Col, Container, Row } from "react-bootstrap"
import '../components/support/support.css'
import { useDispatch } from "react-redux"
const Success = () => {

    const supports = useAppSelector(selectSupport)
    const lastId = useAppSelector(selectLastId)
    const [item, setItem] = useState<SupportType>()
    const dispatch = useDispatch()
    useEffect(() => {
        if (lastId && lastId !== undefined) {
            setItem(supports.filter(i => i.id === lastId)[0])
            dispatch(clearLastId())
        }
    }, [lastId])
    return (
        <>
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Card>
                            <Alert>
                                Support created successfully.
                            </Alert>
                            {item &&
                                <Row>
                                    <Col>
                                        <div className='embendded'>
                                            <Row>
                                                <Col>
                                                    <h4 style={{ textAlign: 'center' }}>{item.fullName}</h4>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <hr />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <label className='label'>Email:</label>
                                                </Col>
                                                <Col>
                                                    {item.email}
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <label className='label'>Issue Type:</label>
                                                </Col>
                                                <Col>
                                                    {item.issueType}
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <label className='label'>Tag:</label>
                                                </Col>
                                                <Col>
                                                    {item.issueType}
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <hr />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <label className='label'>Step(s) to Reporduce</label>
                                                    <ol>
                                                        {
                                                            item.stepsToReporduce.map((step) => (
                                                                <li>{step.step}</li>
                                                            )
                                                            )}
                                                    </ol>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>
                                </Row>
                            }
                        </Card>
                    </Col>
                </Row>

            </Container >
        </>
    )
}

export default Success