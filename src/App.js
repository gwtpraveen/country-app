import './App.css';
import CardsContainer from './component/cardsContainer';
import Header from './component/header';
import SearchBar from './component/searchBar';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';

function App() {

  const [fetchedData, setFetchedData] = useState([]);
  const [darkTheme, setDarkTheme] = useState(false);
  // const regions = useRef([]);
  const [regions, setRegions] = useState([])

  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then(res => {
      setFetchedData(preVal => {
        const newData = res.data;
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
  
  console.log("rendering")
  console.log("regions", regions)
  console.log(fetchedData)

  return (
    <>
      <Header darkTheme={darkTheme}/>
      <SearchBar regions={regions}/>
      <CardsContainer data={fetchedData}/>
    </>

  );
}

export default App;
