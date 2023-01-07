import "./Photo.css";

import {motion as m} from "framer-motion";


const Photo = (props) =>{
    
    const photoClicked = () =>{
        props.photoClicked(props.photo.id)
    }

    return(
        <m.article onClick={photoClicked} className="photo"
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        >
            <img className="photo__img" src={props.photo.urls.regular} alt="" />
            <div className="photo__fade">
                <section className="photo__info">
                    <figure className="photo__ownerImg">
                        <img src={props.photo.user.profile_image.medium} alt="" />
                    </figure>
                    <p className="photo__ownerName">
                        {props.photo.user.name}
                    </p>
                </section>
            </div>
        </m.article>
    )
}

export default Photo;