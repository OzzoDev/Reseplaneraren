import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StartPage from './pages/StartPage'
import ActivityPage from './pages/ActivityPage'
import { useEffect, useState } from 'react'
import { Activity } from './types/types'

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(()=>{
    console.log(activities);
  },[activities]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage activities={activities} setActivities={setActivities}/>}/>
        <Route path="/activities" element={<ActivityPage/>}/>
        <Route/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
