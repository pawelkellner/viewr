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
                    <Photo photo={props.data[0]}/>
                    <Photo photo={props.data[1]}/>
                    <Photo photo={props.data[2]}/>
                </PhotoFlexColumn>
            )
        } if ( index === 5 && !secondColumnMade){
            console.log(photo)
            return(
                <PhotoFlexColumn>
                    <Photo photo={props.data[3]}/>
                    <Photo photo={props.data[4]}/>
                    <Photo photo={props.data[5]}/>
                </PhotoFlexColumn>
            )
        } if ( index === 8 && !thirdColumnMade){
            console.log(photo)
            return(
                <PhotoFlexColumn>
                    <Photo photo={props.data[6]} />
                    <Photo photo={props.data[7]} />
                    <Photo photo={props.data[8]} />
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