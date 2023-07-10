import './index.css'

const TravelPackage = props => {
  const {eachDetails} = props
  const {name, description, imageUrl} = eachDetails
  return (
    <li className="item">
      <img src={imageUrl} alt={name} className="img" />
      <h1 className="name">{name}</h1>
      <p className="description">{description}</p>
    </li>
  )
}

export default TravelPackage
