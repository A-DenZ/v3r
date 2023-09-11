import { Outlet } from 'react-router-dom'
import SideBar from '../../components/navbars/SideBar/SideBar'
import './styles.scss'
import SecondaryBar from '../../components/navbars/SecondaryBar/SecondaryBar'

const Admin = () => {

    
    return (
        <div id="admin">
            <SideBar />
            <main>
                <SecondaryBar Title="Tableau de Bord"/>
                <Outlet />
            </main>

        </div>
    )
}

export default Admin
