import './App.css';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import seating_chart from './data/seating_chart.json'


function App() {
  const [seatingList] = useState(seating_chart)
  const [query, setQuery] = useState("")
  
  const filteredList = seatingList.filter(item=> {
    return item.Name.toLowerCase().includes(query.toLowerCase())
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Welcome to Heather and Sarah's Wedding
        </h1>
        <p>
          Find your table below
        </p>
      </header>
      <div className='search-bar'>
        <input type='text' className='search-query' placeholder='Search by name' onChange={e => setQuery(e.target.value)} />
        <button className='search-button'>
          <FaSearch />
        </button>
      </div>
      <div className='seating-chart'>
        <div className='seating-labels'><p>Name</p><p>Table #</p></div>
        {filteredList.map(person => {
          return (
            <div className='person'><p>{person.Name}</p><p>{person.Table}</p></div>)
        })}
      </div>
    </div>
  );
}

export default App;
