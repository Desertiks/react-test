import { useEffect } from "react";

export const ListFilter = ({items, setVisibleData, query, setQuery}) => {
  
    const handleSetQuery = (event) => {
      setQuery(event.target.value);
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