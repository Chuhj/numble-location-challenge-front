import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './common/styles/GlobalStyle';
import { defaultTheme } from './common/styles/theme';
import Main from './views/main/Main'
import SocialDetail from './views/socailDetail'
import Social from './views/social'
import SocialCrate from './views/socialCreate'
import Signup from './views/Signup';
import Login from './views/Login';

export default function App() {
  return (
   <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <TopWrap>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/social" element={<Social />} />
          <Route path="/social/detail/:id" element={<SocialDetail />} />
          <Route path="/social/create" element={<SocialCrate />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </TopWrap>
  </ThemeProvider>
  )
}


export const TopWrap = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 720px;
  margin: 0 auto;
`