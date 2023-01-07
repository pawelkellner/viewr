import Photo from "../Photo/Photo";
import "./SectionPhotos.css";
import PhotoFlexColumn from "../PhotoFlexColumn/PhotoFlexColumn";

const SectionPhotos = (props) =>{

    const renderColumns = props.data?.map((photo, index) => {
        let firstColumnMade = false
        let secondColumnMade = false
        let thirdColumnMade = false
        if(index === 2 && !firstColumnMade){
            console.log(photo)
            return(
                <PhotoFlexColumn>
                    <Photo photo={props.data[0]} photoClicked={props.photoClicked}/>
                    <Photo photo={props.data[1]} photoClicked={props.photoClicked}/>
                    <Photo photo={props.data[2]} photoClicked={props.photoClicked}/>
                </PhotoFlexColumn>
            )
        } if ( index === 5 && !secondColumnMade){
            console.log(photo)
            return(
                <PhotoFlexColumn>
                    <Photo photo={props.data[3]} photoClicked={props.photoClicked}/>
                    <Photo photo={props.data[4]} photoClicked={props.photoClicked}/>
                    <Photo photo={props.data[5]} photoClicked={props.photoClicked}/>
                </PhotoFlexColumn>
            )
        } if ( index === 8 && !thirdColumnMade){
            console.log(photo)
            return(
                <PhotoFlexColumn>
                    <Photo photo={props.data[6]} photoClicked={props.photoClicked} />
                    <Photo photo={props.data[7]} photoClicked={props.photoClicked} />
                    <Photo photo={props.data[8]} photoClicked={props.photoClicked} />
                </PhotoFlexColumn>
            )
        }
    })

    return(
        <section className="photos">
            <h1 className="photos__title">PHOTOS</h1>
            <div className="photos__contentWrapper">
                {renderColumns}
            </div>
        </section>
    )
}

export default SectionPhotos;