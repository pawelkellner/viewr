import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import SectionPhotographers from '../SectionPhotographers/SectionPhotographers';
import SectionPhotos from '../SectionPhotos/SectionPhotos';
import './App.css';

import useFetch from '../useFetch/useFetch';
import { useState} from "react";
import DetailCard from '../DetailCard/DetailCard';

function App() {
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

export default App;
