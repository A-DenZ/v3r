import { Outlet } from 'react-router-dom'
import SideBar from '../../components/navbars/SideBar/SideBar'
import './styles.scss'

const Admin = () => {

    
    return (
        <div id="admin">
            <SideBar />
            <main>
                <Outlet />
            </main>

        </div>
    )
}

export default Admin
