import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, getContinents} from "../actions";
import Navbar from "./Navbar.jsx"

export default function Home () {
const dispatch = useDispatch()
const allCountries = useSelector((state) => state.countries);

useEffect(()=>{
    dispatch(getCountries())
    dispatch(getContinents())
},[dispatch])

return (
    <div>
        <h1>Home</h1>
        <Link to="/createActivity"><button>Create Activity</button></Link>
        <Navbar/>
        <div>

        </div>
    </div>
)
};