import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TravelPackage from '../TravelPackage'

import './index.css'

class TravelGuide extends Component {
  state = {
    isLoading: true,
    travelList: [],
  }

  componentDidMount() {
    this.getTravelGuide()
  }

  getTravelGuide = async () => {
    const url = 'https://apis.ccbp.in/tg/packages'
    const response = await fetch(url)

    if (response.ok) {
      const data = await response.json()
      // console.log(data)
      const formattedData = data.packages.map(each => ({
        id: each.id,
        description: each.description,
        imageUrl: each.image_url,
        name: each.name,
      }))
      this.setState({isLoading: false, travelList: formattedData})
    }
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  renderTravelGuide = () => {
    const {travelList} = this.state
    console.log(travelList)
    return (
      <ul className="travel-container">
        {travelList.map(each => (
          <TravelPackage key={each.id} eachDetails={each} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="container">
        <h1 className="btn-heading">Travel Guide</h1>
        {isLoading ? this.renderLoader() : this.renderTravelGuide()}
      </div>
    )
  }
}
export default TravelGuide
