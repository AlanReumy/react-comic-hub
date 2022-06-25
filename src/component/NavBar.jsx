import React, { memo } from 'react'
import styled from 'styled-components'
import { Row, Col, Input } from 'antd'
import { GithubOutlined } from '@ant-design/icons'

const { Search } = Input

const NavBarContainer = styled(Row)`
  padding: 0 1rem;
  height: 4rem;
  line-height: 4rem;
  border-bottom: 1px solid #eee;
  font-size: 1.6rem;
`

const GithubContainer = styled(Col)`
  padding-left: 2rem;
`

const SearchInput = styled(Search)`
  padding-top: 0.3rem;
`

function NavBar({ refetch, setKeyValue, keyValue, children }) {
  const goToGithubPage = () => {
    location.href = 'https://github.com/ZimTang/react-comic-hub'
  }
  return (
    <NavBarContainer className="navbar">
      <Col span={10}>{children}</Col>
      <Col span={14}>
        <Row>
          <Col span={19}>
            <SearchInput
              value={keyValue}
              onChange={(e) => setKeyValue(() => e.target.value)}
              placeholder="搜索漫画"
              onSearch={refetch}
            />
          </Col>
          <GithubContainer span={5} onClick={goToGithubPage}>
            <GithubOutlined />
          </GithubContainer>
        </Row>
      </Col>
    </NavBarContainer>
  )
}

export default memo(NavBar)
