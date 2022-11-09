import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import Main from './views/main/Main'

function App() {
  return (
    <TopWrap>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </TopWrap>
  )
}

export default App

export const TopWrap = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  max-width: 720px;
  padding-bottom: 7.2rem;
  margin: 0 auto;
  border: 1px solid black;
`
