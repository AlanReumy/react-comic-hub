import React, { memo } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd'
import { LeftCircleOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const NavBarContainer = styled(Row)`
  padding: 0.5rem 1rem;
  font-size: 1.6rem;
  height: 5rem;
  line-height: 5rem;
  border-bottom: 1px solid #ccc;
`

function ChapterPageHeader() {
  const navigate = useNavigate()
  const goBackPage = () => {
    navigate(-1)
  }

  return (
    <NavBarContainer>
      <Col span={12}>
        <LeftCircleOutlined onClick={goBackPage} />
      </Col>
    </NavBarContainer>
  )
}

export default memo(ChapterPageHeader)
