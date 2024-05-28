import React from 'react'
import Main from './pages/Main/Main'
import { Route, Routes } from 'react-router-dom'
import AllProjects from './pages/AllProjects/AllProjects'
import AllNews from './pages/AllNews/AllNews'
import SingleNews from './pages/SingleNews/SingleNews'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/projects' element={<AllProjects/>}/>
        <Route path='/news' element={<AllNews/>}/>
        <Route path='/single_news/:id' element={<SingleNews/>}/>
      </Routes>
    </div>
  )
}

export default App
