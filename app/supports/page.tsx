'use client'

import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SupportDetail from '../components/support/support-detail'
import SupportMenu from '../components/support/support-menu'
import { useAppSelector } from '@/lib/hooks'
import { selectSupport } from '@/lib/features/support/supportSlice'

const SupportPage = () => {

  const supports = useAppSelector(selectSupport)

  const [selected, setSelected] = useState<string>('')

  return (
    <>
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <div className='card'>
              <Row>
                <Col span={12}>
                  <h4 style={{ textAlign: 'center' }}>Support List</h4>
                </Col>
              </Row>
              <br />
              <br />
              <Row>
                <Col span={4} style={{ borderRight: '1px solid gray' }}><SupportMenu list={supports} selected={selected} setSelected={setSelected} /></Col>
                <Col span={8}><SupportDetail selected={selected} items={supports} /></Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default SupportPage