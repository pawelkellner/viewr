import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";

const Header = (props) =>{
    return(
        <header className="header">
            <div className="header__textWrapper">
                <h1 className="header__title">Discover the perfect image for your design.</h1>
                <p className="header__photographer">Photographed by: Maarten bouwkamp</p>
            </div>
            <span className="bottom__left"></span>
            <span className="bottom__right"></span>
            <SearchBar search={props.search}/>
        </header>
    )
}

export default Header;