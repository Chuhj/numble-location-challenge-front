import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import Main from './views/main/Main'
import SocialDetail from './views/socailDetail'
import Social from './views/social'
import SocialCrate from './views/socialCreate'

function App() {
  return (
    <TopWrap>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/social" element={<Social />} />
          <Route path="/social/detail/:id" element={<SocialDetail />} />
          <Route path="/social/create" element={<SocialCrate />} />
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
`
