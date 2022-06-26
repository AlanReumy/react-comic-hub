import React, { memo } from 'react'
import styled from 'styled-components'
import { Row, Col, Input } from 'antd'
import { GithubOutlined } from '@ant-design/icons'

const { Search } = Input

const NavBarContainer = styled(Row)`
  height: 5rem;
  line-height: 5rem;
  border-bottom: 1px solid #eee;
  font-size: 1.6rem;
`

const GithubContainer = styled(Col)`
  padding-left: 2rem;
`

const SearchInputContainer = styled(Col)`
  padding-left: 1rem;
  transform: translateY(18%);
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
          <SearchInputContainer span={19}>
            <Search
              value={keyValue}
              onChange={(e) => setKeyValue(() => e.target.value)}
              placeholder="搜索漫画"
              onSearch={refetch}
            />
          </SearchInputContainer>
          <GithubContainer span={5} onClick={goToGithubPage}>
            <GithubOutlined />
          </GithubContainer>
        </Row>
      </Col>
    </NavBarContainer>
  )
}

export default memo(NavBar)
