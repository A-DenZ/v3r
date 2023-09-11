
import { Routes, Route } from 'react-router-dom'
import Admin from './pages/Admin/Admin'
import Dashboard from './pages/Admin/Dashboard/Dashboard'
import Forms from './pages/Admin/Forms/Forms'
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

        <Route path='formulaires' element={<Forms/>}>
          {/* <Route path={`:${id}`}/> */}
          <Route path='nouveau'/>
        </Route>

        <Route path='reponse'>
          {/* <Route path={`:${id}`}/> */}
        </Route>

        <Route path='partage'>
          <Route path='nouveau'/>
        </Route>

      </Route>
    </Routes>
    </>
  )
}

export default App