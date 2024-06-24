import React from 'react'
import './support.css'
import { Button, Col, Row } from 'react-bootstrap'
import { useAppDispatch } from '@/lib/hooks'
import { deleteSupport } from '@/lib/features/support/supportSlice'

const SupportDetail = ({ selected, items }: { selected: String, items: SupportType[] }) => {
  if (selected !== '') {
    const item = items.filter(i => i.id === selected)[0]
    const dispatch = useAppDispatch()
    const remove = () => {
      dispatch(deleteSupport(item.id as string))
    }
    return (
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

        <Row>
          <Col>
            <Button variant='danger' style={{ float: 'right' }} onClick={remove}>Remove</Button>
          </Col>
        </Row>
      </div>
    )
  }
  return (
    <div className='empty'>Select One</div>)
}

export default SupportDetail