import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'

function App() {

  return (
    <>
      <Header />
      <div className="min-h-[75vh]">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
