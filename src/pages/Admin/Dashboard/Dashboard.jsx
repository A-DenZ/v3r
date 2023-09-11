import './styles.scss'



const Dashboard = () => {
  return (
    <div id="dashboard">
      <div className="card">
        <div className="first-group">
          <p className='icon'>THIS IS A BELL</p>
          <p className='main-title'>Vous avez x<br/> nouvelles notifications</p>
        </div>
        <p className='link-to'>Ouvrir le panneau de notifications</p>
      </div>
      <div className="card">
        <div className="first-group">
          <p className='icon'>THIS IS A CALENDAR</p>
          <p className='main-title'>Vous avez x<br/> nouveaux formulaires</p>
        </div>
        <p className='link-to'>Afficher la liste des formulaires</p>
        
      </div>

      <div className="card" id='stats-card'>

      </div>

    </div>
  )
}

export default Dashboard
