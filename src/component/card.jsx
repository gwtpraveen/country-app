import "../style/css/card.css";

const Card = ({data, getBigCard}) => {
    const {name, population, region, capital, flags : {png}} = data;
    return ( 
        <div className="card" onClick={() => getBigCard(data)}>
            <img src={png} alt="" />
            <div className="cardDetails">
                <h2 className="h2">{name}</h2>
                <p className="dataRow">
                    <span className="bold">Population: </span>{population.toLocaleString()}
                </p>
                <p className="dataRow">
                    <span className="bold">Region: </span>{region}
                </p>
                <p className="dataRow">
                    <span className="bold">Capital: </span>{capital}
                </p>
            </div>
        </div>
     );
}
 
export default Card;