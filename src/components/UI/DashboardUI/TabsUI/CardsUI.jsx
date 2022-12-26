import PremiumCard from "../../../Common/Cards/PremiumCard"

const CardsUI = () => {
  return (
    <div className="cards-main">
        <h1 className="row-heading">Premium Card</h1>
        <div className="row">
            <PremiumCard design='original'/>
            <PremiumCard design='red'/>
            <PremiumCard design='green'/>
            <PremiumCard design='blue'/>
            <PremiumCard design='orange'/>
            <PremiumCard design='yellow'/>
            <PremiumCard design='white'/>
        </div>
        <h1 className="row-heading">Classic Card</h1>
        <div className="row">
        </div>
    </div>
  )
}

export default CardsUI