'use client'
import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useFieldArray, useForm } from 'react-hook-form'

const RequestForm = () => {

  const { control } = useForm()
  const { append, remove, fields } = useFieldArray({
    name: 'steps', control, rules: {
      minLength: 1
    }
  })

  const addStep = (e: any) => {
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
      const text = e.nativeEvent.target.value
      if (text.trim() !== '') {
        e.nativeEvent.target.value = ''
        append({ value: text })
      }
    }
  }

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
                      <Form.Control type="text" placeholder="Type 'Enter' for a new step" onKeyDown={addStep} />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <ol>
                      {fields.map((field, index) => (
                        <li>
                          <Row>
                            <Col md={9}>
                              <Form.Control key={field.id} {...field} onChange={() => { }} />
                            </Col>
                            <Col md={{ span: 2, offset: 1 }}>
                              <Button style={{ float: 'right' }} type='button' onClick={() => remove(index)}>Remove</Button>
                            </Col>
                          </Row>
                        </li>
                      ))}
                    </ol>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button style={{ float: 'right' }} type='button'>Submit</Button>
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