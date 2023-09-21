import './styles.scss'

import logo from '../../assets/images/logo.png'

const Login = () => {

    
    return (
        <div id='login'>
            <main>
                <img src={logo} alt="Logo Ville de Trois-Rivières" id="logo" />

                <h1>Connexion</h1>

                <form>
                    
                </form>
            </main>

            <svg className='circle-top' width="244" height="122" viewBox="0 0 244 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M244 0C244 67.3768 189.377 122 122 122C54.6232 122 0 67.3768 0 0H55.7031C55.8945 36.4701 85.4889 65.9552 122 65.9552C158.511 65.9552 188.106 36.4701 188.297 0H244Z" fill="#68B545"/>
            </svg>

            <svg className='circle-bot' width="244" height="122" viewBox="0 0 244 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 122C0 54.6232 54.6232 0 122 0C189.377 0 244 54.6232 244 122H188.297C188.106 85.5299 158.511 56.0448 122 56.0448C85.4888 56.0448 55.8945 85.5299 55.7031 122H0Z" fill="#68B545"/>
            </svg>
        </div>
    )
}

export default Login
