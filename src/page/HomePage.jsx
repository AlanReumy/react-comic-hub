import React, { useState } from 'react'
import styled from 'styled-components'
import Comics from '../component/Comic/Comics'
import { useGetFetch } from '../hooks/useFetch'
import { getComics } from '../api/comics'
import HomePageNavBar from '../component/Home/HomePageNavBar'
import Container from '../component/Layout/Container'

function Home() {
  const [comics, setComics] = useState([])
  const [keyValue, setKeyValue] = useState('')

  const onSuccess = ({ data }) => {
    console.log(data)
    setComics(() => data)
  }

  const onError = (error) => {
    console.log(error)
  }

  const { refetch, isLoading, isError } = useGetFetch(
    'comics',
    getComics,
    { key: keyValue },
    { onSuccess, onError, enabled: false }
  )

  return (
    <Container>
      <HomePageNavBar
        refetch={refetch}
        keyValue={keyValue}
        setKeyValue={setKeyValue}
      >
        <h3>react-comic-hub</h3>
      </HomePageNavBar>
      {isLoading && '加载中...'}
      {isError && '加载失败'}
      <Comics comics={comics} />
    </Container>
  )
}

export default Home
