import Header from '../components/Header/Header';
import Navigation from '../components/Navigation/Navigation';
import SectionPhotographers from '../components/SectionPhotographers/SectionPhotographers';
import SectionPhotos from '../components/SectionPhotos/SectionPhotos';
import useFetch from '../components/useFetch/useFetch';
import DetailCard from '../components/DetailCard/DetailCard';

import { useState} from "react";

const Discover = () =>{
    const [userInputs, setUserInputs] = useState([
        {
            id: 1,
            type: "count=",
            value: 9,
            using: true
        },
        {
            id: 2,
            type: "page=",
            value: 1,
            using: true
        },
        {
            id: 3,
            type: "per_page=",
            value: 1,
            using: false
        },
        {
            id: 4,
            type: "query=",
            value: 1,
            using: false
        },
    ])
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

  const changeFetch = () =>{
    const renderInputs = userInputs.map(call =>{
      if(call.using === true){
        const render = call.type + call.value + "&"
        return render
      }
    })
    const converToLink = renderInputs.toString().replaceAll(",","")
    refetch(`https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&${converToLink}`)
  }

  const loadedPhotoCard = loadedData?.find((photo) =>{
    return photo.id === photoId
  })

  const search = (searchWord) =>{
    setPhotoClicked(false)
    const oldState = [...userInputs];
    const newState = oldState.map(input =>{
      if(input.id === 4){
        input.value = searchWord
        input.using = true
        return input;
      }else{
        return input;
      }
     })
     console.log(newState)
    setUserInputs(newState);
    changeFetch();
  }

  const photoGotClicked = (photoId) =>{
    setPhotoId(photoId);
    setPhotoClicked(true);
  }

  const prevPage = () =>{
    if(userInputs[1].value !== 1){
        setPhotoClicked(false)
        const oldState = [...userInputs];
        const newState = oldState.map(input =>{
          if(input.id === 2){
            input.value = input.value - 1
            input.using = true
            return input;
          }else{
            return input;
          }
         })
        setUserInputs(newState);
        changeFetch();
    } 
  }

  const nextPage = () =>{
    setPhotoClicked(false)
    const oldState = [...userInputs];
    const newState = oldState.map(input =>{
      if(input.id === 2){
        input.value = input.value + 1
        input.using = true
        return input;
      }else{
        return input;
      }
     })
    setUserInputs(newState);
    changeFetch();
  }

  return (
    <div className="content__wrapper">
      <Navigation />
      <Header search={search} />
      <SectionPhotographers data={loadedData} />
      <SectionPhotos prevPage={prevPage} nextPage={nextPage} userInputs={userInputs} data={loadedData} photoClicked={photoGotClicked}/>
      <DetailCard photoClicked={photoClicked} loadedPhotoCard={loadedPhotoCard}/>
    </div>
  );
}

export default Discover;