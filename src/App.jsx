import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import config from './conf/conf'
import authService from './appWrite/authService'
import {useDispatch, useSelector} from 'react-redux'
import { login, logout } from './store/authSlice'
import { Header, Footer } from './components/index'
import { Outlet } from 'react-router-dom'

function App() {

  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()  
  
   useEffect(()=>{
    authService.getCurrentUser()
    .then((data)=>{
      if(data){
        dispatch(login(data))
      }
      else{
        dispatch(logout())
      }
      
    })
    .finally(setLoading(false))

   },[])
 

  return !loading ? ( 
  <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
        <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
