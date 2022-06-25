import React, { memo } from 'react'
import { Col, Row } from 'antd'
import Comic from './Comic'

function Comics({ comics }) {
  return (
    <div>
      <Row>
        {comics.map((item) => (
          <Col key={item.comicId} span={8}>
            <Comic info={item} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default memo(Comics)
