import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons'

const ContentInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`

const ContentImage = styled.img`
  width: 35rem;
  height: 50rem;
`

const LeftIconButton = styled.div`
  font-size: 2rem;
  position: absolute;
  z-index: 9999;
  top: 50%;
  left: 2%;
  transform: translateY(-50%);
`

const RightIconButton = styled.div`
  font-size: 2rem;
  position: absolute;
  z-index: 9999;
  top: 50%;
  right: 2%;
  transform: translateY(-50%);
`

function ContentInfo({ info, setIndex, index }) {
  const changePage = (type) => {
    if (index === 0 && type === 'prev') {
      alert('已经是第一页了噢')
      return
    }
    console.log(index, info.length - 1)
    if (index === info.length - 1 && type === 'next') {
      alert('已经是最后一页了噢')
      return
    }
    type === 'prev' ? setIndex(() => index - 1) : setIndex(() => index + 1)
  }
  useEffect(() => {
    if (!info) {
      return
    }
    console.log('info[index]', info[index])
    imgRef.current.src = info[index]
  }, [info, index])
  const imgRef = useRef(null)
  return (
    <ContentInfoContainer>
      <LeftIconButton onClick={() => changePage('prev')}>
        <LeftCircleOutlined twoToneColor="#eb2f96" />
      </LeftIconButton>
      <ContentImage ref={imgRef} src={''} alt="" />
      <RightIconButton onClick={() => changePage('next')}>
        <RightCircleOutlined />
      </RightIconButton>
    </ContentInfoContainer>
  )
}

export default ContentInfo
