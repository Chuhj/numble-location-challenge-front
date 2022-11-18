import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './common/styles/GlobalStyle';
import { defaultTheme } from './common/styles/theme';
import Main from './views/main/Main';
import Signup from './views/Signup';
import Login from './views/Login';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TopWrap>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </TopWrap>
    </ThemeProvider>
  );
}

export default App;

export const TopWrap = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 720px;
  margin: 0 auto;
  border: 1px solid black;
`;
