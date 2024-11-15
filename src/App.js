import './assets/css/index.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './Components/Accueil'
import Header from './Components/Header';
import modeSombre from './assets/images/dark_mode.svg'
import modeClaire from './assets/images/light_mode.svg'
import web from './assets/images/web.png'
import youtube from './assets/images/youtube.png'
import facebook from './assets/images/facebook.png'

function App() {
  const [modeStatus, modeStatusSet] = useState(false)

  const modeClaireHandle = () =>{
    modeStatusSet(true)
  }

  const modeSombreHandle = () => {
    modeStatusSet(false)
  }

  return (
    <Router>
        <section className={`body  ${modeStatus ? 'bgClaire' : 'bgSombre'}`} >
          <Header/>
          <main>
            <Routes>
              <Route path='/' element={<Accueil/>}/>
            </Routes>
          </main>
          <div className='footer'>
            <div className='mode'>
                {modeStatus? <img onClick={modeSombreHandle} src={modeSombre} alt='Mode sombre'/> : <img onClick={modeClaireHandle} src={modeClaire} alt='Mode claire'/>}
                {modeStatus ? <p onClick={modeSombreHandle}>Mode Sombre</p> : <p onClick={modeClaireHandle}>Mode Claire</p>}
            </div>

            <div className='social'>
              <img src={web} alt='icon web'/>
              <img src={youtube} alt='icon youtube'/>
              <img src={facebook} alt='icon facebook'/>
            </div>
          </div>
        </section>
    </Router>
  );
}

export default App;
