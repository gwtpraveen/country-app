import CardsContainer from './component/cardsContainer';
import Header from './component/header';
import SearchBar from './component/searchBar';
import BigCard from './component/bigCard';
import NotFound from './component/notFound';
import Loading from './component/loading';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';

function App() {

  const [fetchedData, setFetchedData] = useState([]);
  const [darkTheme, setDarkTheme] = useState(false);
  const [filterRegion, setFilterRegion] = useState("");
  const [userSearch, setUserSearch] = useState("");
  const [displayBigCard, setDisplayBigCard] = useState(false);
  const [bigCardData, setBigCardData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const regions = useRef([]);
  const countryCodes = useRef({});
  const countryNames = useRef([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then(res => {
      setFetchedData(preVal => {
        // fetched data from the server
        const newData = res.data;

        // filtering regions for the dropdown 
        newData.forEach(item => {
          const currentRegion = item.region;
          if (!regions.current.includes(currentRegion)) {
            regions.current.push(currentRegion);
          }
        });

        // get country codes and country names 
        newData.forEach(item => {
          countryCodes.current[item.alpha3Code] = item.name;
          if (!countryNames.current.includes(item.name.toLowerCase())) {
            countryNames.current.push(item.name.toLowerCase());
          }
        });

        setIsLoading(false);
        return newData;
      });
    });
  }, []);


  const handleReset = () => {
    setFilterRegion("");
    setUserSearch("");
    setDisplayBigCard(false);
  };


  // handle user search 
  const handleUserSearch = value => {
    setUserSearch(value);
  };


  // handle theme change 
  const handleTheme = value => {
    setDarkTheme(value);
    if (value) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };


  // show bigcard when use click similar result link on the not found page 
  const handleLinkClick = (countryName) => {
    setUserSearch(countryName);
    const countryData = fetchedData.filter(item => item.name.toLowerCase() === countryName);
    if (countryData.length === 1) {
      setBigCardData(countryData[0]);
      setDisplayBigCard(true);
    }
  }


  // show big card 
  const handleGetBigCard = (data) => {
    setBigCardData(data);
    setDisplayBigCard(true);
  }

  
  // show result when user click border buttons on big card 
  const handleBorder = (name) => {
    const country = fetchedData.filter(item => item.name === name);
    setBigCardData(country[0]);
  }


  // filtering the data 
  let filterdData = fetchedData;
  if (filterRegion) {
    filterdData = filterdData.filter(item => item.region === filterRegion);
  }
  if (userSearch) {
    filterdData = filterdData.filter(item => item.name.toLowerCase() === userSearch);
  }


  return (
    <>
      <Header darkTheme={darkTheme} setDarkTheme={handleTheme} setReset={handleReset}/>
      <SearchBar 
        regions={regions.current} 
        setFilterRegion={setFilterRegion} 
        setUserSearch={handleUserSearch} 
        displayBigCard={displayBigCard}
        setReset={handleReset}
      />
      { isLoading ? 
          <Loading/> : 
          filterdData.length !== 0 ? 
              !displayBigCard ? 
                <CardsContainer data={filterdData} getBigCard={handleGetBigCard}/> :
              <BigCard data={bigCardData} code={countryCodes.current} onBorderBtn={handleBorder}/> : 
          <NotFound serachedCountry={userSearch} setReset={handleReset} countrys={countryNames.current} onLinkClick={handleLinkClick}/>
        }
    </>
  );
}

export default App;
