import './App.css';
import Editor from './draft';


function App() {
  
  return (
    <div className="App">
      <div className='Header'>
        <p className='Header_loveSec'>
          For Michael
        </p>
        <div className='Header_title'>
          Talmud 
          <div className='Header_title_sub'> תַּלְמוּד‎ </div>
          Layout Generator
        </div>
      </div>
      <div className='draftArea'>
          <Editor />
      </div>
    </div>
  );
}

export default App;
