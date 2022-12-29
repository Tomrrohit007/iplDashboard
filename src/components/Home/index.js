import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import TeamCard from '../TeamCard/index'

class Home extends Component {
  state = {teamData: [], isLoading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updateData = teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamData: updateData, isLoading: false})
  }

  render() {
    const {teamData, isLoading} = this.state
    return (
      <div className="main-cont">
        <h1 className="heading">
          <img
            className="ipl-logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
            alt="ipl logo"
          />
          IPL Dashboard
        </h1>
        <div className="bottom-section">
          {isLoading ? (
            <div testid="loader">
              {' '}
              <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
            </div>
          ) : (
            <ul className="team-list">
              {teamData.map(eachItem => (
                <TeamCard eachItem={eachItem} key={eachItem.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Home
