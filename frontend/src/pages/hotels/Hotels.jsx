import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import "./Hotels.css";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

const Hotels = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);
  console.log(date,"fasd")
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="lsItem">
              <label>Check-in/out</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>
              {openDate && <DateRange
                onChange={(item) => setDate([item.selection])}
                minDate={new Date()}
                ranges={date}
              />}
            </div>
            <div className="lsItem">
                <label>Options</label>
                <div className="lsItemOption">
                    <label>Min Price (per night)</label>
                    <input className="optionInput" type="text" />
                </div>
                <div className="lsItemOption">
                    <label>Max Price (per night)</label>
                    <input className="optionInput" type="text"/>
                </div>
                <div className="lsItemOption">
                    <label>Adult</label>
                    <input className="optionInput" type="text" placeholder={options.adult}/>
                </div>
                <div className="lsItemOption">
                    <label>Children</label>
                    <input className="optionInput" type="text" placeholder={options.childrens}/>
                </div>
                <div className="lsItemOption">
                    <label>Room</label>
                    <input className="optionInput" type="text" placeholder={options.room}/>
                </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
