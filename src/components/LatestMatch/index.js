import './index.css'

const LatestMatch = props => {
  const {latestMatchesDetails} = props
  return (
    <div className="card">
      <div className="left-part">
        <p className="team-name">{latestMatchesDetails.competingTeam}</p>
        <p className="date">{latestMatchesDetails.date}</p>
        <p className="location">{latestMatchesDetails.venue}</p>
        <p className="result">{latestMatchesDetails.result}</p>
      </div>
      <img
        className="competing-team-logo"
        src={latestMatchesDetails.competingTeamLogo}
        alt={latestMatchesDetails.competingTeam}
      />
      <div className="right-part">
        <p className="question">First Innings</p>
        <p className="answer">{latestMatchesDetails.firstInnings}</p>
        <p className="question">Second Innings</p>
        <p className="answer">{latestMatchesDetails.secondInnings}</p>
        <p className="question">Man Of The Match</p>
        <p className="answer">{latestMatchesDetails.manOfTheMatch}</p>
        <p className="question">Umpires</p>
        <p className="answer">{latestMatchesDetails.umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
