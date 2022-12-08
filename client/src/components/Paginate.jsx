import React from "react";

export default function Paginate({ countriesPerPage, allCountries, paginate, currentPage }) {
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(allCountries/countriesPerPage); i++) {
        pageNumbers.push(i)
    };
    return (
    <nav className="nav">
           { currentPage > 1 ? <div className="divButton">
                <button  className="button" onClick={()=>{paginate(currentPage - 1)}}>Previous</button>
            </div> : null
           }
        <ul className="paginate">
           {
            pageNumbers && pageNumbers.map((number)=> (
                <button key={number} onClick={()=>{paginate(number)}} >{number}</button>
            ))
           }
        </ul>
            { currentPage < pageNumbers.length ? <div className="divButton"> <button className="button" onClick={()=>{paginate(currentPage + 1)}}>Next</button> </div>  
            : null
            }
    </nav>)
}