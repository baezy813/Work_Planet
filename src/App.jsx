import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import JoinForm from './pages/Login/join'
import LoginForm from './pages/Login/login'
import Mypage from "./pages/Mypage/MyPage"
import RandomQuote from './pages/Quote/RandomQuote'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/join" element={<JoinForm />} />
              <Route path="/" element={<LoginForm />} />
              <Route path="/mypage" element={<Mypage />} />
              <Route path="/quote" element={<RandomQuote />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
