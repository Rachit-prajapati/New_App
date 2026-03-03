import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Navbar from './Layout/Navbar.jsx'
import Footer from './Layout/Footer.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Navbar/>
    <App />
    <Footer/>
    </BrowserRouter>
)
