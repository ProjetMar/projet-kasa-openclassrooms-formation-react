import React from 'react'
//import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Propos from './Pages/Propos'
import Logement from './Pages/Logement'
import MainLayout from './Components/MainLayout'
import NotFound from './Pages/NotFound'
const root = createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                 <Route path="/" element={<MainLayout><Home /></MainLayout>}/>
                 <Route path="/propos" element={<MainLayout><Propos /></MainLayout>}/>
                 <Route path="/pages/Logement/:id" element={<MainLayout><Logement/></MainLayout>}/>
                 <Route path="*" element={<MainLayout><NotFound /></MainLayout>} />
            </Routes>
        </Router>
    </React.StrictMode>,
)

