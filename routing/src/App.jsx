import './App.css'
import {Route, Routes} from 'react-router-dom'
import { Home } from './components/Home'
import { Number } from './components/Number'
import { Greeting } from './components/Greeting'
import { HelloColor } from './components/HelloColor'

export const App = () => {
  
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/4/:number" element={<Number/>}/>
        <Route path="/hello/:greeting" element={<Greeting/>}/>
        <Route path="/hello/:textColor/:backGroundColor" element={<HelloColor/>}/>
      </Routes>
    </>
  )
}


