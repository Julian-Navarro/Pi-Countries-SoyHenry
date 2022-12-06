import React from "react";
import { getCountries } from "../actions";
import { useDispatch, useSelector } from "react-redux";

export default function Navbar () {
const dispatch = useDispatch();

function handleButtonRefresh(e){
e.preventDefault();
dispatch(getCountries())
};

    return (
        <div>
            <button onClick={(e) => { handleButtonRefresh(e) }} >Refresh Countries</button>
            <select name="" id="">Select Continent
                <option value="">Africa</option>



                
            </select>
        </div>

    )
};