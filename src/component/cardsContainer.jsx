import Card from "./card";
import "../style/css/cardsContainer.css"

const CardsContainer = ({data}) => {
    return ( 
        <div className="row">
            {data.length !== 0 && data.map(item => <Card key={item.name} data={item}/>)}
        </div>
     );
}
 
export default CardsContainer;