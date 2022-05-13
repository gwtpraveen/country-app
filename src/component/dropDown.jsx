import "../style/css/dropdown.css";

const DropDown = ({regions, setFilterRegion}) => {
    const handleFilterByRegion = e => {
        e.target.parentElement.parentElement.classList.toggle("show");
        setFilterRegion(e.target.innerText);
    };

    return ( 
        <div className="dropdown">
            <button 
                className="dropbtn" 
                onClick={e => {
                    const targetEleParentEl = e.target.parentElement;
                    if (targetEleParentEl.tagName === "DIV") {
                        targetEleParentEl.classList.toggle("show");
                    } else {
                        targetEleParentEl.parentElement.classList.toggle("show");
                    }
                }
            }>
                Filter by Region 
                <i className="fa-solid fa-angle-down"></i>
            </button>
            <div className="dropdown-content">
                {regions.map(item => <p key={item} onClick={handleFilterByRegion}>{item}</p>)}
            </div>
        </div>
     );
}
 
export default DropDown;
