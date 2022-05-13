import "../style/css/dropdown.css";

const DropDown = ({regions}) => {
    return ( 
        <div className="dropdown">
            <button 
                className="dropbtn" 
                onClick={e => {
                    e.target.parentElement.classList.toggle("show");}
            }>
                Dropdown 
                <i className="fa-solid fa-angle-down"></i>
            </button>
            <div className="dropdown-content">
                {regions.length > 0 && regions.map(item => <p>{item}</p>)}
            </div>
        </div>
     );
}
 
export default DropDown;