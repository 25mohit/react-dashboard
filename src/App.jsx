import './Style.css'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainBody from './components/Common/Layout/MainBody/MainBody'
import StaticSidebar from './components/Common/StaticSidebar/StaticSidebar'
import videoBG from './assets/Background/backgound_video.mp4'

function App() {

  return (
    <Router>
        <video src={videoBG} autoPlay muted loop/>
        <div className="main">
              <div className="sidebar-main">
                  <StaticSidebar />
              </div>
              <Routes>
                  <Route path='/' exact element={<MainBody />}>

                  </Route>
              </Routes>
        </div>
    </Router>
  )
}

export default App
