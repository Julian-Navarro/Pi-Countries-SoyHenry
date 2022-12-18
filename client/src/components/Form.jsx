import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./Form.module.css"
import { Link, useHistory } from "react-router-dom";
import { postActivity } from "../actions"

export default function Form() {
const dispatch = useDispatch();
const history = useHistory();
const countries = useSelector(state=>state.allCountries);
const defaultValue = "defaultValue"
const [seasonsToPass, setSeasonsToPass] = useState([])
const seasons = ["Verano", "Otoño", "Primavera", "Invierno"]

const [input, setInput] = useState({
    name: "",
    difficult: 0,
    duration: 0,
    seasons: "",
    countries: []
})

let currentCountries = []
input.countries.forEach((name)=> {
    countries.forEach((country)=> {
       if(country.name === name) {
        currentCountries.push(country)
       }
    })
} )

const errors = {
    name: "",
    difficult: "",
    duration: "",
    seasons: "",
    countries: ""
}

function handleChange(e){
e.preventDefault();
setInput({
    ...input,
    [e.target.name]: e.target.value
})
};

function handleErrors(e) {
    e.preventDefault();
    if(input.name === "") {
        errors.name = "A name is required!"
    }
    if(input.duration !== 0){
        if (input.duration < 1 || input.duration > 500) {
            errors.duration = `Duration cannot be more than "500" or less than "1"`
        }
    } else {
        errors.duration = "Duration is required!"
    }
    if(input.difficult!== 0) {
        if(input.difficult < 1 || input.difficult > 5){
            errors.difficult = "Difficult must to be a number between 1 and 5"
        }
    } else {
        errors.difficult = "Difficult is required!"
    }
    if(input.countries.length === 0) {
        errors.countries = "At least one country required!"
    }
    if(seasonsToPass.length === 0) {
        errors.seasons = "You didn't select a season!"
    }
    if (!errors.name && !errors.duration && !errors.difficult && !errors.seasons && !errors.countries ) {
        handleSubmit(e)
    } else {
        alert(errors.name || errors.difficult || errors.duration || errors.countries || errors.seasons)
    }
};

function handleSubmit(e) {
e.preventDefault();
let strSeasons = "";
seasonsToPass.forEach((s)=> {
    strSeasons += `${s}, `
})
let newstr = strSeasons.slice(0, -2)
input.seasons = newstr

dispatch(postActivity(input))
alert("Activity created succesfully!")
history.push("/home")
};
function handleSelect(e){
    e.preventDefault();
    if(!input.countries.includes(e.target.value)){
        input.countries.push(e.target.value)
    }
    console.log(e.target.value);
    e.target.value = defaultValue
}

function handleSelectSeasons(e){
    e.preventDefault();
    if(!seasonsToPass.includes(e.target.value)){
        seasonsToPass.push(e.target.value);
    }
    e.target.value = defaultValue
};
function handleSelectSeasonsRemove(e) {
    e.preventDefault();
    setSeasonsToPass(seasonsToPass.filter((s)=> s !== e.target.value))
    e.target.value = defaultValue
}
function handleRemoveCountry(e){
    e.preventDefault();
    console.log("EVENTOOOOO: ",e);
    let newArray = input.countries.filter((name)=> name !== e.target.value )
    console.log("VALUE!!! : ",e.target.value);
    setInput({
        ...input,
        countries: newArray
    })
};

return (
    <div>
        <h1>FORM</h1>
        <div>
            <form onSubmit={(e)=>handleErrors(e)} onChange={(e)=>handleChange(e)} className={s.formContainer} action="">
                <div><label>Activity Name: </label><input name="name" placeholder="Activity name..." type="text" /></div>
                <div><label>Duration: </label><input name="duration" placeholder="Mins duration..." type="number" /></div>
                <div><label>Difficult: </label><input name="difficult" placeholder="Difficult 1 - 5..." type="number" /></div>
                <select onChange={(e)=>handleSelectSeasons(e)}>
                    <option value={defaultValue}>Add Seasson/s!</option>
                {
                    seasons.map((s)=> <option value={s} key={s}>{s}</option> )
                }
                </select>

                <select onChange={(e)=>handleSelect(e)} name="" id="">
                    <option value="defaultValue">Select Country</option>
                    {countries.map((c)=> <option value={c.name} key={c.id}>{c.name}</option>)}
                </select>

                <button type="submit">Submit</button>
            </form>

            <Link to="/home"><button>Back</button></Link>
            <div className={s.containerCountriesSelected}>
            {currentCountries.map((c)=> 
                <div key={c.id} className={s.divCountriesSelected}>
                    <button value={c.name} onClick={(e)=>handleRemoveCountry(e)}>X</button>
                    <h5>{c.name}</h5>
                    <img src={c.img} alt="img not found" width="50px"/>
                </div> )}
            </div>
            <div className={s.seasonsContainer}>
                {
                    seasonsToPass.map((name)=> 
                    <div className={s.seasons}>
                        <button value={name} onClick={(e)=>handleSelectSeasonsRemove(e)}>X</button>
                        <h3>{name}</h3>
                    </div>
                    )
                }
            </div>
        </div>
    </div>
)

}