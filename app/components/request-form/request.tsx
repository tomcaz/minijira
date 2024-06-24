'use client'
import { create, selectStatus, selectSupport } from '@/lib/features/support/supportSlice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { faRemove, faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ErrorMessage } from '@hookform/error-message'
import React from 'react'
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap'
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form'

import { v4 as uuidv4 } from 'uuid';

interface IFormInput {
  fullName: string
  email: string
  issueType: string
  tag: string[]
  steps: string[]
}

const RequestForm = () => {

  const { control, register, handleSubmit,
    formState: { errors }, setValue, reset, resetField } = useForm<IFormInput>()
  const dispatch = useAppDispatch()

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    dispatch(create({
      fullName: data.fullName,
      email: data.email,
      issueType: data.issueType as IssueType,
      tags: data.tag as TagsType[],
      stepsToReporduce: data.steps.map(step => ({ id: uuidv4(), step }))
    }))
    console.log(fields.length)
    for (let index = 0; index < fields.length; index += 1) {
      remove(index)
    }
    for (let index = 0; index < fields.length; index += 1) { // some wont able to delete on first attempt
      remove(index)
    }
    reset();
    console.log(fields.length)
    
    resetField('steps')
    console.log(fields)
  }

  const { append, remove, fields, } = useFieldArray({
    control,
    name: 'steps',
    rules: {
      minLength: 1
    }
  })

  const addStep = (e: any) => {
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
      e.preventDefault()
      const text = e.nativeEvent.target.value
      if (text.trim() !== '') {
        e.nativeEvent.target.value = ''
        append(text)
      }
    }
  }
  return (
    <>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <div className='card'>
              <Row>
                <Col>
                  <ErrorMessage
                    errors={errors}
                    name="fullName"
                    render={({ message }) => <Alert variant="danger">{message}</Alert>}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="email"
                    render={({ message }) => <Alert variant="danger">{message}</Alert>}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="tag"
                    render={({ message }) => <Alert variant="danger">{message}</Alert>}
                  />
                </Col>
              </Row>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="full-name">
                      <Form.Label className='label'>Full Name : </Form.Label>
                      <Form.Control type="text" placeholder="John Doe" {...register("fullName", {
                        required: "Full name must be present.", minLength: {
                          value: 8,
                          message: "Full name required minimum length of 8."
                        }
                      })} />
                    </Form.Group>
                    <label className='label'>Issue Type : </label>
                    <div className="mb-3">
                      <Form.Select {...register("issueType", {
                        required: true
                      })}>
                        {['Bug Report', 'Feature Request', 'General Inquiry'].map((type) => (
                          <option value={type}>{type}</option>
                        ))}
                      </Form.Select>
                    </div>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label className='label'>Email address : </Form.Label>
                      <Form.Control type="email" placeholder="john@srf.com"  {...register("email", {
                        required: "Email Address must be a valid address.",
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: "Email Address must be a valid address.",
                        },
                      })} />
                    </Form.Group>
                    <label className='label'>Tag : </label>
                    <div className="mb-3">
                      {['UI', 'Backend', 'Performance'].map((type) => (
                        <Form.Check type='checkbox'
                          key={type}
                          label={type}
                          value={type}
                          {...register(`tag`, {
                            required: "At least One Tag must be present."
                          })} />
                      ))}
                    </div>
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
                        <li key={field.id}>
                          <Row>
                            <Col md={9}>
                              <Form.Control {...field}
                                {...register(`steps.${index}`)}
                                onChange={(e) =>
                                  setValue(`steps.${index}`, e.target.value)} />
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
                    <Button style={{ float: 'right' }} type='submit'><FontAwesomeIcon icon={faUpload} /> Submit</Button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container >
    </>
  )
}

export default RequestForm