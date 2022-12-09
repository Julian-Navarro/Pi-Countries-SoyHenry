import React, { useEffect } from "react";
import { getCountries, searchByName, filterContinents, filterByActivity } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function Navbar ({setCurrentPage}) {
const dispatch = useDispatch();
const continents = useSelector((state) => state.continents)
const continentsToFilter = useSelector((state) => state.continentsToFilter)
const activities = useSelector((state)=> state.activities)
const [country, setCountry] = useState("");
const defaultValue = "default"


function handleButtonRefresh(e){
e.preventDefault();
dispatch(getCountries())
setCurrentPage(1)

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
        if(!continentsToFilter.includes(e.target.value)) continentsToFilter.push(e.target.value);
        dispatch(filterContinents(continentsToFilter));
        setCurrentPage(1);
        e.target.value = defaultValue
    };
};

function handleFilterActivity(e) {
    e.preventDefault();
    dispatch(filterByActivity(e.target.value))
    setCurrentPage(1)
}

useEffect(()=>{

},[continentsToFilter])

    return (
        <div>
            <div>
                <input type="text" placeholder="Search Country..." onChange={(e)=>handleInputChange(e)}/>
                <button type="submit" onClick={(e)=>{ handleSubmit(e); setCurrentPage(1) }}>Search</button>
            </div>
            <button onClick={(e) => { handleButtonRefresh(e) }} >Refresh Countries</button>
            <select onChange={(e) => {handleFilterContinents(e)}} name="" id="">
                <option value="default">Select Continent</option>
                {   continents.map((c)=> <option key={c} value={c}>{c}</option>)  }
            </select>
            <select onChange={(e)=>{handleFilterActivity(e)}} name="" id="">
                <option value="default">Select Activity</option>
                { activities.map((a)=> <option key={a.id} value={a.name}>{a.name}</option> ) }
            </select>
        </div>

    )
};