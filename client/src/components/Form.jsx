import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./Form.module.css"

export default function Form() {
const dispatch = useDispatch();
const countries = useSelector(state=>state.countries);
const [input, setInput] = useState({
    name: "",
    difficult: "",
    duration: "",
    seasons: ""
})
console.log(countries[0]);
return (
    <div>
        <h1>FORM</h1>
        <div>
            <h3>Form</h3>
            <form className={s.formContainer} action="">
                <div><label htmlFor="">Activity Name: </label><input type="text" /></div>
                <div><label htmlFor="">Duration: </label><input type="text" /></div>
                <div><label htmlFor="">Difficult: </label><input type="text" /></div>
                <div><label htmlFor="">Seasons: </label><input type="text" /></div>
            </form>
        </div>
    </div>
)

}