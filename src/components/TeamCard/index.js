import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {eachItem} = props
  const {id, name, teamImageUrl} = eachItem
  return (
    <Link className="link" to={`/team-matches/${id}`}>
      <li className="card-item">
        <img className="team-logo" src={teamImageUrl} alt={name} />
        <p className="name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
