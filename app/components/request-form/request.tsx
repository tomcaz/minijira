'use client'
import { faRemove, faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import { useFieldArray, useForm } from 'react-hook-form'

const RequestForm = () => {

  const { control, register } = useForm()
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
        append({ defaultValue: text })
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
                          key={type}
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
                    <div className="mb-3">
                      {['UI', 'Backend', 'Performance'].map((type) => (
                        <Form.Check type='checkbox'
                          key={type}
                          id='issue-type'
                          label={type}
                        />
                      ))}
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label className='label'>Step(s) to Reporduce : </Form.Label>

                      <InputGroup className="mb-3">
                        <Form.Control type="text" placeholder="Type 'Enter' for a new step" onKeyDown={addStep} />
                        <Button variant="outline-secondary" id="button-addon2">
                          Add
                        </Button>
                      </InputGroup>
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
                              <Form.Control key={field.id} {...field} />
                            </Col>
                            <Col md={{ span: 1, offset: 2 }}>
                              <Button variant='danger' style={{ float: 'right' }} type='button' onClick={() => remove(index)}><FontAwesomeIcon icon={faRemove} /></Button>
                            </Col>
                          </Row>
                        </li>
                      ))}
                    </ol>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button style={{ float: 'right' }} type='button'><FontAwesomeIcon icon={faUpload} /> Submit</Button>
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