import { useEffect, useState, useRef } from 'react';
import './App.css';
import { SectionSelector } from './section-selector';
import { Essay5, Essay6 } from './essay-third';
import { Essay1 } from './essay-first';


function App() {
  const [showDraftArea, setShowDraftArea] = useState(false);
  const [essayFocused, setEssayFocused] = useState(null);
  
  const [shapeOutside, setShapeOutside] = useState(''); 
  const essay1Ref = useRef(null);

  useEffect(() => {
    if(essay1Ref.current) {
      const rect = essay1Ref.current.getBoundingClientRect();
      const insetShape = `inset(${rect.top}px ${rect.right}px ${rect.bottom}px ${rect.left}px)`;   
      setShapeOutside(insetShape)
      console.log(rect.width, rect.x, rect.y, rect.width, rect.height, rect.right, rect.bottom)
    }
  }, [essayFocused])
  
  return (
    <>
    <div className="App">
      <div className='Header'>
        <div className='Header_title' style={{fontWeight: 900}}>
            Talmud
            <div className='Header_title_sub'> תַּלְמוּד‎ </div>       
        </div>
        <div className='Header_title'>Layout Generator</div>
      </div>
      <div className='preview'>
        <SectionSelector onFocused={setEssayFocused} essayFocused={essayFocused}  />
        <div className='third_wrapper'>
          <Essay5 onFocused={essayFocused} shapeHeight={shapeOutside} />
          <Essay6 onFocused={essayFocused} shapeHeight={shapeOutside} />
        </div>
        <div className='first_wrapper'>
          <div className='essay1'>
              <Essay1 onFocused={essayFocused} ref={essay1Ref}/>              
          </div>
        </div>   
      </div> 
       
      {/* <div className='draftArea' style={{visibility: showDraftArea ? 'visible' : 'hidden'}}>
          <Editor />
      </div> */}
    </div>
    <div className="blur-overlay">
      <div className='content'>
        For the best user experience, it is recommended to use a supported device;<br/> screen resolution greater than 1280*800.
      </div>
    </div> 
  </>
  );
}

export default App;


