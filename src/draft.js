import React from 'react';
import {convertToRaw, EditorState} from 'draft-js';
import { Editor, EditorProvider } from "draft-js-rte";
import 'draft-js/dist/Draft.css';

import EditorToolbar from './EditorToolbar';
import ButtonGroup from './ButtonGroup';
import InlineToggleButton from './Buttons';
import { customStyleMaps } from './customStyleMaps';


export default function MyEditor() {
  const [titleState, setTitleState] = React.useState(
    () => EditorState.createEmpty(),
  );
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),
  );
  const editor = React.useRef(null);
  const title = React.useRef(null);

  React.useEffect(() => {
    if (editor) {
      editor.current.focus();
    }
  }, []);


  const handleSubmit = () => {
    console.log(convertToRaw(editorState.getCurrentContent()));
  }

  return (
    <EditorProvider
      customStyleMaps={customStyleMaps}
      editorState={editorState}
      onChange={setEditorState}
    >
        <EditorToolbar>
          <ButtonGroup label="Font Family">
            <InlineToggleButton value="FONT_FAMILY_ROBOTO">
               Roboto
            </InlineToggleButton>
            <InlineToggleButton value="FONT_FAMILY_GEORGIA">
               Georgia
            </InlineToggleButton>
            <InlineToggleButton value="FONT_FAMILY_INCONSOLATA">
               Inconsolata
            </InlineToggleButton>
          </ButtonGroup>
          <ButtonGroup label="Font Size">
            <InlineToggleButton value="FONT_SIZE_SMALL">
              Small
            </InlineToggleButton>
            <InlineToggleButton value="FONT_SIZE_LARGE">
              Large
            </InlineToggleButton>
          </ButtonGroup>
        </EditorToolbar>
        <div className='title'>
            <Editor 
                ref={editor}
                placeholder="title"    
            />            
        </div>
        <div className='save_button'>
            <button onClick={handleSubmit}>save</button>    
        </div>      
        
    </EditorProvider>
  )
}



