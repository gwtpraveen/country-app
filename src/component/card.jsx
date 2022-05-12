import "../style/css/card.css";

const Card = ({data}) => {
    const {name, population, region, capital, flags : {png}} = data;
    console.log(png)
    return ( 
        <div className="card">
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