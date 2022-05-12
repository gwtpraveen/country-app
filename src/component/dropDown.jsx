import "../style/css/dropdown.css";

const DropDown = (props) => {
    return ( 
        <div className="dropdown">
            <button className="dropbtn">Dropdown <i class="fa-solid fa-angle-down"></i></button>
            <div className="dropdown-content">
                <p>Link 1</p>
                <p>Link 2</p>
                <p>Link 3</p>
            </div>
        </div>
     );
}
 
export default DropDown;