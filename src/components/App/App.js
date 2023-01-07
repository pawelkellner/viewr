import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import SectionPhotographers from '../SectionPhotographers/SectionPhotographers';
import SectionPhotos from '../SectionPhotos/SectionPhotos';
import './App.css';

import useFetch from '../useFetch/useFetch';
import { useState} from "react";

function App() {
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

  console.log(data)

  console.log(data?.results)

  let loadedData = data;

  if(loadedData?.results !== undefined){
      loadedData = data.results
  }

  const search = (input) =>{
    if(input === ""){
      refetch(`https://api.unsplash.com/photos/random?count=9&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`)
    }else {
      refetch(`https://api.unsplash.com/search/photos?page=1&per_page=9&query=${input}&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`)
    }
  }

  return (
    <div className="content__wrapper">
      <Navigation />
      <Header search={search} />
      <SectionPhotographers data={loadedData} />
      <SectionPhotos data={loadedData}/>
    </div>
  );
}

export default App;
