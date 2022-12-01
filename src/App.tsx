import { useCallback, useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import { useRecoilState } from 'recoil'
import { userState } from './common/atoms'
import { queryClient } from './api/config/queryClient'
import { getRefresh } from './api/auth'
import GlobalStyle from './common/styles/GlobalStyle'
import { defaultTheme } from './common/styles/theme'
import Main from './views/main/Main'
import SocialDetail from './views/socailDetail'
import Social from './views/social'
import SocialCrate from './views/socialCreate'
import Signup from './views/Signup'
import Login from './views/Login'
import Home from './views/Home'
import HomeSocialList from './views/HomeSocialList'
import SocialSearch from './views/SocialSearch'
import HomeFeedList from './views/HomeFeedList'
import Feed from './views/Feed'
import FeedDetail from './views/FeedDetail'
import FeedAdd from './views/FeedAdd'
import User from './views/user'

export default function App() {
  const [{ isLogin }, setUser] = useRecoilState(userState)

  const handleError = useCallback(
    (data: any) => {
      if (data.response?.status === 401) {
        const { errorCode } = data.response?.data
        if (errorCode === -188 || errorCode === -166) {
          // 인증 실패 또는 access_token 만료 시
          // 토큰 새로발급 => 실패 시 다시 로그인
          getRefresh()
            .then((res) => {
              setUser({ isLogin: true, id: res.data.data.userId })
            })
            .catch(() => {
              setUser({ isLogin: false, id: null })
              window.location.href = '/login'
            })
        } else {
          // 다시 로그인
          setUser({ isLogin: false, id: null })
          window.location.href = '/login'
        }
      } else {
        alert('에러가 발생했습니다!')
      }
    },
    [setUser]
  )

  queryClient.setDefaultOptions({
    queries: { refetchOnMount: false, refetchOnWindowFocus: false, onError: handleError },
    mutations: { onError: handleError },
  })

  const checkLogin = useCallback(async () => {
    try {
      const res = await getRefresh()
      setUser({ isLogin: true, id: res.data.data.userId })
    } catch (err) {
      setUser({ isLogin: false, id: null })
    }
  }, [setUser])

  useEffect(() => {
    checkLogin()
  }, [checkLogin])

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TopWrap>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={isLogin ? <Navigate to="/home" /> : <Main />} />
            <Route path="/home" element={<Home />} />
            <Route path="/home/search" element={<SocialSearch />} />
            <Route path="/home/list/:sort" element={<HomeSocialList />} />
            <Route path="/home/list/feed" element={<HomeFeedList />} />
            <Route path="/social" element={<Social />} />
            <Route path="/social/detail/:id" element={<SocialDetail />} />
            <Route path="/social/create" element={<SocialCrate />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/my" element={<User />} />
            <Route path="/feed/detail/:id" element={<FeedDetail />} />
            <Route path="/feed/add" element={<FeedAdd />} />
            <Route path="/signup" element={isLogin ? <Navigate to="/home" /> : <Signup />} />
            <Route path="/login" element={isLogin ? <Navigate to="/home" /> : <Login />} />
            <Route path="/my" element={isLogin ? <Navigate to="/my" /> : <Login />} />
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
