import React, { useEffect } from "react";
import { getCountries, searchByName, filterContinents, getActivities } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function Navbar ({setCurrentPage}) {
const dispatch = useDispatch();
const continents = useSelector((state) => state.continents)
const continentsToFilter = useSelector((state) => state.continentsToFilter)
// const [continentsToFilter, setContinentsToFilter] = useState([]);
const [country, setCountry] = useState("");
const defaultValue = "default"


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
    e.preventDefault();
    if(!(e.target.value === "default")) {
        if(!continentsToFilter.includes(e.target.value)) {
            continentsToFilter.push(e.target.value)
        };
        dispatch(filterContinents(continentsToFilter));
        setCurrentPage(1);
        e.target.value = defaultValue
    };
};
// useEffect(()=>{
// dispatch(getActivities())

// },[dispatch])

useEffect(()=>{
    // dispatch(getActivities())
},[continentsToFilter])

    return (
        <div>
            <div>
                    <input type="text" placeholder="Search Country..." onChange={(e)=>handleInputChange(e)}/>
                    <button type="submit" onClick={(e)=>{ handleSubmit(e); setCurrentPage(1) } } >Search</button>
                </div>
            <button onClick={(e) => { handleButtonRefresh(e) }} >Refresh Countries</button>

            <select onChange={(e) => {handleFilterContinents(e)}} name="" id="">
                <option value="default">Select Continent</option>
                {
                    continents.map((c)=> <option key={c} value={c}>{c}</option> )
                }
                
            </select>
        </div>

    )
};