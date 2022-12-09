import React from "react";
import s from "./Card.module.css"

export default function Card({ img, name, continent, population}) {
    return (
        <div className={s.divCard}>
        <div className={s.card}>
            <h2>{name}</h2>
            <img src={img} alt="img not found" />
            <h3>{continent}</h3>
            <h3>Population: {population}</h3>
        </div>
        </div>

    )
}