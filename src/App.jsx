import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer.jsx'

function App() {


  return (
    <>
     <Header/>
     <main>
      <Outlet/>
     </main>
     <Footer/>
    </>
  )
}

export default App