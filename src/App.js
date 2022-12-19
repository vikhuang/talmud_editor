import './App.css';
import Editor from './draft';


function App() {
  
  return (
    <div className="App">
      <div className='Header'>
        <span className='Header_loveSec'>
          For Michael
        </span>
        <p className='Header_title'>Tamud Layout Generator</p>
      </div>
      <div className='draftArea'>
          <Editor />
      </div>
    </div>
  );
}

export default App;
