import Home, {useState} from './pages/Home';
import './App.scss';
import {PhotosContext, LoadingContext} from './ContextFile'

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  

  return (
    <PhotosContext.Provider>
      <LoadingContext.Provider>

    <Home/>
    </PhotosContext.Provider>

  );
}

export default App;
