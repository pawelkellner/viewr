import "./DetailCard.css";

import {motion as m} from "framer-motion";

const DetailCard = (props) =>{
    let showCard = 160

    if(props.photoClicked){
        showCard = 0
    }else{
        showCard = 160
    }

    return(
        <m.article className="detailCard"
        key={showCard}
        initial={{y: 160, x: `-50%`}}
        animate={{y: showCard}}
        exit={{y: 160}}
        >
            <figure className="detailCard__photo">
                <img src={props.loadedPhotoCard?.urls.small} alt="" />
            </figure>
            <section className="detailCard__info">
                <h1 className="detailCard__title">{props.loadedPhotoCard?.description || props.loadedPhotoCard?.alt_description}</h1>
                <section className="detailCard__owner">
                    <figure className="detailCard__ownerImg">
                        <img src={props.loadedPhotoCard?.user.profile_image.small} alt="" />
                    </figure>
                    <p className="photo__ownerName">
                    {props.loadedPhotoCard?.user.name}
                    </p>
                </section>
                <span className="detailCard__titleFade"></span>
            </section>
            <section className="detailCard__stats">
                <section className="detailCard__downloads">
                    <h1 className="detailCard__downloadsNumber">{props.loadedPhotoCard?.downloads || "0"}</h1>
                    <p className="detailCard__downloadsTitle">DOWNLOADS</p>
                </section>
                <section className="detailCard__views">
                    <h1 className="detailCard__viewsNumber">{props.loadedPhotoCard?.views || "0"}</h1>
                    <p className="detailCard__viewsTitle">VIEWS</p>
                </section>
                <button className="detailCard__downloadButton">DOWNLOAD</button>
            </section>
        </m.article>
    )
}

export default DetailCard;