import React from "react";
import s from "./Card.module.css"
import { Link } from "react-router-dom"

export default function Card({ id, img, name, continent, population, activities }) {
    let strAct = "";
    if(activities !== undefined) activities.forEach((a)=> strAct += a.name + ", " )
    let newStrAct = strAct.slice(0,-2)

    return (
        <div className={s.divCard}>
            <div className={s.card}>
                <Link to={`/home/${id}`} ><h2>{name}</h2></Link>
                <img src={img} alt="img not found" />
                <h3>Continent: {continent}</h3>
                <h3>Population: {population}</h3>
                {activities.length?<h3>Activities: {newStrAct}</h3>:null}
            </div>
        </div>
    )
}