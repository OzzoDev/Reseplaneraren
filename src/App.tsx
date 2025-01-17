import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StartPage from './pages/StartPage'
import ActivityPage from './pages/ActivityPage'

function App() {

  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<StartPage/>}/>
      <Route path="/activities" element={<ActivityPage/>}/>
      <Route/>
    </Routes>
  </BrowserRouter>
}

export default App
