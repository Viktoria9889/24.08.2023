import style from './App.module.css'
import Header from '../Components/Header/Header'
import NavBar from '../Components/NavBar/NavBar'
import MainContent from '../Components/MainContent/MainContent'
import Chat from '../Components/Chat/Chat'
import Materials from '../Components/Materials/Materials'
import Homework from '../Components/Homework/Homework'
import Information from '../Components/Information/Information'
import VoiceChannel from '../Components/VoiceChannel/VoiceChannel'
import img from '../img/img.jpg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  
  let namesData = [
    { id: 1, name: 'Андрій', img: <img src={img} className={style.img} alt="img"/> },
    { id: 2, name: 'Михайло', img: <img src={img} className={style.img} alt="img"/> },
    { id: 3, name: 'Олександр', img: <img src={img} className={style.img} alt="img"/> },
    { id: 4, name: 'Вікторія', img: <img src={img} className={style.img} alt="img"/> },
    { id: 5, name: 'Віталік', img: <img src={img} className={style.img} alt="img"/> },
    { id: 6, name: 'Жук Алекс', img: <img src={img} className={style.img} alt="img"/> },
    { id: 7, name: 'Володимир', img: <img src={img} className={style.img} alt="img"/> },
    { id: 8, name: 'Володимир', img: <img src={img} className={style.img} alt="img"/> },
  ]

  return (
    <BrowserRouter>
      <div className={style.app_wrapper}>
        <Header />
        <NavBar namesData={namesData}/>
        <div className={style.app_wrapper_content}>
          <Routes>
            <Route>
              <Route path='/MainContent' element={<MainContent />} />
              <Route path='/Chat' element={<Chat />} />
              <Route path='/Materials' element={<Materials />} />
              <Route path='/Homework' element={<Homework />} />
              <Route path='/Information' element={<Information />} />
              <Route path='/VoiceChannel' element={<VoiceChannel namesData={namesData}/>} />
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
