import React, { useState, useEffect } from 'react'
import { ListFilter } from './components/ListFilter/ListFilter';
import { ListItems } from './components/ListItems/ListItems';
import { ListSort } from './components/ListSort/ListSort';

// >>>>> Instructions:
// Fork the exercises to create your own personal workspace.
// You will need to create an account. The tool is free.

// ToDo:
// #1 Display full list of items fethced from the API.
// #2 Filter fetched items based on 'Search text' input.
// #3 By clicking on country from the 'Search text' need to fetch and display holidays(selectedCountryHolidays) in the selected county.
// Endpoint for holidays: https://date.nager.at/api/v3/NextPublicHolidays/{countryCode}
// #4 Add a Sort button next to the input. It should sort the list of countries that the user sees on the screen in desc or asc order.
// Default order os desc. The name of the button should indicate what type of sorting will be performed when clicked.
// #5 Next to the Sort button, add a Reset button to empty the app
// * You are welcome to edit/refactor any piece of code below if you believe it can be improved or to express your code style.

// Notes:
// Feel free to edit the code base below as you like 👍 
// API description: https://date.nager.at/swagger/index.html
// To see your changes click RUN on top menu



// >>>>>>> Coding part goes next <<<<<<<<

/*
  #1 Place component ListItem here and use it in ListItems component below to display items
*/



export const App = () => {
  const [data, setData] = useState([]);
  const [visibleData, setVisibleData] = useState([]);
  // const [selectedCountryHolidays, setselectedCountryHolidays] = useState([]);
  
  
  useEffect(() => {
  async function getRespose() {
    try {
      const response = await fetch('https://date.nager.at/api/v3/AvailableCountries');
      const dataResponse = await response.json();
      setData(dataResponse);
      setVisibleData(dataResponse.sort((a, b) => a.name.localeCompare(b.name)));
      console.log(dataResponse);
    } catch (_) {
      console.log('Fetch error');
    }

  }
  getRespose();
  }, []);


  return (
    <div className="container">
      <h1>React Test</h1>
      <div className="body">
        <div className="search-area">
          <section className="search-field" >
            <ListFilter items={data} setVisibleData={setVisibleData}/>
            <ListSort setVisibleData={setVisibleData} data={data}/>
            <button>
              Reset button
              {/* #5 Reset button */}
            </button>
          </section>
          <ListItems items={visibleData}></ListItems>
        </div>
        <div className="info-area">
        </div>
      </div>
    </div>
  );
}