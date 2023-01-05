import React from "react";
import { Link } from "react-router-dom"
import s from "./Landing.module.css"
import "./Landing.css"

export default function Landing () {
    return (
        <div className={s.divContainer}>
            <div className="title">
                <h1>Welcome! here you can find all the flags of the world!</h1>
                <h2>And also a description of all the countries you pick</h2>
            </div>

            <Link to="/home">

            <div className="btnContainer">
            <button className="btn btn1">
                <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                    </svg>
                </div>
                <span>Go there!</span>
            </button>
            </div>

            </Link>




            <h2 className="h2">This app is created using React-Redux</h2>

{/* 

            <section className={s.divGrid}>
                <article className={s.item}>
                    <h3>Grid item 1</h3>
                </article>
                <article className={s.item}>
                    <h3>Grid item 2</h3>
                </article>
                <article className={s.item}>
                    <h3>Grid item 3</h3>
                </article>
                <article className={s.item}>
                    <h3>Grid item 4</h3>
                </article>
                <article className={s.item}>
                    <h3>Grid item 5</h3>
                </article>
                <article className={s.item}>
                    <h3>Grid item 6</h3>
                </article>
                <article className={s.item}>
                    <h3>Grid item 7</h3>
                </article>
                <article className={s.item}>
                    <h3>Grid item 8</h3>
                </article>
                <article className={s.item}>
                    <h3>Grid item 9</h3>
                </article>
                <article className={s.item}>
                    <h3>Grid item 10</h3>
                </article>
            </section>


            <h1>*******************</h1>

            <section className={s.divGrid2}>
                <article className={s.item2}>
                    <Card id="ARG" name="Albertitere" continent="AHRRE" population="AHH NOOOO" activities={[{name: "Gilabert"}]} img="https://fotos.perfil.com/2022/12/13/trim/950/534/alberto-fernandez-1471271.jpg"/>
                    <h3>Grid item 1</h3>
                </article>
                <article className={s.item2}>
                    <h3>Grid item 2</h3>
                </article>
                <article className={s.item2}>
                    <h3>Grid item 3</h3>
                </article>
                <article className={s.item2}>
                    <h3>Grid item 4</h3>
                </article>
                <article className={s.item2}>
                    <h3>Grid item 5</h3>
                </article>
                <article className={s.item2}>
                    <h3>Grid item 6</h3>
                </article>
                <article className={s.item2}>
                    <h3>Grid item 7</h3>
                </article>
                <article className={s.item2}>
                    <h3>Grid item 8</h3>
                </article>
                <article className={s.item2}>
                    <h3>Grid item 9</h3>
                </article>
            </section>


             */}
        </div>
    )
};