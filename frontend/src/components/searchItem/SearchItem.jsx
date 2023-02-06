import React from "react";
import "./SearchItem.css"; 
const SearchItem = () => {
    return (
        <div className="searchItem">
            <img className="siImg" src="https://cf.bstatic.com/xdata/images/hotel/square200/420196551.webp?k=5b1cb341432d4d37c07bf5b8aa6c650d4ee5ccf1fc88fadd08f02197fac6521d&o=&s=1" alt=""/>
            <div className="siDesc">
                <h1 className="siTitle">Tower street Apartments</h1>
                    <span className="siDistance">500m from center</span>
                    <span className="siTaxiOp">Free airport taxi</span>
                    <span className="siSubtitle">Studio Apartment  with Air conditioning</span>
                    <span className="siFeatures">Entire studio > 1 bathroom > 21m 1 full bed</span>
                    <span className="siCancelOp">Free Cancellation</span>
                    <span className="siCancelOpSubTitle">You can cencel later, so lock in this great pric today!</span>
            </div>
            <div className="siDetails">
                Details
            </div>
        </div>
    )
}

export default SearchItem;