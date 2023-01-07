import "./PhotographerCard.css";

const PhotographerCard = ({photographer}) =>{
    return(
        <article className="photographer">
            <figure className="photographer__img">
                <img src={photographer.profile_image.large} alt="" />
            </figure>
            <section className="photographer__info">
                <h1 className="photographer__name">{photographer.name}</h1>
                <p className="photographer__photoCount">{photographer.total_photos} Photos</p>
            </section>
        </article>
    )
}

export default PhotographerCard;