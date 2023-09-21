// libraries
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import WebFont from 'webfontloader'

// pages & components
import PreLoader from './components/loaders/PreLoader/PreLoader'
import Login from './pages/Login/Login'
import Admin from './pages/Admin/Admin'
import Dashboard from './pages/Admin/Dashboard/Dashboard'
import SharingZone from './pages/Admin/SharingZone/SharingZone'
import Forms from './pages/Admin/Forms/Forms'


const App = () => {
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Poppins:300,400,500,600,700,800,900']
      }
    });
  }, []);

  return (
    <>
    {/* preloader */}
    {loader 
    ?
    <PreLoader hide={() => setLoader(false)} />
    :
    <Routes>
      <Route path="/" element={<Login />}/>
     
      <Route path="/admin" element={<Admin />}>
        <Route index element={<Dashboard/>}/>

        <Route path='formulaires' element={<Forms/>}>
          {/* <Route path={`:${id}`}/> */}
          <Route path='nouveau'/>
        </Route>

        <Route path='reponse'>
          {/* <Route path={`:${id}`}/> */}
        </Route>

        <Route path='partage' element={<SharingZone/>}>
          <Route path='nouveau'/>
        </Route>

      </Route>
    </Routes>
    }

    </>
  )
}

export default App