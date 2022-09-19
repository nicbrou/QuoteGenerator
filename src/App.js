
import './App.css';
import "./components/styles.css";
import  WrapperA  from './components/WrapperA';


function App() {
  return (
    
    <div className="App">
      <h1 className="title">The Love Quote Generator</h1>
      <WrapperA  style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}>
        </WrapperA>
      
    </div>
  );
}

export default App;
