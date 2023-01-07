import "./Photo.css";

const Photo = (props) =>{
    console.log(props.photo.user)
    return(
        <article className="photo">
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
        </article>
    )
}

export default Photo;