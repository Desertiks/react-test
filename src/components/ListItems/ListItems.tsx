import React, { useEffect, useState, Dispatch, SetStateAction, } from "react";
import { Countrie } from "../../types/Countrie";
import { Holidays } from "../../types/Holiday";
import './ListItems.css';

type Props = {
  items: Countrie[],
  selectedCode: string,
  setSelectedCode: Dispatch<SetStateAction<string>>,
}

export const ListItems: React.FC<Props> = ({items, selectedCode, setSelectedCode}) => {

    const [holidays, setHolidays] = useState<string []>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function getRespose() {
          try {
            setIsLoading(true);
            const response = await fetch(`https://date.nager.at/api/v3/NextPublicHolidays/${selectedCode}`);
            const dataResponse = await response.json();
            console.log(dataResponse);
            const holidaysName = dataResponse.map((holiday: Holidays) => holiday.name);
            console.log(holidaysName);
            setHolidays(holidaysName);
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
  
    const handleSetCode = (code: string) => {
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
                        {holiday}
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