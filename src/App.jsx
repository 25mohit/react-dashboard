import './Style.css'
import './App.css'
import { BrowserRouter as Router, Navigate, Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import StaticSidebar from './components/Common/StaticSidebar/StaticSidebar'
import videoBG from './assets/Background/backgound_video.mp4'
import MessageUI from './components/UI/MessageUI/MessageUI'
import { useEffect, useState } from 'react'
import ListedUI from './components/UI/ItemsUI/ListedUI'
import DraftUI from './components/UI/ItemsUI/DraftUI'
import ScheduledUI from './components/UI/ItemsUI/ScheduledUI'
import UnsoldUI from './components/UI/ItemsUI/UnsoldUI'
import AddNewItem from './components/UI/AddNewItemUI/AddNewItemUI'
import OrdersUI from './components/UI/SalesUI/OrdersUI'
import DashboardUI from './components/UI/DashboardUI/DashboardUI'
import HomeUI from './components/UI/DashboardUI/TabsUI/HomeUI'
import PagesUI from './components/UI/DashboardUI/TabsUI/PagesUI'
import QuickSettings from './components/UI/DashboardUI/TabsUI/QuickSettings'
import UsersSetting from './components/UI/DashboardUI/TabsUI/UsersSetting'

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
                        <Route path='/dashboard' element={<DashboardUI />} >
                            <Route path='home' element={<HomeUI />}/>
                            <Route path='pages' element={<PagesUI />}/>
                            <Route path='quick-settings' element={<QuickSettings />}/>
                            <Route path='user-settings' element={<UsersSetting />}/>
                        </Route>
                        <Route path='sales'>
                            <Route path='orders' exact element={<OrdersUI />} />
                        </Route>
                        <Route path='items'>
                            <Route path='listed-item' exact element={<ListedUI />} />
                            <Route path='draft-item' exact element={<DraftUI />} />
                            <Route path='scheduled-item' exact element={<ScheduledUI />} />
                            <Route path='unsold-item' exact element={<UnsoldUI />} />
                        </Route>
                        <Route path='message' exact element={<MessageUI />} />
                        <Route path='add-new-item' exact element={<AddNewItem /> } />
                  </Routes>
              </div>
        </div>
    </Router>
  )
}

export default App
