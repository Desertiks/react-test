export const ResetAll = ({setQuery, setSelectedCode, setIsDesc}) => {

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