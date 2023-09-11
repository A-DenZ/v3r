
import { Routes, Route } from 'react-router-dom'
import Admin from './pages/Admin/Admin'
import Dashboard from './pages/Admin/Dashboard/Dashboard'
import SharingZone from './pages/Admin/SharingZone/SharingZone'
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<App/>}/>
     
      <Route path="/admin" element={<Admin />}>
        <Route index element={<Dashboard/>}/>

        <Route path='formulaires'>
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