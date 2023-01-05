import React, { useEffect,  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions"
import { useHistory } from "react-router-dom"
import s from "./Detail.module.css"

export default function Detail(props) {
    const c = useSelector((state)=>state.countryDetail)
    const dispatch = useDispatch();
    const history = useHistory();

    function handleButtonBack(e) {   
    e.preventDefault();
    history.push("/home");
    };

    function cb(num) {
        let str = ""
        for (let i = 0; i < num; i++) {
            str+="★"
        }
        return str
    }

    useEffect(()=>{
        dispatch(getDetail(props.match.params.idCountry))
    },[dispatch])

    return (
        <div className={s.divContainer}>
            <h1 className={s.title}>This is {c.name} description</h1>
            <div className={s.gridContainer}>
{/* CARD !!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
            <article className={s.item}>
                <div className={s.container}>
                    <div className={s.card}>
                        <div className={s.backgroundLeftColumn} id={s.leftColumn}>
                            <h6>{c.id}</h6>
                            <h2>{c.name}</h2>
                            <img src={c.img} alt="img not found" />
                        </div>
                        <div className={s.rightColumn}>
                            <h2>Description:</h2>
                            <div>
                                <h4>Continent: {c.continent}</h4>
                                <h6>Population: {c.population}</h6>
                                <h6>Capital: {c.capital}</h6>
                                <h6>Subregion: {c.subregion}</h6>
                                <h6>Area: {c.area} km²</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
{/* Cards activities !!!!!!!!!!!!!! */}
            <article className={s.item}>
                <div className={s.activitiesContainer} >
                {
                c.activities? c.activities.map((a)=> (
                    <div className={s.container}>
                        <div className={s.card2}>
                            <div className={s.background2LeftColumn} id={s.leftColumn2}>
                                <h2>{a.name}</h2>
                                <h6>ID: {a.id} </h6>
                            </div>
                            <div className={s.rightColumn}>
                                <div>
                                    <h6>Duration: {a.duration} min</h6>
                                    <h6>Difficult: {cb(a.difficult)}</h6>
                                    <h6>Seasons: {a.seasons}</h6>
                                </div>
                            </div>
                        </div>
                    </div>)):null
                }
                </div>
            </article>
            </div>
        <button id={s.btn} onClick={(e)=>handleButtonBack(e)}>Back</button>
</div>
);
};