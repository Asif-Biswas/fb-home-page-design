import './App.css';
import Navigation from './components/Navigation';
import { BrowserRouter } from 'react-router-dom';
import RouterComponent from './components/RouterComponent';


function App() {
  return (
    <div className='w3-black' style={{opacity:'0.8'}}>
    <BrowserRouter>
      <Navigation/>
      <RouterComponent/>
    </BrowserRouter>
    </div>
  );
}

export default App;
