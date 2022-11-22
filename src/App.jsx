import './Style.css'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainBody from './components/Common/Layout/MainBody/MainBody'
import StaticSidebar from './components/Common/StaticSidebar/StaticSidebar'
import videoBG from './assets/Background/backgound_video.mp4'
import MessageUI from './components/UI/MessageUI/MessageUI'
import { useState } from 'react'
import ListedUI from './components/UI/Items/ListedUI'
import AddNewItem from './components/UI/AddNewItem/AddNewItem'
import DraftUI from './components/UI/Items/DraftUI'

function App() {
  const [toogleSidebar, setToogleSidebar] = useState(false)

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
                        <Route path='/'>
                            <Route path='message' exact element={<MessageUI />} />
                            <Route path='items'>
                                <Route path='listed-item' exact element={<ListedUI />} />
                                <Route path='draft-item' exact element={<DraftUI />} />
                            </Route>
                            <Route path='add-new-item' exact element={<AddNewItem /> } />
                        </Route>
                  </Routes>
              </div>
        </div>
    </Router>
  )
}

export default App
