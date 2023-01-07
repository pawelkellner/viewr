import PhotographerCard from "../PhotographerCard/PhotographerCard";
import "./SectionPhotographers.css";

const SectionPhotographers = (props) =>{
    console.log(props.data)

    const renderPhotographers = props.data?.map((photo, index) =>{
        if(index < 4){
            console.log(photo)
            return <PhotographerCard photographer={photo.user}/> 
        }
    })

    return(
        <section className="photographers">
            <h1 className="photographers__title">PHOTOGRAPHERS</h1>
            <div className="photographers__contentWrapper">
                {renderPhotographers}
            </div>
        </section>
    )
}

export default SectionPhotographers;