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
const [seasonsToRender, setSeasonsToRender] = useState([])
const seasons = [
    {
        name: "Summer", 
        img: "https://icon-library.com/images/summer-icon/summer-icon-9.jpg"
    }, {
        name: "Autumn", 
        img: "https://previews.123rf.com/images/ylivdesign/ylivdesign1609/ylivdesign160906431/63192821-icono-de-hojas-de-oto%C3%B1o-en-estilo-de-dibujos-animados-aislado-sobre-fondo-blanco-ilustraci%C3%B3n-de-vect.jpg"
    }, {
        name: "Spring", 
        img: "https://previews.123rf.com/images/yupiramos/yupiramos1609/yupiramos160900760/61958416-icono-de-p%C3%A9talos-de-flores-de-primavera-flores.jpg"
    }, {
        name: "Winter", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMsYi8eM5SAgIAHkP1dVI1UYXgVYfSh4XJemoEhgb6LRBlgl704HQL4vLyJHLmAw15p3M&usqp=CAU"
    }
]

const [input, setInput] = useState({
    name: "",
    difficult: 0,
    duration: 0,
    seasons: "",
    countries: []
})
function handleChange(e){
e.preventDefault();
setInput({
    ...input,
    [e.target.name]: e.target.value
})
};

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
function handleRemoveCountry(e){
    e.preventDefault();
    let newArray = input.countries.filter((name)=> name !== e.target.value )
    setInput({
        ...input,
        countries: newArray
    })
};

function handleSelectSeasonsRemove(e) {
    e.preventDefault();
    setSeasonsToPass(seasonsToPass.filter((s)=> s !== e.target.value))
    setSeasonsToRender(seasonsToRender.filter((s)=> s.name !== e.target.value))
    e.target.value = defaultValue
}
function handleSelectSeasons(e){
    e.preventDefault();
    if(!seasonsToPass.includes(e.target.value)){
        let current = seasons.find((s)=>s.name === e.target.value)
        let img = current.img
        seasonsToRender.push({name: e.target.value, img})
        seasonsToPass.push(e.target.value);
    }
    e.target.value = defaultValue
};




useEffect(()=>{

},[countries])
return (
    <div className={s.divContainer}>
        <div className={s.container}>

    <div className={s.grid}>
        <article className={s.Item}>
            <div>
                <div className={s.btnCreateContainer}>
                    <Link to="/home"><button className={s.btnCreate}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Back
                        </button></Link>
                </div>

            <h1>Create a new activity!</h1>
            <form onSubmit={(e)=>handleErrors(e)} onChange={(e)=>handleChange(e)} className={s.formContainer} action="">
                <div className={s.cardFormContainer}>
                    <div><label>Activity Name: </label><input name="name" placeholder="Activity name..." type="text" /></div>
                    <div><label>Duration: </label><input name="duration" placeholder="Mins duration..." type="number" /></div>
                    <div><label>Difficult: </label><input name="difficult" placeholder="Difficult 1 - 5..." type="number" /></div>

                    <select className={s.select} onChange={(e)=>handleSelectSeasons(e)}>
                        <option value={defaultValue}>Add Seassons!</option>
                        {   seasons.map((s)=> <option value={s.name} key={s.name}>{s.name}</option> )  }
                    </select>

                    <select className={s.select} onChange={(e)=>handleSelect(e)} name="" id="">
                        <option value="defaultValue">Select Countries!</option>
                        {countries.map((c)=> <option value={c.name} key={c.id}>{c.name}</option>)}
                    </select>

                <button type="submit">Submit</button>
                </div>
            </form>
            
        </div>
        </article>
        <article className={s.Item}>
        <div className={s.seasonsContainer}>
                 {
                                    seasonsToRender.map((season)=> 
                    <div className={s.seasonContainer}>
                        <div className={s.season}>
                            <div className={s.seasonContainerTop}>
                                <button value={season.name} onClick={(e)=>handleSelectSeasonsRemove(e)}>X</button>
                                <h3>{season.name}</h3>
                            </div>
                            <div className={s.seasonContainerBottom}>
                                <img className={s.img} src={season.img} alt="img not found" width="50px"  />
                            </div>
                        </div>
                    </div>
                        )
                    }
        </div>
        </article>
        <article className={s.Item}>
            <div className={s.containerCountriesSelected}>
                {currentCountries[0] !== undefined?currentCountries.map((c)=> 
                <div className={s.divCountriesSelected2}>
                <div key={c.id} className={s.divCountriesSelected}>
                        <h5>{c.name}</h5>
                        <button value={c.name} onClick={(e)=>handleRemoveCountry(e)}>X</button>
                    <img src={c.img} alt="img not found" width="50px"/>
                </div> 
                </div>
                ):null}
                
            </div>
        </article>
    </div>

        </div>
    </div>
)

}