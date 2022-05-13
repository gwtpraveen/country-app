import './App.css';
import CardsContainer from './component/cardsContainer';
import Header from './component/header';
import SearchBar from './component/searchBar';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';

function App() {

  const [fetchedData, setFetchedData] = useState([]);
  const [darkTheme, setDarkTheme] = useState(false);
  const [filterRegion, setFilterRegion] = useState("");
  const [userSearch, setUserSearch] = useState("");
  const regions = useRef([]);

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
      <Header darkTheme={darkTheme} setReset={handleReset}/>
      <SearchBar regions={regions.current} setFilterRegion={setFilterRegion} setUserSearch={handleUserSearch}/>
      <CardsContainer data={filterdData}/>
    </>

  );
}

export default App;
