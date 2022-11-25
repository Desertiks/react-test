import React, { useEffect, useState } from "react";

export const ListItems = ({items}) => {

    const [selectedCode, setSelectedCode] = useState('');
    const [holidays, setHolidays] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function getRespose() {
          try {
            setIsLoading(true);
            const response = await fetch(`https://date.nager.at/api/v3/NextPublicHolidays/${selectedCode}`);
            const dataResponse = await response.json();
            setHolidays(dataResponse);
            setIsLoading(false);
          } catch (_) {
            alert('Fetch error');
          }
      
        }
        if (selectedCode) {
            getRespose();
        }
        }, [selectedCode]);
  
    const handleSetCode = (code) => {
      setSelectedCode(code);
    }
    return (
      <ul>
      {items.map(item =>
        (<React.Fragment key={item.countryCode}>
          <li onClick={() => handleSetCode(item.countryCode)}>{`Name: ${item.name} | Country Code: ${item.countryCode}`}</li>
          {(selectedCode === item.countryCode) && !isLoading && (
            <ul>
                    {holidays.map(holiday => (
                        <li>
                        {holiday.name}
                        </li>
                    ))}
            </ul>
          )}
          </React.Fragment>
        )
        )}
      </ul>
    )
  }