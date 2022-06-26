import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ComicContainer = styled(Link)`
  display: inline-block;
  font-size: 1.6rem;
  color: #4f4f4f;
  margin-bottom: 1rem;
  .cover {
    width: 10rem;
    height: 13rem;
    border-radius: 10%;
  }
  .title {
    width: 10rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 2rem;
    line-height: 2.5rem;
    margin: 0.2rem 0;
    font-size: 1.6rem;
  }
  .updateTime {
    font-size: 1.5rem;
  }
`

function Comic({ info }) {
  if (!info) {
    return <></>
  }

  const { title, cover, updateTime, comicId } = info

  return (
    <ComicContainer to={`/chapter/${comicId}`}>
      <img className="cover" src={cover} alt="" />
      <div className="title">{title}</div>
      <div className="updateTime">{updateTime.substring(0, 10)}</div>
    </ComicContainer>
  )
}

export default Comic
