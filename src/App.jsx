import './Style.css'
import './Animation.css'
import './App.css'
import './Responsive.css'
import './CheckBoxStyle.css'
import { BrowserRouter as Router } from 'react-router-dom'
import StaticSidebar from './components/Common/StaticSidebar/StaticSidebar'
import videoBG from './assets/Background/backgound_video.mp4'
import MainRoutes from './Utils/Routes'
import AuthWraper from './Utils/AuthWraper'

function App() {
  return (
    <Router>
            <div className="top">
                    <video src={videoBG} autoPlay muted loop/>
            </div>
            <div className="main">
                <AuthWraper>
                        <StaticSidebar />
                </AuthWraper>    

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
