import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './common/styles/GlobalStyle';
import { defaultTheme } from './common/styles/theme';
import Main from './views/main/Main';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TopWrap>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main />} />
          </Routes>
        </BrowserRouter>
      </TopWrap>
    </ThemeProvider>
  );
}

export default App;

export const TopWrap = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  max-width: 720px;
  margin: 0 auto;
  border: 1px solid black;
`;
