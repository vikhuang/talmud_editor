import './App.css';
import Editor from './draft';


function App() {
  
  return (
    <div className="App">
      {/* <div className='testArea'>
        <input type="text" placeholder="essay1" className='ess1'></input>
      </div> */}
      <div className='draftArea'>
          <Editor />
      </div>
    </div>
  );
}

export default App;
