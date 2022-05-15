import "../style/css/bigCard.css";

const BigCard = ({data, code, onBorderBtn}) => {
    const {flags: {png}, name, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages, borders} = data;

    return ( 
        <div className="bigCard">
            <img src={png} alt={`&{name} 's flag`} className="flag"/>
            <div className="countryDetails">
                <h2 className="h2">{name}</h2>
                <div className="row">
                    <div className="col">
                        <p className="detail">
                            <span className="bold">Native Name: </span>{nativeName}
                        </p>
                        <p className="detail">
                            <span className="bold">Population: </span>{population.toLocaleString() || "--"}
                        </p>
                        <p className="detail">
                            <span className="bold">Region: </span>{region}
                        </p>
                        <p className="detail">
                            <span className="bold">Sub Region: </span>{subregion}
                        </p>
                        <p className="detail">
                            <span className="bold">Capital: </span>{capital || "--"}
                        </p>
                    </div>
                    <div className="col">
                        <p className="detail">
                            <span className="bold">Top Level Domain: </span>{topLevelDomain ? topLevelDomain.join(", ") : "--"}
                        </p>
                        <p className="detail">
                            <span className="bold">Currencies: </span>{currencies ? currencies.map(item => item.name).join(", ") : "--"}
                        </p>
                        <p className="detail">
                            <span className="bold">Languages: </span>{languages ? languages.map(item => item.name).join(", ") : "--"}
                        </p>
                    </div>
                </div>
                {<div className="borders">
                    <p className="bold">Border Countrys: </p>
                    <div className="borderBtns">
                        {borders ? borders.map(item => <button key={item} className="borderBtn" onClick={() => onBorderBtn(code[item])}>{code[item]}</button>) : "--"}
                    </div>
                </div>}
            </div>
        </div>
     );
}
 
export default BigCard;
