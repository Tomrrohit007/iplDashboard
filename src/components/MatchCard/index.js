import './index.css'

const MatchCard = props => {
  const {eachItem} = props
  const classs = eachItem.matchStatus === 'Won' ? 'date win' : 'date lose'
  return (
    <li className="list-item">
      <img
        className="card-logo"
        src={eachItem.competingTeamLogo}
        alt={eachItem.competingTeam}
      />
      <p className="date compp">{eachItem.competingTeam}</p>
      <p className="result">{eachItem.result}</p>
      <p className={classs}>{eachItem.matchStatus}</p>
    </li>
  )
}

export default MatchCard
