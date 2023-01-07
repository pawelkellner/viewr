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
      <h1>loading....</h1>
    )
  };

  if (error) console.log(error);

  console.log(data)

  return (
    <div className="content__wrapper">
      <Navigation />
      <Header />
      <SectionPhotographers data={data} />
      <SectionPhotos data={data}/>
    </div>
  );
}

export default App;
