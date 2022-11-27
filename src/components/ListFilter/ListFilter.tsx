import { useEffect, Dispatch, SetStateAction, ChangeEvent } from "react";
import { Countrie } from "../../types/Countrie";

type Props = {
  items: Countrie[],
  setVisibleData: Dispatch<SetStateAction<Countrie[]>>,
  query: string,
  setQuery: Dispatch<SetStateAction<string>>,
}

export const ListFilter: React.FC<Props> = ({items, setVisibleData, query, setQuery}) => {
  
    const handleSetQuery = (event: ChangeEvent<HTMLInputElement>) => {
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