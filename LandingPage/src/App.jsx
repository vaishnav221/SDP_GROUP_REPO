
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/shared/Home'
import Login from './pages/shared/Login'
import Register from './pages/shared/Register'
import UserLayout from './layout/UserLayout'
import UserDashboard from './pages/user/UserDashboard'
import AdminLayout from './layout/AdminLayout'
import AdminDashboard from './pages/admin/AdminDashboard'
import NotFound from './pages/shared/NotFound'
import HomeLayout from './layout/WebLayout'




const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<HomeLayout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                    </Route>

                    <Route element={<UserLayout />}>
                        <Route path='/dashboard' element={<UserDashboard />} />
                    </Route>
                    
                    <Route element={<AdminLayout />}>
                        <Route path='/admin/dashboard' element={<AdminDashboard />} />
                    </Route>

                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>


        </>
    )
}

export default App