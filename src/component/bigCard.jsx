const BigCard = ({data}) => {
    const {flags: {png}, name, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages, borders} = data;

    return ( 
        <div>
            <img src={png} alt={`&{name} 's flag`} />
            <div>
                <h2>{name}</h2>
                <div>
                    <p><span>Native Name: </span>{nativeName}</p>
                    <p><span>Population: </span>{population.toLocaleString()}</p>
                    <p><span>Region: </span>{region}</p>
                    <p><span>Sub Region: </span>{subregion}</p>
                    <p><span>Capital: </span>{capital}</p>
                </div>
                <div>
                    <p><span>Top Level Domain: </span>{topLevelDomain.join(", ")}</p>
                    <p><span>Currencies: </span>{currencies.map(item => item.name).join(", ")}</p>
                    <p><span>Languages: </span>{languages.map(item => item.name).join(", ")}</p>
                </div>
                <div>
                    <p>Border Countrys: </p>
                    <div>
                        {borders.map(item => <button key={item}>{item}</button>)}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default BigCard;
