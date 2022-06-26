import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getComicChapter } from '../api/comics'
import { useGetFetch } from '../hooks/useFetch'
import ChapterPageHeader from '../component/Chpater/ChapterPageHeader'
import ComicInfo from '../component/Chpater/ChapterComicInfo'
import ChapterList from '../component/Chpater/ChapterList'
import Container from '../component/Layout/Container'

function ChapterPage() {
  const params = useParams()
  const [comicInfo, setComicInfo] = useState({})
  const onSuccess = ({ data }) => {
    setComicInfo(() => data)
  }
  const { isFetching, isError } = useGetFetch(
    'chapter',
    getComicChapter,
    params.cartoonId,
    { onSuccess }
  )
  return (
    <Container>
      <ChapterPageHeader />
      {isError && <h2>加载失败</h2>}
      {isFetching && <h2>加载中</h2>}
      <ComicInfo data={comicInfo} />
      <ChapterList list={comicInfo.chapterList} />
    </Container>
  )
}

export default ChapterPage
