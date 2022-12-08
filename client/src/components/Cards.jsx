import React from "react";
import Card from "./Card";
import s from "./Cards.module.css"

export default function Cards ({ countries }) {

       return <div className={s.cards}> {countries.map((c) => (
            <Card img={c.img} name={c.name} continent={c.continent}/>
        ))}
        </div>
}