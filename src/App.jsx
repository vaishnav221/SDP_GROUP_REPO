import React from "react";
import Login from "./pages/shared/Login";
import SignUp from "./pages/shared/Register";
import Home from "./pages/shared/Home";
import HomeLayout from "./Layout/Homelayout";
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App = () => {
  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route element={<HomeLayout />}>
                      <Route path='/' element={<Home />} />
                      <Route path='/login' element={<Login />} />
                      <Route path='/register' element={<SignUp />} />
                  </Route>
              </Routes>
          </BrowserRouter>


      </>
  )
}

export default App