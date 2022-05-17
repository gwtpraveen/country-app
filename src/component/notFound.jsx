import "../style/css/notFound.css";

const NotFound = ({serachedCountry, setReset}) => {
    return ( 
        <div className="notFound">
            <h2>We couldn't find a match for "{serachedCountry}". Please try another search</h2>
            <div>
                <h3 className="h3">Suggestions:</h3>
                <ul>
                    <li>Make sure all words are spelled correctly</li>
                    <li>Try different Keywords</li>
                </ul>
            </div>
            <button className="btn" onClick={setReset}><i className="fa-solid fa-house"></i>Home</button>
        </div>
     );
}
 
export default NotFound;