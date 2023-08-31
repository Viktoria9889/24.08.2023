import style from './App.module.css'
import Header from '../Components/Header/Header'
import NavBar from '../Components/NavBar/NavBar'
import MainContent from '../Components/MainContent/MainContent'
import Chat from '../Components/Chat/Chat'
import Materials from '../Components/Materials/Materials'
import Homework from '../Components/Homework/Homework'
import Information from '../Components/Information/Information'
import VoiceChannel from '../Components/VoiceChannel/VoiceChannel'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {useState, useEffect} from 'react'

function App() {

  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState('')


  useEffect(() => {
    setLoading(true)
    axios.get('http://localhost:4000/students')
      .then(res => {
        setUsers(res.data)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  return (
    <BrowserRouter>
      <div className={style.app_wrapper}>
        <Header />
        <NavBar users={users}/>
        <div className={style.app_wrapper_content}>
          <Routes>
            <Route>
              <Route path='/MainContent' element={<MainContent />} />
              <Route path='/Chat' element={<Chat />} />
              <Route path='/Materials' element={<Materials />} />
              <Route path='/Homework' element={<Homework />} />
              <Route path='/Information' element={<Information />} />
              <Route path='/VoiceChannel' element={<VoiceChannel users={users}/>} />
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
