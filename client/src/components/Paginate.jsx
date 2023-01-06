import React from "react";
import s from "./Paginate.module.css"

export default function Paginate({ countriesPerPage, allCountries, paginate, currentPage }) {
    const pageNumbers = [];
    
    for(let i = 1; i <= Math.ceil(allCountries/countriesPerPage); i++) {
        pageNumbers.push(i)
    };


    return (
    <nav className={s.navContainer}>
        <div className={s.buttonsSet}>

            { currentPage > 1 ? <div className={s.divButtonPrevious}>
                 <button  className={s.buttons} onClick={()=>{paginate(currentPage - 1)}}>Previous</button>
             </div> : null
            }
            { currentPage < pageNumbers.length ? <div className={s.divButtonNext}> <button className={s.buttons} onClick={()=>{paginate(currentPage + 1)}}>Next</button> </div>  
            : null
            }
        </div>

        <ul className={s.buttonsPages}>
           {
               pageNumbers && pageNumbers.map((number)=> (
                currentPage===number? <button className={s.buttonSelected} key={number} onClick={()=>{paginate(number)}} >{number}</button> : 
                   <button className={s.buttons} key={number} onClick={()=>{paginate(number)}} >{number}</button>
                   ))
           }
        </ul>

    </nav>)
}