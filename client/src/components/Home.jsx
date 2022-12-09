import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, getContinents, getActivities} from "../actions";
import Navbar from "./Navbar.jsx";
import Cards from "./Cards.jsx";
import Paginate from "./Paginate.jsx";


export default function Home () {
const dispatch = useDispatch()
const allCountries = useSelector((state) => state.countries);

const [currentPage, setCurrentPage] = useState(1);
const [countriesPerPage, setCountriesPerPage] = useState(9.99);
const indexOfLastCountry = currentPage * countriesPerPage;
const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry);
const paginate = (number) => {
    setCurrentPage(number);
};


useEffect(()=>{
    dispatch(getCountries())
    dispatch(getContinents())
    dispatch(getActivities())
},[dispatch])

return (
    <div>
        <h1>Home</h1>
        <Link to="/createActivity"><button>Create Activity</button></Link>
        <Navbar setCurrentPage={setCurrentPage}/>
        <Paginate paginate={paginate} countriesPerPage={countriesPerPage} allCountries={allCountries.length} currentPage={currentPage} />
        <Cards countries={currentCountries}/>
        <div>

        </div>
    </div>
)
};