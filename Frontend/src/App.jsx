import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home/home.jsx'
import Dashboard from './pages/Dashboard/dashboard.jsx'
import Sidebar from './Components/Sidebar/sidebar.jsx'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Member from './pages/Member/member.jsx'
import GeneralUser from './pages/GeneralUser/generalUser.jsx'
import MemberDetail from './pages/MemberDetail/memberDetail.jsx'


function App() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false)
  useEffect(() => {
    let isLogedIn = sessionStorage.getItem("isLogin");
    if (isLogedIn) {
      setIsLogin(true);
      //  navigate('/dashboard')
    } else {
      setIsLogin(false);
      navigate('/')
    }
  }, [])
  return (
    <div className='flex '>
      {
        isLogin && <Sidebar />
      }

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/member' element={<Member />} />
        <Route path='/specific/:page' element={<GeneralUser />} />
        <Route path='/member/:id' element={<MemberDetail />} />
      </Routes>

    </div>
  )
}

export default App
