import PhotographerCard from "../PhotographerCard/PhotographerCard";
import "./SectionPhotographers.css";

import {motion as m} from "framer-motion";

const SectionPhotographers = (props) =>{

    const renderPhotographers = props.data?.map((photo, index) =>{
            return <PhotographerCard key={index} photographer={photo.user}/> 
    })

    return(
        <m.section className="photographers"
        initial={{y: 100, opacity: 0}}
        animate={{y: 0, opacity:1}}
        transition={{type: "tween", duration:1, delay: 1.5}}
        >
            <h1 className="photographers__title">PHOTOGRAPHERS</h1>
            <div className="photographers__contentWrapper">
                {renderPhotographers}
            </div>
        </m.section>
    )
}

export default SectionPhotographers;