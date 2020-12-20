import Home, {useState} from './pages/Home';
import './App.scss';
import {PhotosContext, LoadingContext} from './ContextFile'

function App() {
  let [photos, setPhotos] = useState([]);
  let [loading, setLoading] = useState(false);
  

  return (
    // <PhotosContext.Provider value={{ photos, setPhotos }}>
      {/* <LoadingContext.Provider value={{ loading, setLoading }}> */}
      {/* </LoadingContext.Provider> */}
    // </PhotosContext.Provider>
  
  );
}

export default App;
