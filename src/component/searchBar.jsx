import DropDown from "./dropDown";
import "../style/css/searchBar.css";

const SearchBar = ({regions}) => {
    return ( 
        <div className="searchBar">
            <form method="post">
                <div className="formGroup">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" name="country" id="country" placeholder="Search for a country..."/>
                </div>
            </form>
            <DropDown regions={regions}/>
        </div>
     );
}
 
export default SearchBar;