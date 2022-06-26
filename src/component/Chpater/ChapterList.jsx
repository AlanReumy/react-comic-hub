import React, { memo } from 'react'
import styled from 'styled-components'
import ChapterItem from './ChapterItem'

const ChapterListContainer = styled.div`
  h4 {
    font-size: 1.6rem;
  }
`

function ChapterList({ list }) {
  return (
    <ChapterListContainer>
      <h4>共 {list?.length} 章节</h4>
      {list?.map((item) => (
        <ChapterItem key={item.chapterId} data={item} />
      ))}
    </ChapterListContainer>
  )
}

export default memo(ChapterList)
