import { useEffect } from "react"

export const ListSort = ({setVisibleData, isDesc, setIsDesc}) => {

    const handleChangeSort = () => {
        setIsDesc((State) => !State);
    };

    useEffect(()=> {
        if (isDesc) {
            setVisibleData((State) => ([...State].sort((a, b) => a.name.localeCompare(b.name))));
       } else {
           setVisibleData((State) => ([...State].sort((a, b) => b.name.localeCompare(a.name))));
       }
    }, [isDesc, setVisibleData])

  
    return (
        <button onClick={handleChangeSort}>
        Sort button {isDesc ? '[ASC]' : '[DESC]'}
      </button>
    )
  }