import React from "react";
import { getCountries, searchByName, filterContinents } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function Navbar ({setCurrentPage}) {
const dispatch = useDispatch();
const continents = useSelector((state) => state.continents)
// const continentsToFilter = useSelector((state) => state.continentsToFilter)
const [country, setCountry] = useState("");
const defaultValue = "Select Continent"


function handleButtonRefresh(e){
e.preventDefault();
dispatch(getCountries())
};
function handleInputChange(e) {
    e.preventDefault();
    setCountry(e.target.value);
};

function handleSubmit(e) {
    e.preventDefault();
    dispatch(searchByName(country))
};
function handleFilterContinents(e) {
    e.preventDefault;
    dispatch(filterContinents(e.target.value))
}
    return (
        <div>
            <div>
                    <input type="text" placeholder="Search Country..." onChange={(e)=>handleInputChange(e)}/>
                    <button type="submit" onClick={(e)=>{ handleSubmit(e); setCurrentPage(1) } } >Search</button>
                </div>
            <button onClick={(e) => { handleButtonRefresh(e) }} >Refresh Countries</button>

            <select onChange={(e)=>{handleFilterContinents(e)}} name="" id="">
                <option value="default">Select Continent</option>
                {
                    continents.map((c)=> <option key={c} value={c}>{c}</option> )
                }
                
            </select>
        </div>

    )
};