import React, { useState } from 'react'
import { ConfigProvider } from 'antd'
import NavBar from './component/NavBar'
import { useFetchComics } from './hooks/useFetchComics'
import Comics from './component/Comics'

function App() {
  const [comics, setComics] = useState([])
  const [keyValue, setKeyValue] = useState('')

  const onSuccess = (result) => {
    setComics(() => result.data)
  }
  const onError = (error) => {
    console.log(error)
  }

  const { refetch, isFetching } = useFetchComics(onSuccess, onError, {
    key: keyValue
  })

  return (
    <ConfigProvider>
      <NavBar refetch={refetch} keyValue={keyValue} setKeyValue={setKeyValue}>
        <h3>react-comic-hub</h3>
      </NavBar>
      {isFetching && '加载中...'}
      <Comics comics={comics} />
    </ConfigProvider>
  )
}

export default App
