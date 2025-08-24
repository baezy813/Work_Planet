import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import JoinForm from './pages/Login/join'
import LoginForm from './pages/Login/login'

function App() {
  return (
    <Router>
      <div className="App">
      
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/join" element={<JoinForm />} />
            <Route path="/" element={<LoginForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
