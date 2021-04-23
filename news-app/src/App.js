import { useState, useEffect } from 'react'

import ItemsList from "./components/ItemsList";
import Details from "./components/Details";
import Header from "./components/Header";

var isMobile = window.innerWidth >= 767 ? false : true;

function App() {

  const [data, setData] = useState([]);
  const [id, setId] = useState(null);
  const [currentData, setCurrentData] = useState(null);

  const loadData = async () => {
    const data1 = await fetch("http://img.staging.medscape.com/pi/iphone/testassets/sampleData.json");
    const res = await data1.json();
    setData(res.items)
  }

  useEffect(() => {
    loadData()
  }, [])


  useEffect(() => {
    setCurrentData(data.filter(el => id === el.title)[0]);
  }, [id, data])


  return (
    <div className="App">
      <Header />
      <div className="content-wrapper">
        <div className="container">
          {isMobile ?
            !id ? <ItemsList data={data} id={id} setId={setId} /> : null : <ItemsList data={data} id={id} setId={setId} />
          }
          {isMobile ?
            id ? <Details currentData={currentData} setId={setId} /> : null : <Details currentData={currentData} />
          }
        </div>
      </div>
    </div>
  );
}

export default App;
