import { useCallback } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import { useRecoilState } from 'recoil'
import GlobalStyle from './common/styles/GlobalStyle'
import { defaultTheme } from './common/styles/theme'
import Main from './views/main/Main'
import SocialDetail from './views/socailDetail'
import Social from './views/social'
import SocialCrate from './views/socialCreate'
import Signup from './views/Signup'
import Login from './views/Login'
import Home from './views/Home'
import { isLoginState } from './common/atoms'
import { queryClient } from './api/config/queryClient'
import { getRefresh } from './api/auth'
import SocialList from './views/SocialList'
import Search from './views/Search'
import User from './views/user'

export default function App() {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState)

  const handleError = useCallback((data: any) => {
    console.log(data, 'onError')
    if (data.response?.status === 401) {
      console.log('handleError')
      if (data.response?.data.errorCode === -188) {
        // access_token 만료
        getRefresh().catch(() => {
          setIsLogin(false)
          window.location.href = '/login'
        })
      } else {
        // 다시 로그인
        setIsLogin(false)
        window.location.href = '/login'
      }
    }
  }, [])

  queryClient.setDefaultOptions({
    queries: { refetchOnMount: false, refetchOnWindowFocus: false, onError: handleError },
    mutations: { onError: handleError },
  })

  const checkLogin = useCallback(async () => {
    try {
      await getRefresh()
      setIsLogin(true)
    } catch (err) {
      setIsLogin(false)
    }
  }, [])

  checkLogin()
  console.log(isLogin)

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TopWrap>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={isLogin ? <Navigate to="/home" /> : <Main />} />
            <Route path="/home" element={<Home />} />
            <Route path="/home/search" element={<Search />} />
            <Route path="/home/list/:sort" element={<SocialList />} />
            <Route path="/social" element={<Social />} />
            <Route path="/social/detail/:id" element={<SocialDetail />} />
            <Route path="/social/create" element={<SocialCrate />} />
            <Route path="/user" element={<User />} />
            <Route path="/signup" element={isLogin ? <Navigate to="/home" /> : <Signup />} />
            <Route path="/login" element={isLogin ? <Navigate to="/home" /> : <Login />} />
            <Route path="/user" element={isLogin ? <Navigate to="/user" /> : <Login />} />
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
