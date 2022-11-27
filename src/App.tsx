import React, { useState, useEffect } from 'react'
import { ListFilter } from './components/ListFilter/ListFilter';
import { ListItems } from './components/ListItems/ListItems';
import { ListSort } from './components/ListSort/ListSort';
import { ResetAll } from './components/ResetAll/ResetAll';
import { Countrie } from './types/Countrie';
import './App.css';
import 'bulma/css/bulma.css';

export const App = () => {
  const [data, setData] = useState<Countrie[]>([]);
  const [visibleData, setVisibleData] = useState<Countrie[]>([]);
  const [query, setQuery] = useState('');
  const [selectedCode, setSelectedCode] = useState('');
  const [isDesc, setIsDesc] = useState(true);


  useEffect(() => {
    async function getRespose() {
      try {
        const response = await fetch('https://date.nager.at/api/v3/AvailableCountries');
        const dataResponse = await response.json();
        setData(dataResponse);
        setVisibleData(dataResponse.sort((a: Countrie, b: Countrie) => a.name.localeCompare(b.name)));
      } catch (_) {
        alert('Fetch error');
      }

    }
    getRespose();
  }, []);

  return (
    <div className="container">
      <h1 className='title'>React Test</h1>
      <div className="body">
        <div className="search-area">
          <ListFilter
            items={data}
            setVisibleData={setVisibleData}
            query={query}
            setQuery={setQuery}
          />
          <div className='buttons buttons-margin'>
          <ListSort
            setVisibleData={setVisibleData}
            isDesc={isDesc}
            setIsDesc={setIsDesc}
          />
          <ResetAll
            setQuery={setQuery}
            setSelectedCode={setSelectedCode}
            setIsDesc={setIsDesc}
          />
          </div>
          <ListItems
            items={visibleData}
            selectedCode={selectedCode}
            setSelectedCode={setSelectedCode}
          />
        </div>
        <div className="info-area">
        </div>
      </div>
    </div>
  );
}