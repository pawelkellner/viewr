import Photo from "../Photo/Photo";
import "./SectionPhotos.css";
import PhotoFlexColumn from "../PhotoFlexColumn/PhotoFlexColumn";

import {motion as m} from "framer-motion";


const SectionPhotos = (props) =>{

    const renderColumns = props.data?.map((photo, index) => {
        if(index === 2){
            return(
                <PhotoFlexColumn key={index}>
                    <Photo key={index} photo={props.data[0]} photoClicked={props.photoClicked}/>
                    <Photo key={index + 1} photo={props.data[1]} photoClicked={props.photoClicked}/>
                    <Photo key={index + 2} photo={props.data[2]} photoClicked={props.photoClicked}/>
                </PhotoFlexColumn>
            )
        } if ( index === 5){
            return(
                <PhotoFlexColumn key={index}>
                    <Photo key={index} photo={props.data[3]} photoClicked={props.photoClicked}/>
                    <Photo key={index + 1} photo={props.data[4]} photoClicked={props.photoClicked}/>
                    <Photo key={index + 2} photo={props.data[5]} photoClicked={props.photoClicked}/>
                </PhotoFlexColumn>
            )
        } if ( index === 8){
            return(
                <PhotoFlexColumn key={index}>
                    <Photo key={index} photo={props.data[6]} photoClicked={props.photoClicked} />
                    <Photo key={index + 1} photo={props.data[7]} photoClicked={props.photoClicked} />
                    <Photo key={index + 2} photo={props.data[8]} photoClicked={props.photoClicked} />
                </PhotoFlexColumn>
            )
        }
    })

    const renderCounter = props.userInputs?.map((input, index) =>{
        if(input.id === 2){
            return <p key={index}>{props.userInputs[1]?.value || "..."}</p>
        }
    })

    return(
        <m.section className="photos"
        viewport={{ once: true}}
        initial={{y: 100, opacity: 0}}
        whileInView={{y: 0, opacity:1}}
        transition={{type: "tween", duration:1}}
        >
            <h1 className="photos__title">PHOTOS</h1>
            <div className="pagination">
                {renderCounter}
                <div className="page__buttonsWrapper">
                    <i onClick={props.prevPage} className="fa-solid fa-angle-left"></i>
                    <i onClick={props.nextPage} className="fa-solid fa-angle-right"></i>
                </div>
            </div>
            <div className="photos__contentWrapper">
                {renderColumns}
            </div>
        </m.section>
    )
}

export default SectionPhotos;