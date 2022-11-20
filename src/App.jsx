import './Style.css'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainBody from './components/Common/Layout/MainBody/MainBody'
import StaticSidebar from './components/Common/StaticSidebar/StaticSidebar'
import videoBG from './assets/Background/backgound_video.mp4'
import MessageUI from './components/MessageUI/MessageUI'
import { useState } from 'react'

function App() {
  const [toogleSidebar, setToogleSidebar] = useState(true)

  return (
    <Router>
        <div className="top">
              <video src={videoBG} autoPlay muted loop/>
        </div>
        <div className="main">
              { !toogleSidebar && <div className="sidebar-main">
                  <StaticSidebar />
              </div> }
              <div className={toogleSidebar ? 'full-width' : 'body-main'}>
                  <Routes>
                        <Route path='/' >
                            <Route path='message' exact element={<MessageUI />} />
                        </Route>
                  </Routes>
              </div>
        </div>
    </Router>
  )
}

export default App
