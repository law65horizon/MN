import { useState } from 'react'
import './App.css'
// import PageLayout from './PageLayout/PageLayout'
import { Navigate, Route, Routes } from 'react-router-dom'
import PageLayout from './Layout/PageLayout/PageLayout'
import HomePage from './Pages/HomePage/HomePage'
import { useAuthState } from 'react-firebase-hooks/auth'
import AboutPage from './Pages/AboutPage/AboutPage'
import ContactPage from './Pages/ContactPage/ContactPage'


function App() {

  return (
    <PageLayout>
      <Routes>
        <>
         <Route path='/' element={<HomePage /> } />
         <Route path='/me' element={<AboutPage /> } />
         <Route path='/contact' element={<ContactPage /> } />
        </>
      </Routes>
    </PageLayout>
  )
}

export default App
