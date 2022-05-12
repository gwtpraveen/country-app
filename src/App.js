import './App.css';
import CardsContainer from './component/cardsContainer';
import Header from './component/header';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';

function App() {

  const [fetchedData, setFetchedData] = useState([]);
  const [darkTheme, setDarkTheme] = useState(false)

  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then(res => setFetchedData(res.data));
  }, []);
  
  
  console.log(fetchedData)

  return (
    <>
      <Header darkTheme={darkTheme}/>
      <CardsContainer data={fetchedData}/>
    </>

  );
}

export default App;
