import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { FavoriteProvider } from './contexts/FavoriteContext'
import Navbar from './components/common/Navbar'
import LogoutPopup from './components/common/LogoutPopup'
import JoinForm from './pages/Auth/join'
import LoginForm from './pages/Auth/login'
import Mypage from './pages/Mypage/MyPage'
import RandomQuote from './pages/Quote/RandomQuote'
import MenuRecommendation from './pages/Restaurant/MenuRecommendation'
import PlayList from './pages/PlayList/page'
import MusicDetail from './pages/PlayList/MusicDetail'

import styled from 'styled-components'
import { useState } from 'react'

function App() {
    const [isLogoutPopupOpen, setIsLogoutPopupOpen] = useState(false)

    return (
        <AuthProvider>
            <FavoriteProvider>
                <Router>
                    <div className="App">
                      
                        <LogoutPopup 
                            isLogoutPopupOpen={isLogoutPopupOpen} 
                            setIsLogoutPopupOpen={setIsLogoutPopupOpen} 
                        />
                        
                       
                        <Routes>
                            <Route path="/login" element={<LoginForm />} />
                            <Route path="/join" element={<JoinForm />} />
                            <Route path="*" element={
                                <>
                                    <Navbar setIsLogoutPopupOpen={setIsLogoutPopupOpen} />
                                    <S.MainContent>
                                        <Routes>
                                            <Route path="/mypage" element={<Mypage />} />
                                            <Route path="/quote" element={<RandomQuote />} />
                                            <Route path="/restaurant" element={<MenuRecommendation />} />
                                            <Route path="/playlist" element={<PlayList />} />  
                                            <Route path="/playlist/musicdetail/:type" element={<MusicDetail />} />
                                        </Routes>
                                    </S.MainContent>
                                </>
                            } />
                        </Routes>
                    </div>
                </Router>
            </FavoriteProvider>
        </AuthProvider>
    )
}

export default App

const S = {
    MainContent: styled.main`
        margin-left: 280px; /* 사이드바 너비만큼 여백 */
        min-height: 100vh;
        background: #f8fafc;
        padding: 20px;
    `
}
