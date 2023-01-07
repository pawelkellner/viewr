import "./SearchBar.css";

const SearchBar = ({search}) =>{
    const preventThanSearch = (e) =>{
        e.preventDefault()
        search(e.target[0].value)
    }
    return(
        <form onSubmit={preventThanSearch} action="" className="searchbar">
            <input className="searchbar__input" type="text" placeholder="Minimal photography"/>
            <button className="searchbar__button">SEARCH</button>
        </form>
    )
}

export default SearchBar;