import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StartPage from './pages/StartPage'
import ActivityPage from './pages/ActivityPage'
import { useState } from 'react'
import { Activity } from './types/types'

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  // const [activities, setActivities] = useState([]);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage activities={activities} setActivities={setActivities}/>}/>
        <Route path="/activities" element={<ActivityPage activities={activities} setActivities={setActivities}/>}/>
        <Route/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
