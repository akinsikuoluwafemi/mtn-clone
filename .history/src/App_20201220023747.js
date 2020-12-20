import Home, {useState} from './pages/Home';
import './App.scss';
import {PhotosContext, LoadingContext} from './ContextFile'

function App() {
  con [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  

  return (
    <PhotosContext.Provider value={{ photos, setPhotos }}>
      <LoadingContext.Provider value={{ loading, setLoading }}>
        <Home />
      </LoadingContext.Provider>
    </PhotosContext.Provider>
  );
}

export default App;
