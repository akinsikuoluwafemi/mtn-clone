import Home, {useState, USE} from './pages/Home';
import './App.scss';
import {PhotosContext, LoadingContext} from './ContextFile'

function App() {
  let [photos, setPhotos] = useState([]);
  let [loading, setLoading] = useState(false);
  
  useEffect(() => {
    
  },[])

  return (
    <PhotosContext.Provider value={{ photos, setPhotos }}>
      <LoadingContext.Provider value={{ loading, setLoading }}>
        <Home />
      </LoadingContext.Provider>
    </PhotosContext.Provider>
  );
}

export default App;
