import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () =>{

    let underline = "underline"

    return(
        <nav className="nav">
            <div className="navItems__wrapper">
                <a href="/ben"><p>ABOUT</p></a>
                <NavLink 
                to="/discover"
                className={({ isActive }) =>    isActive ? underline : undefined }
                ><p>DISCOVER</p></NavLink>
            </div>
            <figure className="logo">
                <svg width="64" height="14" viewBox="0 0 64 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.5028 0.909088H0.428223L4.9474 14H8.51416L13.0269 0.909088H9.95876L6.78831 10.8551H6.66686L3.5028 0.909088Z" fill="white"/>
                    <path d="M18.3703 0.909088H15.6026V14H18.3703V0.909088Z" fill="white"/>
                    <path d="M21.6475 14H30.4941V11.718H24.4153V8.59233H30.0147V6.31037H24.4153V3.19105H30.4685V0.909088H21.6475V14Z" fill="white"/>
                    <path d="M36.6157 14H39.3132L41.7997 5.44105H41.9019L44.3948 14H47.0923L50.838 0.909088H47.8146L45.6477 10.0241H45.5326L43.1484 0.909088H40.5596L38.169 10.005H38.0603L35.8934 0.909088H32.87L36.6157 14Z" fill="white"/>
                    <path d="M53.3194 14H56.0871V9.35937H58.107L60.5871 14H63.6425L60.862 8.91193C62.3513 8.27273 63.1759 6.97514 63.1759 5.18537C63.1759 2.5838 61.4565 0.909088 58.4842 0.909088H53.3194V14ZM56.0871 7.13494V3.17187H57.9536C59.5516 3.17187 60.3251 3.88139 60.3251 5.18537C60.3251 6.48295 59.5516 7.13494 57.9664 7.13494H56.0871Z" fill="white"/>
                </svg>
            </figure>
            <div className="navItems__wrapper">
                <a href="/ben"><p>USERS</p></a>
                <a href="/ben"><p>ACCOUNT</p></a>
            </div>
        </nav>
    )
}

export default Navigation;