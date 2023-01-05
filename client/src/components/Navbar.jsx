import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCountries, searchByName, filterContinents, filterByActivity, sortByAlf, sortByPopulation } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import s from "./Navbar.module.css"

export default function Navbar ({setCurrentPage}) {
const dispatch = useDispatch();
const continents = useSelector((state) => state.continents)
// const continentsToFilter = useSelector((state) => state.continentsToFilter)
const activities = useSelector((state)=> state.activities)
const [country, setCountry] = useState("");
const defaultValue = "default"
const input = document.querySelector(".input")

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
    input.value = ""
};
function handleFilterContinents(e) {
    e.preventDefault();
    if(!(e.target.value === "default")) {
        // if(!continentsToFilter.includes(e.target.value)) continentsToFilter.push(e.target.value);
        dispatch(filterContinents(e.target.value));
        setCurrentPage(1);
        e.target.value = defaultValue
    };
};

function handleFilterActivity(e) {
    e.preventDefault();
    dispatch(filterByActivity(e.target.value))
    setCurrentPage(1)
    e.target.value = defaultValue
}

function handleSortAlf(e) {
    e.preventDefault();
    dispatch(sortByAlf(e.target.value))
    setCurrentPage(1)
    e.target.value = defaultValue
}
function handleSortByPopulation(e) {
    e.preventDefault()
    dispatch(sortByPopulation(e.target.value))
    setCurrentPage(1)
    e.target.value = defaultValue
}

useEffect(()=>{

},[])

    return (
    <div className={s.divContainer}>
      

        <div className={s.btnsRefreshxCreate}> 
            <div >
                <div className={s.btnCreateContainer}>
                    <button onClick={(e) => { handleButtonRefresh(e) }} className={s.btnCreate}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Refresh Countries
                    </button>
                </div>
            </div>

            <Link to="createActivity">
                <div className={s.btnCreateContainer}>
                    <a className={s.btnCreate}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Create Activity
                    </a>
                </div>
            </Link>
        </div>

         
        <div className={s.btnsSelects}>
            <b className={s.btnSelect}>
                <span id={s.span1}></span>
                <span id={s.span2}></span>
                <span id={s.span3}></span>
                <span id={s.span4}></span>
                <select className={s.btnSelect} onChange={(e) => {handleFilterContinents(e)}} name="" id="">
                <option value="default">Select Continent</option>
                {   continents.map((c)=> <option key={c} value={c}>{c}</option>)  }
                </select>
            </b>

            <b className={s.btnSelect}>
                <span id={s.span1}></span>
                <span id={s.span2}></span>
                <span id={s.span3}></span>
                <span id={s.span4}></span>
                <select className={s.btnSelect} onChange={(e)=>{handleFilterActivity(e)}} name="" id="">
                <option value="default">Select Activity</option>
                { activities.map((a)=> <option key={a.id} value={a.name}>{a.name}</option> ) }
                </select>
            </b>

             <b className={s.btnSelect}>
                <span id={s.span1}></span>
                <span id={s.span2}></span>
                <span id={s.span3}></span>
                <span id={s.span4}></span>
                <select className={s.btnSelect} onChange={(e)=>{ handleSortAlf(e) }} name="" id="">
                <option value="default">Sort Alf</option>
                <option value="ascending">Asc</option>
                <option value="descending">Desc</option>
            </select>
            </b>

            <b className={s.btnSelect}>
                <span id={s.span1}></span>
                <span id={s.span2}></span>
                <span id={s.span3}></span>
                <span id={s.span4}></span>
                <select className={s.btnSelect} onChange={(e)=>{ handleSortByPopulation(e) }} name="" id="">
                <option value="default">Sort by Popoulation</option>
                <option value="max">Max</option>
                <option value="min">Min</option>
            </select>
            </b>

        </div>

        <div className={s.divInputContainer}> 

            <input  className="input" type="text" placeholder="Search Country..." onChange={(e)=>handleInputChange(e)}/>

            <div className={s.btnInputContainer} onClick={(e)=>{ handleSubmit(e); setCurrentPage(1); e.target.value = "" }}>
                <a className={s.btnInput}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Search
                </a>
            </div>
        </div>

    </div>
    )
};