
import { Routes, Route } from 'react-router-dom'
import Admin from './pages/Admin/Admin'
import Dashboard from './pages/Admin/Dashboard/Dashboard'
import SharingZone from './pages/Admin/SharingZone/SharingZone'
import Responses from './pages/Admin/Responses/Responses'
import { useEffect } from 'react'
import WebFont from 'webfontloader'
function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Poppins:300,400,500,600,700,800,900']
      }
    });
  }, []);

  return (
    <>
    <Routes>
      <Route path="/" element={<App/>}/>
     
      <Route path="/admin" element={<Admin />}>
        <Route index element={<Dashboard/>}/>

        <Route path='reponses' element={<Responses/>}>
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
    </>
  )
}

export default App