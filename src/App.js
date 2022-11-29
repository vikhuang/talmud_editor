import logo from './logo.svg';
import './App.css';
import MyEditor from './draft';


function App() {
  
  return (
    <div className="App">
      {/* <div className='testArea'>
        <input type="text" placeholder="essay1" className='ess1'></input>
      </div> */}
      <div className='draftArea'>
          <MyEditor />
      </div>
    </div>
  );
}

export default App;
