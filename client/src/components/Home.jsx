import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, getContinents, getActivities} from "../actions";
import Navbar from "./Navbar.jsx";
import Cards from "./Cards.jsx";
import Paginate from "./Paginate.jsx";
import s from "./Home.module.css"

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
    <div className={s.divContainer}>
        <section className={s.gridContainer}>
            <article className={s.item}>
                <Navbar setCurrentPage={setCurrentPage}/>
            </article>
            <article className={s.item}>
                <Cards countries={currentCountries}/>
            </article>
            <article className={s.item}>
                <Paginate paginate={paginate} countriesPerPage={countriesPerPage} allCountries={allCountries.length} currentPage={currentPage} />
            </article>
        </section>
    </div>
)
};