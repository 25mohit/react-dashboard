import { Route, Routes } from 'react-router-dom'
import Login from '../components/Authentication/Login/Types/LoginType1/LoginType1'
import { lazy, Suspense, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import LoadingScreen from '../components/Helpers/SuspenceLoader/LoadingScreen'

const MainRoutes = () => {
        const DashboardUI = lazy(() => import('../components/UI/DashboardUI/DashboardUI'))
        const OrdersUI = lazy(() => import('../components/UI/SalesUI/OrdersUI'))
        const HomeUI = lazy(() => import('../components/UI/DashboardUI/TabsUI/HomeUI'))
        const PagesUI = lazy(() => import('../components/UI/DashboardUI/TabsUI/PagesUI'))
        const CardsUI = lazy(() => import('../components/UI/DashboardUI/TabsUI/CardsUI'))
        const QuickSettings = lazy(() => import('../components/UI/DashboardUI/TabsUI/QuickSettings'))
        const UsersSetting = lazy(() => import('../components/UI/DashboardUI/TabsUI/UsersSetting'))
        const EmptyPage = lazy(() => import('../components/Common/EmptyPage/EmptyPage'))
        const ListedUI = lazy(() => import('../components/UI/ItemsUI/ListedUI'))
        const DraftUI = lazy(() => import('../components/UI/ItemsUI/DraftUI'))
        const ScheduledUI = lazy(() => import('../components/UI/ItemsUI/ScheduledUI'))
        const UnsoldUI = lazy(() => import('../components/UI/ItemsUI/UnsoldUI'))
        const MessageUI = lazy(() => import('../components/UI/MessageUI/MessageUI'))
        const EmailUI = lazy(() => import('../components/UI/EmailUI/EmailUI'))
        const AddNewItem = lazy(() => import('../components/UI/AddNewItemUI/AddNewItemUI'))

        const navigate = useNavigate()

        useEffect(() => {
                const isLoggedIn = Boolean(localStorage.getItem('isUserLoggedIn'))
                if(!isLoggedIn){
                        navigate('/login')
                }
        },[])

  return (
        <Suspense fallback={<LoadingScreen />}>
                <Routes>
                        <Route path='/' element={<EmptyPage />} />
                        <Route path='login' element={<Login />} />
                        <Route path='dashboard' element={<DashboardUI />} >
                                <Route path='home' element={<HomeUI />}/>
                                <Route path='pages' element={<PagesUI />}/>
                                <Route path='cards' element={<CardsUI />}/>
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
                        <Route path='email' exact element={<EmailUI />} />
                        <Route path='add-new-item' exact element={<AddNewItem /> } />
                </Routes>
        </Suspense>
  )
}

export default MainRoutes