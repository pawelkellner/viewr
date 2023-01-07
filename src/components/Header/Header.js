import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";

import {motion as m} from "framer-motion";


const Header = (props) =>{
    return(
        <header className="header">
            <m.div className="header__textWrapper"
            initial={{x: -200, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{type: "tween", delay: 1.2, duration: 1}}
            >
                <h1 className="header__title">Discover the perfect image for your design.</h1>
                <p className="header__photographer">Photographed by: Maarten bouwkamp</p>
            </m.div>
            <m.span className="bottom__left"
            initial={{y: 64}}
            animate={{y: 0}}
            transition={{ type: "tween", duration: 1.5, delay: 0.4}}
            ></m.span>
            <m.span className="bottom__right"
            initial={{y: 64}}
            animate={{y: 0}}
            transition={{ type: "tween", duration: 1.1, delay: 0.4}}
            ></m.span>
            <SearchBar search={props.search}/>
        </header>
    )
}

export default Header;