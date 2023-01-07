import Header from '../components/Header/Header';
import Navigation from '../components/Navigation/Navigation';
import SectionPhotographers from '../components/SectionPhotographers/SectionPhotographers';
import SectionPhotos from '../components/SectionPhotos/SectionPhotos';
import useFetch from '../components/useFetch/useFetch';
import DetailCard from '../components/DetailCard/DetailCard';

import { useState} from "react";

const Discover = () =>{
    const [photoId, setPhotoId] = useState("")
  const [photoClicked, setPhotoClicked] = useState(false)
  const {data, loading, error, refetch} = useFetch(`https://api.unsplash.com/photos/random?count=9&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`);

  if(loading){
    return (
      <div className="content__wrapper">
      <Navigation />
      <Header />
      <SectionPhotographers />
      <SectionPhotos />
    </div>
    )
  };

  if (error) console.log(error);

  let loadedData = data;

  if(loadedData?.results !== undefined){
      loadedData = data.results
  }

  const loadedPhotoCard = loadedData?.find((photo) =>{
    return photo.id === photoId
  })

  const search = (input) =>{
    setPhotoClicked(false)
    if(input === ""){
      refetch(`https://api.unsplash.com/photos/random?count=9&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`)
    }else {
      refetch(`https://api.unsplash.com/search/photos?page=1&per_page=9&query=${input}&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`)
    }
  }

  const photoGotClicked = (photoId) =>{
    setPhotoId(photoId);
    setPhotoClicked(true);
  }

  return (
    <div className="content__wrapper">
      <Navigation />
      <Header search={search} />
      <SectionPhotographers data={loadedData} />
      <SectionPhotos data={loadedData} photoClicked={photoGotClicked}/>
      <DetailCard photoClicked={photoClicked} loadedPhotoCard={loadedPhotoCard}/>
    </div>
  );
}

export default Discover;