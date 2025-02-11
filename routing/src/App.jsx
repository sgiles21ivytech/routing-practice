import './App.css'
import {Route, Routes} from 'react-router-dom'
import { Home } from './components/Home'

export const App = () => {
  
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:value" element={<Home />} />
        <Route path="/:value/:color/:backgroundcolor" element={<Home />} />
      </Routes>
    </>
  );
}


