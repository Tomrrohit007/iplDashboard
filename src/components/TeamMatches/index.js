import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch/index'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    latestMatchesDetails: {},
    recentMatches: [],
    teamBannerUrl: '',
    isLoading: true,
  }

  componentDidMount() {
    this.getTeam()
  }

  getTeam = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const {latest_match_details, recent_matches, team_banner_url} = data

    const eachItem = latest_match_details

    const latestMatchesDetailss = {
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      date: eachItem.date,
      firstInnings: eachItem.first_innings,
      id: eachItem.id,
      manOfTheMatch: eachItem.man_of_the_match,
      matchStatus: eachItem.match_status,
      result: eachItem.result,
      secondInnings: eachItem.second_innings,
      umpires: eachItem.umpires,
      venue: eachItem.venue,
    }
    const recentMatches = recent_matches.map(eachItem => ({
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      date: eachItem.date,
      firstInnings: eachItem.first_innings,
      id: eachItem.id,
      manOfTheMatch: eachItem.man_of_the_match,
      matchStatus: eachItem.match_status,
      result: eachItem.result,
      secondInnings: eachItem.second_innings,
      umpires: eachItem.umpires,
      venue: eachItem.venue,
    }))
    this.setState({
      latestMatchesDetails: latestMatchesDetailss,
      recentMatches: recentMatches,
      teamBannerUrl: team_banner_url,
      isLoading: false,
    })
  }

  render() {
    const {
      teamBannerUrl,
      recentMatches,
      latestMatchesDetails,
      isLoading,
    } = this.state
    console.log(recentMatches)
    return (
      <div className="team-matches-cont">
        {isLoading ? (
          <div testid="loader">
            {' '}
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <div className="team-matches">
            <img className="banner" src={teamBannerUrl} alt="team banner" />
            <p className="latest-match">Latest Matches</p>
            <LatestMatch latestMatchesDetails={latestMatchesDetails} />
            <ul className="card-list">
              {recentMatches.map(eachItem => (
                <MatchCard eachItem={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
