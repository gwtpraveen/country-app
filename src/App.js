import './App.css';
import CardsContainer from './component/cardsContainer';
import Header from './component/header';
import SearchBar from './component/searchBar';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';

function App() {

  const [fetchedData, setFetchedData] = useState([]);
  const [darkTheme, setDarkTheme] = useState(false);
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
  

  return (
    <>
      <Header darkTheme={darkTheme}/>
      <SearchBar regions={regions.current}/>
      <CardsContainer data={fetchedData}/>
    </>

  );
}

export default App;
