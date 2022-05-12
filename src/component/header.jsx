import "../style/css/header.css";

const Header = ({darkTheme}) => {
    return ( 
        <header className="header">
            <div className="container">
                <h1 className="h1">Where in the world?</h1>
                <button className="themeSwitch">
                    { darkTheme ? 
                        <i className="fa-solid fa-moon"></i> :
                        <i className="fa-regular fa-moon"></i> } 
                    Dark Mode
                </button>
            </div>
        </header>
     );
}
 
export default Header;
