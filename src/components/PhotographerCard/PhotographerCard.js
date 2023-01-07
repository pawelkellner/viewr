import "./PhotographerCard.css";

const PhotographerCard = () =>{
    return(
        <article className="photographer">
            <figure className="photographer__img">
                <img src="https://picsum.photos/300/300" alt="" />
            </figure>
            <section className="photographer__info">
                <h1 className="photographer__name">Ivy Madison</h1>
                <p className="photographer__photoCount">1.412 Photos</p>
            </section>
        </article>
    )
}

export default PhotographerCard;