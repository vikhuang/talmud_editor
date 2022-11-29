import React from 'react';
import {convertToRaw, Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';

export default function MyEditor() {
  const [titleState, setTitleState] = React.useState(
    () => EditorState.createEmpty(),
  );
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),
  );
  const handleSubmit = () => {
    console.log(convertToRaw(editorState.getCurrentContent()));
  }

  return (
    <>
        <div className='title'>
            <Editor 
                editorState={titleState} 
                onChange={setTitleState} 
                placeholder="title"    
            />            
        </div>
        <div className='essay1'>
            <Editor 
                editorState={editorState} 
                onChange={setEditorState} 
                placeholder="essay1"    
            />            
        </div>
        <div className='save_button'>
            <button onClick={handleSubmit}>save</button>    
        </div>      
        
    </>
  )
}



