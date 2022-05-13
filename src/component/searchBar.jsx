import DropDown from "./dropDown";
import "../style/css/searchBar.css";

const SearchBar = ({regions, setFilterRegion, setUserSearch}) => {
    const hadleFormSubmit = (e) => {
        e.preventDefault();
        const userInput = e.target.firstElementChild.lastElementChild;
        if (userInput.value) {
            setUserSearch(userInput.value.trim().toLowerCase());
        }
        userInput.value = null;
    }

    return ( 
        <div className="searchBar">
            <form method="post" onSubmit={hadleFormSubmit} className="form">
                <div className="formGroup">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" name="country" className="search" placeholder="Search for a country..." autoComplete="off"/>
                </div>
            </form>
            <DropDown regions={regions} setFilterRegion={setFilterRegion}/>
        </div>
     );
}
 
export default SearchBar;
