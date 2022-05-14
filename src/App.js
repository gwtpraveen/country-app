import './App.css';
import CardsContainer from './component/cardsContainer';
import Header from './component/header';
import SearchBar from './component/searchBar';
import BigCard from './component/bigCard';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';

function App() {

  const [fetchedData, setFetchedData] = useState([]);
  const [darkTheme, setDarkTheme] = useState(false);
  const [filterRegion, setFilterRegion] = useState("");
  const [userSearch, setUserSearch] = useState("");
  const regions = useRef([]);
  const countryCodes = useRef({});

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
        newData.forEach(item => {countryCodes.current[item.alpha3Code] = item.name});
        
        return newData;
      });
    });
  }, []);


  const handleReset = () => {
    setFilterRegion("");
    setUserSearch("");
  };


  const handleUserSearch = value => {
    setUserSearch(value);
  };


  const handleTheme = value => {
    setDarkTheme(value);
    if (value) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };


  // filtering the data 
  let filterdData = fetchedData;
  if (filterRegion) {
    filterdData = filterdData.filter(item => item.region === filterRegion);
  }
  if (userSearch) {
    filterdData = filterdData.filter(item => item.name.toLowerCase() === userSearch);
  }

  console.log(filterdData[8]);
  console.log(countryCodes.current)
  return (
    <>
      <Header darkTheme={darkTheme} setDarkTheme={handleTheme} setReset={handleReset}/>
      <SearchBar regions={regions.current} setFilterRegion={setFilterRegion} setUserSearch={handleUserSearch}/>
      {/* <CardsContainer data={filterdData}/> */}
      {filterdData.length !== 0 && <BigCard data={filterdData[8]} code={countryCodes.current}/>}
    </>

  );
}

export default App;
