import './Style.css'
import './Animation.css'
import './App.css'
import './Responsive.css'
import './CheckBoxStyle.css'
import { BrowserRouter as Router } from 'react-router-dom'
import StaticSidebar from './components/Common/StaticSidebar/StaticSidebar'
import EmptyPage from './components/Common/EmptyPage/EmptyPage'
import videoBG from './assets/Background/backgound_video.mp4'
import MessageUI from './components/UI/MessageUI/MessageUI'
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
import EmailUI from './components/UI/EmailUI/EmailUI'
import CardsUI from './components/UI/DashboardUI/TabsUI/CardsUI'
import MainRoutes from './Utils/Routes'

function App() {
//   const [toogleSidebar, setToogleSidebar] = useState(false)

  return (
    <Router>
            <div className="top">
                    <video src={videoBG} autoPlay muted loop/>
            </div>
            <div className="main">    
                {/* <StaticSidebar /> */}

                <MainRoutes />
                    {/* { !toogleSidebar && */}
                    {/* <div className={`sidebar-main ${toogleSidebar ? 'small' : 'big'}`}> */}
                    {/* </div>  */}
                    {/* } */}
                            {/* <StaticSidebar toogle={setToogleSidebar} currentState={toogleSidebar}/> */}
                    {/* <div className={toogleSidebar ? 'full-width' : 'body-main'}> */}
                    {/* </div> */}
            </div>
    </Router>
  )
}

export default App
