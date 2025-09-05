import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from "./components/Footer";
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path = '/login' element = {<LoginPage />} />
      <Route path = '/register' element = {<RegisterPage />} />
      </Routes>
      <Footer />
      </Router>
    </>
  )
}

export default App
