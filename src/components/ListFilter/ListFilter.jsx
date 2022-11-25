import { useEffect, useState } from "react";

export const ListFilter = ({items, setVisibleData}) => {
    const [query, setQuery] = useState('');
  
    const handleSetQuery = (event) => {
      setQuery(event.target.value);
      console.log(query);
    }
  
    useEffect(()=> {
      const filtred = items.filter(item => {
        return item.name.toLowerCase().includes(query.toLowerCase());
      });
      setVisibleData(filtred);
    }, [query, items, setVisibleData]);
  
    return (
      <>
      <label htmlFor="search">Search text</label>
      <input value={query} onChange={handleSetQuery}/>
      </>
    )
  }