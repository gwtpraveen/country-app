import './App.css';
import Card from './component/card';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';

function App() {

  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then(res => setFetchedData(res.data));
  }, []);
  
  
  console.log(fetchedData)

  return (
    <div className="App">
    {fetchedData.length !== 0 && fetchedData.map(item => <Card key={item.name} data={item}/>)}
    </div>
  );
}

export default App;
