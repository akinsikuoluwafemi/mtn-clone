import Home, {useState} from './pages/Home';
import './App.scss';
import {PhotosContext, LoadingContext} from './ContextFile'

function App() {
  const [photos, setPhotos] = useState([]);
  
  return (

    <Home/>
  );
}

export default App;
