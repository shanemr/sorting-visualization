import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import SortingVisualizer from './Components/SortingVisualizer';
import Header from './Components/Controls'

function App() {
  return (
    <div className="App" style={{height: '100vh'}}>
      <SortingVisualizer></SortingVisualizer>
    </div>
  );
}

export default App;
