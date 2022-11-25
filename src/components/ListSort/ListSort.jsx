import { useState } from "react"

export const ListSort = ({setVisibleData}) => {

    const [isDesc, setIsDesc] = useState(false);

    const handleChangeSort = () => {
        setIsDesc((State) => !State);
        sortData();
    };

    const sortData = () => {
        if (isDesc) {
             setVisibleData((State) => ([...State].sort((a, b) => a.name.localeCompare(b.name))));
        } else {
            setVisibleData((State) => ([...State].sort((a, b) => b.name.localeCompare(a.name))));
        }
    };
  
    return (
        <button onClick={handleChangeSort}>
        Sort button
      </button>
    )
  }