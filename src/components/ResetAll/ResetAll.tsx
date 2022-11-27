import { Dispatch, SetStateAction } from "react"

type Props = {
  setQuery: Dispatch<SetStateAction<string>>,
  setSelectedCode: Dispatch<SetStateAction<string>>,
  setIsDesc: Dispatch<SetStateAction<boolean>>,
  };

export const ResetAll: React.FC<Props> = ({setQuery, setSelectedCode, setIsDesc}) => {

    const handleResetAll = () => {
        setQuery('');
        setSelectedCode('');
        setIsDesc(true);
    }

    return (
      <button onClick={handleResetAll}>
      Reset button
    </button>
    )
  }