import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'

function App() {

  return (
    <>
      <Header />
      <div className='md:min-h-[calc(100vh-300px)]'>
        <Outlet />
      </div>

      <Footer />
    </>
  )
}

export default App
