import PhotographerCard from "../PhotographerCard/PhotographerCard";
import "./SectionPhotographers.css";

const SectionPhotographers = () =>{
    return(
        <section className="photographers">
            <h1 className="photographers__title">PHOTOGRAPHERS</h1>
            <div className="photographers__contentWrapper">
                <PhotographerCard />
                <PhotographerCard />
                <PhotographerCard />
                <PhotographerCard />
            </div>
        </section>
    )
}

export default SectionPhotographers;