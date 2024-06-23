'use client'
import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const RequestForm = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <div className='card'>
              <Form>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="full-name">
                      <Form.Label className='label'>Full Name : </Form.Label>
                      <Form.Control type="text" placeholder="John Doe" />
                    </Form.Group>
                    <label className='label'>Issue Type : </label>
                    <div className="mb-3">
                      {['Bug Report', 'Feature Request', 'General Inquiry'].map((type) => (
                        <Form.Check type='checkbox'
                          id='issue-type'
                          label={type}
                        />
                      ))}
                    </div>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label className='label'>Email address : </Form.Label>
                      <Form.Control type="email" placeholder="john@srf.com" />
                    </Form.Group>
                    <label className='label'>Tag : </label>
                    {['UI', 'Backend', 'Performance'].map((type) => (
                      <div className="mb-3">
                        <Form.Check type='checkbox'
                          id='issue-type'
                          label={type}
                        />
                      </div>))}
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label className='label'>Step(s) to Reporduce : </Form.Label>
                      <Form.Control type="text" placeholder="Type 'Enter' for a new step" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <ol>

                    </ol>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button style={{ float: 'right' }} type='submit'>Submit</Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container >
    </>
  )
}

export default RequestForm