import "./PhotoFlexColumn.css";

const PhotoFlexColumn = (props) =>{
    return(
        <section className="flexColumn">
            {props.children}
        </section>
    )
}

export default PhotoFlexColumn;
