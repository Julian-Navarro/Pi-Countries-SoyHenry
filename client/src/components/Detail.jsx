import React, { useEffect,  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions"
import { useHistory } from "react-router-dom"
import s from "./Detail.module.css"

export default function Detail(props) {
const c = useSelector((state)=>state.countryDetail)
const dispatch = useDispatch();
const history = useHistory();
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
                <h4>{c.id}</h4>
                <h2>{c.name}</h2>
                <img src={c.img} alt="img not found" />
                <h3>Capital: {c.capital}</h3>
                <h3>Subregion: {c.subregion}</h3>
                <h3>Continent: {c.continent}</h3>
                <h3>Population: {c.population}</h3>
                <h3>Area: {c.area} km²</h3>
            </div>
            <div className={s.activitiesContainer} >
                {
                c.activities? c.activities.map((a)=> (
                <div className={s.activities} key={a.id}>
                     <h3>{a.name}</h3>
                     <h3>Difficult: {a.difficult}</h3>
                     <h3>Duration: {a.duration} min</h3>
                     <h3>Seasons: {a.seasons}</h3>
                     <h4>id: {a.id}</h4>
                </div>
            )  ) :null


                }
            </div>
            <button onClick={(e)=>handleButtonBack(e)}>Back</button>
        </div>
    )
}