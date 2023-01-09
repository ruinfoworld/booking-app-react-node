import React, { useState } from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPercent,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import format from "date-fns/format";
import { useAsyncError, useNavigate } from "react-router-dom";

const Header = ({type}) => {
  const [destination, setDestination] = useState("")
  const [openDates, setOpenDates] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const navigate = useNavigate();
  const [openOptions, setOpenOpotions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    childrens: 0,
    room: 1,
  });

  const handleOptions = (name, operation) => {
    setOptions(prev => {
        return  {
            ...prev,
            [name] : operation === "i" ? options[name] + 1 : options[name] - 1
        }
    })
  }

  const handleSearch = () => {
    navigate("/hotels", {state : {destination, date, options}})
  }

  return (
    <div className="header">
      <div className={type === 'list' ? "headerContainer listmode" : "headerContainer"}>
        <div className="headerList">
          <div className="headerListItems active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItems">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItems">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>
          <div className="headerListItems">
            <FontAwesomeIcon icon={faBed} />
            <span>Attraction</span>
          </div>
          <div className="headerListItems">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
          </div>
        </div>
        { type !== 'list' && <>
        <h1 className="headerTitle">Find your next stay</h1>
        <p className="headerDesc">
          Search deals on hotels, homes, and much more...
        </p>
        <button className="headerButton">Register / Login</button>
        <div className="headerSearch">
          <div className="headerSearchItems">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="headerSearchInput"
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
          <div className="headerSearchItems">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span
              onClick={() => setOpenDates(!openDates)}
              className="headerSearchText"
            >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
              date[0].endDate,
              "MM/dd/yyyy"
            )}`}</span>
            {openDates && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                minDate={new Date()}
                className="dates"
              />
            )}
          </div>
          <div className="headerSearchItems">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span onClick={() => setOpenOpotions(!openOptions)} className="headerSearchText">{`${options.adult} adults . ${options.childrens} children . ${options.room} room`}</span>
            {openOptions && <div className="options">
              <div className="optionItems">
                <span className="optionText">Adult</span>
                <div className="optionCounter">
                  <button className="optionCounterButton" onClick={() => handleOptions("adult", "d")} disabled={options.adult <= 1}>-</button>
                  <span className="optionCounterNumber">{options.adult}</span>
                  <button className="optionCounterButton" onClick={() => handleOptions("adult", "i")}>+</button>
                </div>
              </div>
              <div className="optionItems">
                <span className="optionText">Children</span>
                <div className="optionCounter">
                  <button className="optionCounterButton" onClick={() => handleOptions("childrens", "d")} disabled={options.childrens < 1}>-</button>
                  <span className="optionCounterNumber">{options.childrens}</span>
                  <button className="optionCounterButton" onClick={() => handleOptions("childrens", "i")}>+</button>
                </div>
              </div>
              <div className="optionItems">
                <span className="optionText">Room</span>
                <div className="optionCounter">
                  <button className="optionCounterButton" onClick={() => handleOptions("room", "d")} disabled={options.room <= 1}>-</button>
                  <span className="optionCounterNumber">{options.room}</span>
                  <button className="optionCounterButton" onClick={() => handleOptions("room", "i")}>+</button>
                </div>
              </div>
            </div>}
          </div>
          <div className="headerSearchItems">
            <button className="headerButton" onClick={handleSearch}>Search</button>
          </div>
        </div></>}
      </div>
    </div>
  );
};
export default Header;
