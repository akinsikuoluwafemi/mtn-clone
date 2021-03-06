import Home, {useState, useEffect} from './pages/Home';
import './App.scss';
import {PhotosContext, LoadingContext} from './ContextFile'

function App() {
  
  return (
    
        <Home />
      </LoadingContext.Provider>
    </PhotosContext.Provider>
  );
}

export default App;
