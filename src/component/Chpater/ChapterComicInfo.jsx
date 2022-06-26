import React, { memo } from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'

const ComicInfoContainer = styled(Row)`
  padding: 1.5rem 0;
  letter-spacing: 0.4rem;
  .title {
    margin-top: 6rem;
    font-size: 1.8rem;
    height: 3rem;
    line-height: 3rem;
    font-weight: bold;
  }
  .author,
  .comicType {
    font-size: 1.5rem;
    height: 3rem;
    line-height: 3rem;
  }
`

const ComicCover = styled.img`
  width: 11rem;
  height: 15rem;
  border-radius: 5%;
`

function ComicInfo({ data }) {
  return (
    <ComicInfoContainer>
      <Col span={10}>
        <ComicCover src={data.cover} alt="" />
      </Col>
      <Col span={14}>
        <div className="title">{data.title}</div>
        <div className="author">{data.author}</div>
        <div className="comicType">{data.comicType}</div>
      </Col>
    </ComicInfoContainer>
  )
}

export default memo(ComicInfo)
