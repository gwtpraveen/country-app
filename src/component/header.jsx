import "../style/css/header.css";

const Header = ({darkTheme, setReset, setDarkTheme}) => {
    return ( 
        <header className="header">
            <div className="container">
                <h1 className="h1" onClick={setReset}>Where in the world?</h1>
                <button className="themeSwitch" title="Switch your theme" onClick={() => setDarkTheme(!darkTheme)}>
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
