import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, getDogs } from "../actions"
import { Link, useHistory } from "react-router-dom"
import s from "./Detail.module.css"

export default function Detail(props) {
const dispatch = useDispatch();
const history = useHistory();
const c = useSelector((state)=>state.countryDetail)
function handleButtonBack(e){
e.preventDefault();
history.push("/home");
};

useEffect(()=>{
    dispatch(getDetail(props.match.params.idCountry))
},[dispatch])

    return (
         <div >
            <div className={s.card}>
                <h2>{c.name}</h2>
                <img src={c.img} alt="img not found" />
                <h3>{c.continent}</h3>
                <h3>Population: {c.population}</h3>
            </div>
        </div>
    )
}