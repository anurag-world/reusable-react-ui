import React from 'react'
import Menu from './packages/menu/Menu'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { list } from './data/list'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  width: 250px;
  height: 300px;
  margin: 50px 20px 50px;
  padding: 20px;
  border: ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.borderRadius};
`
const Heading = styled.pre`
  font-family: ${({ theme }) => theme.fontStyle.default};
  font-size: ${({ theme }) => theme.fontSize.One}px;
  margin-bottom: 10px;
  padding: 10px;
`

const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Container>
        <Heading>
          <code>
            {'<Menu'} mode={`"light">`}
          </code>
        </Heading>
        <Menu mode="light" getData={list} />
      </Container>
      <Container>
        <Heading>
          <code>
            {'<Menu'} mode={`"dark">`}
          </code>
        </Heading>
        <Menu mode="dark" getData={list} />
      </Container>
    </div>
  )
}

Menu.propTypes = {
  mode: PropTypes.string,
}

export default App
