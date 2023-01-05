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
                {/* <h3>item 1</h3> */}
                <Navbar setCurrentPage={setCurrentPage}/>
            </article>
            <article className={s.item}>
                {/* <h3>item 2</h3> */}
                <Cards countries={currentCountries}/>
            </article>
            <article className={s.item}>
                {/* <h3>item 3</h3> */}
                <Paginate paginate={paginate} countriesPerPage={countriesPerPage} allCountries={allCountries.length} currentPage={currentPage} />
            </article>
            {/* <article className={s.item}>
                <h3>item 4</h3>
            </article>
            <article className={s.item}>
                <h3>item 5</h3>
            </article>
            <article className={s.item}>
                <h3>item 6</h3>
            </article>
            <article className={s.item}>
                <h3>item 7</h3>
            </article>
            <article className={s.item}>
                <h3>item 8</h3>
            </article>
            <article className={s.item}>
                <h3>item 9</h3>
            </article> */}
        </section>
        {/* <Link to="/createActivity"><button>Create Activity</button></Link> */}
        {/* <Navbar setCurrentPage={setCurrentPage}/>
        <Paginate paginate={paginate} countriesPerPage={countriesPerPage} allCountries={allCountries.length} currentPage={currentPage} />
        <Cards countries={currentCountries}/> */}
    </div>
)
};