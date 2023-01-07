import "./SearchBar.css";

const SearchBar = () =>{
    return(
        <form action="" className="searchbar">
            <input className="searchbar__input" type="text" placeholder="Minimal photography"/>
            <button className="searchbar__button">SEARCH</button>
        </form>
    )
}

export default SearchBar;