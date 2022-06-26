import React, { memo } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const ContentPageHeaderContainer = styled(Row)`
  padding: 0 2rem;
  font-size: 1.5rem;
  height: 5rem;
  line-height: 5rem;
`

const TitleContainer = styled.div`
  text-align: center;
`

function CotentPageHeader({ title }) {
  const navigate = useNavigate()
  return (
    <ContentPageHeaderContainer>
      <Col span={8}>
        <ArrowLeftOutlined onClick={() => navigate(-1)} />
      </Col>
      <TitleContainer span={8}>{title}</TitleContainer>
      <Col span={8}></Col>
    </ContentPageHeaderContainer>
  )
}

export default memo(CotentPageHeader)
