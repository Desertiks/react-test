import React, { useEffect, useState } from "react";
import './ListItems.css';

export const ListItems = ({items, selectedCode, setSelectedCode}) => {

    const [holidays, setHolidays] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function getRespose() {
          try {
            setIsLoading(true);
            const response = await fetch(`https://date.nager.at/api/v3/NextPublicHolidays/${selectedCode}`);
            const dataResponse = await response.json();
            setHolidays(dataResponse);
          } catch (_) {
            alert('Fetch error');
          }
          finally {
            setIsLoading(false);
          }
      
        }
        if (selectedCode) {
            getRespose();
        }
        }, [selectedCode]);
  
    const handleSetCode = (code) => {
      if (code === selectedCode) {
        setSelectedCode('');
        return;
      }
      setSelectedCode(code);
    }

    return (
      <ul>
      {items.map(item =>
        (<React.Fragment key={item.countryCode}>
          <li onClick={() => handleSetCode(item.countryCode)} className="li-countries">{`Name: ${item.name} | Country Code: ${item.countryCode}`}</li>
          <br />
          {(selectedCode === item.countryCode) && isLoading && (
          <div className="loader"></div>
          )}
          {(selectedCode === item.countryCode) && !isLoading && (
            <>
            <ul>
                    {holidays.map((holiday, index) => (
                        <li key={index}>
                        {holiday.name}
                        </li>
                    ))}
            </ul>
            </>
          )}
          </React.Fragment>
        )
        )}
      </ul>
    )
  }