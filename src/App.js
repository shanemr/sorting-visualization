import logo from './logo.svg';
import './App.css';
import SortingVisualizer from './Components/SortingVisualizer';
import Header from './Components/Header'

function App() {
  return (
    <div className="App" style={{height: '100vh'}}>
      <Header></Header>
      <SortingVisualizer></SortingVisualizer>
    </div>
  );
}

export default App;
