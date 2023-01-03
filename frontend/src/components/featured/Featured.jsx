import React from "react";
import "./Featured.css";

const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItems">
                <img className="featuredImg" src="https://cf.bstatic.com/xdata/images/city/540x270/957800.webp?k=6e50f4c36265ab07bf1c6498c298d8a9de40400f606365b83266a3e7ffe67877&o="/>
                <div className="featuredTitles">
                    <h1>Dublin</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
            <div className="featuredItems">
                <img className="featuredImg" src="https://cf.bstatic.com/xdata/images/city/540x270/823860.webp?k=ad78ae3df378d8246dc7c5a486520020f40ea92ca3b08569514092bd1ec34750&o="/>
                <div className="featuredTitles">
                    <h1>Truckee</h1>
                    <h2>456 properties</h2>
                </div>
            </div>
            <div className="featuredItems">
                <img className="featuredImg" src="https://cf.bstatic.com/xdata/images/city/540x270/689418.webp?k=d39081abcd45a070b313a85e992b6849b0503d7f1f7e4fb7effae77c9a2c019f&o="/>
                <div className="featuredTitles">
                    <h1>South Lake</h1>
                    <h2>789 properties</h2>
                </div>
            </div>
        </div>
    )
}

export default Featured;