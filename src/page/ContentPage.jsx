import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getComicContent } from '../api/comics'
import ContentInfo from '../component/Content/ContentInfo'
import ContentPageHeader from '../component/Content/ContentPageHeader'
import { useGetFetch } from '../hooks/useFetch'

function ContentPage() {
  const params = useParams()
  const [index, setIndex] = useState(0)
  const [contentData, setContentData] = useState([])

  const onSuccess = ({ data }) => {
    setContentData(() => data)
  }
  const { isFetching, isError } = useGetFetch(
    'content',
    getComicContent,
    params.chapterId,
    { onSuccess }
  )

  return (
    <>
      <ContentPageHeader title={params.chapterName} />
      {isFetching && '加载中'}
      {isError && '加载失败'}
      <ContentInfo info={contentData} index={index} setIndex={setIndex} />
    </>
  )
}

export default ContentPage
