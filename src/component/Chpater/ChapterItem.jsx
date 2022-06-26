import React, { memo } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const ChapterItemContainer = styled.div`
  width: 100%;
  height: 4rem;
  line-height: 4rem;
  font-size: 1.5rem;
  border-bottom: 1px solid #eee;
  letter-spacing: 0.4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

function ChapterItem({ data }) {
  const navigate = useNavigate()
  const goToContentPage = () => {
    navigate(`/content/${data.chapterId}/${data.title}`)
  }

  return (
    <ChapterItemContainer onClick={goToContentPage}>
      {data?.title}
    </ChapterItemContainer>
  )
}

export default memo(ChapterItem)
