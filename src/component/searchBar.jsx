import DropDown from "./dropDown";
import "../style/css/searchBar.css";

const SearchBar = (props) => {
    return ( 
        <div className="searchBar">
            <form method="post">
                <div className="formGroup">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" name="country" id="country" placeholder="Search for a country..."/>
                </div>
            </form>
            <DropDown/>
        </div>
     );
}
 
export default SearchBar;