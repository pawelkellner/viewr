import "./SearchBar.css";

import {motion as m} from "framer-motion";


const SearchBar = ({search}) =>{
    const preventThanSearch = (e) =>{
        e.preventDefault()
        search(e.target[0].value)
        e.target[0].value = ""
    }
    return(
        <m.form onSubmit={preventThanSearch} action="" className="searchbar"
        initial={{y: 112, x: `-50%`, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{type: "tween", duration: 1, delay: 1.2}}
        >
            <input className="searchbar__input" type="text" placeholder="Minimal photography"/>
            <button className="searchbar__button">SEARCH</button>
        </m.form>
    )
}

export default SearchBar;