import Home, {useState, useEffect} from './pages/Home';
import './App.scss';
import {PhotosContext, LoadingContext} from './ContextFile'

function App() {
  
  return (
    <PhotosContext.Provider value={{ photos, setPhotos }}>
      <LoadingContext.Provider value={{ loading, setLoading }}>
        <Home />
      </LoadingContext.Provider>
    </PhotosContext.Provider>
  );
}

export default App;
