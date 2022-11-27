import { useEffect, Dispatch, SetStateAction } from "react"
import { Countrie } from "../../types/Countrie"

type Props = {
setVisibleData: Dispatch<SetStateAction<Countrie[]>>,
isDesc: boolean,
setIsDesc: Dispatch<SetStateAction<boolean>>
};

export const ListSort: React.FC<Props> = ({setVisibleData, isDesc, setIsDesc}) => {

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