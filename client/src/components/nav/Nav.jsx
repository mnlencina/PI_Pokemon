import React, { useState } from "react"
import SearchBar from "../searchBar/SearchBar"
import TypeBar from "../typeBar/TypeBar";
import {NavLink, useLocation} from "react-router-dom";


const Nav = (props)=>{
    const [filterBar, setFilterBar] = useState(false)
    const location = useLocation()
    const onTypes =()=>{
        setFilterBar(!filterBar)
    }
    return(
        <div>
            {location.pathname !== "/create" && (
                <div>
                    <button onClick={onTypes}>TYPE</button>
                </div>
            )}
            <NavLink to={'/home'}>Home</NavLink>
            <NavLink to={'/create'}>Create</NavLink>
            {location.pathname === "/home" && 
                <SearchBar onSearch={(pok) => props.onSearch(pok)}/>
            }
            {location.pathname !== "/create" && filterBar && (
                <div>
                    <TypeBar/>
                </div>
            )}
        </div>
        
    )
}

export default Nav;