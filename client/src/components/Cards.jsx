import React from "react";
import Card from "./Card";
import s from "./Cards.module.css"
import "./Cards.css"

export default function Cards ({ countries }) {

       return (
            countries.length
            ?<div className={s.cards}> {countries.map((c) => (
                <Card activities={c.activities} key={c.id} id={c.id} img={c.img} name={c.name} continent={c.continent} population={c.          population} />
                ))}
            </div> 
            :<h2 className="notFoundCards" >We didn't found countries with that name, try again  with other</h2>
            )
}