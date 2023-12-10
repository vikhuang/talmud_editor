import { $getRoot, $getSelection } from 'lexical';
import { forwardRef, useEffect, useRef, useState } from 'react';

import { theme } from './theme';
import ToolbarPlugin from './plugins/ToolbarPlugin';
import TreeViewPlugin from './plugins/TreeViewPlugin';

import {LexicalComposer} from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import {OnChangePlugin} from '@lexical/react/LexicalOnChangePlugin';
import { MaxLengthPlugin } from './plugins/MaxLengthPlugin';
import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';

import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";

import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { TRANSFORMERS } from "@lexical/markdown";

import ListMaxIndentLevelPlugin from "./plugins/ListMaxIndentLevelPlugin";
// import CodeHighlightPlugin from "./plugins/CodeHighlightPlugin";
import AutoLinkPlugin from "./plugins/AutoLinkPlugin";
import PlaygroundAutoLinkPlugin from './plugins/AutoLinkPlugin';

// When the editor changes, you can get notified via the
// LexicalOnChangePlugin!
function onChange(editorState) {
  editorState.read(() => {
    // Read the contents of the EditorState here.
    const root = $getRoot();
    const selection = $getSelection();

    //console.log(root, selection);

  });
}

function SaveContentButton({editable = true}) {
  const [editor] =  useLexicalComposerContext();
  const word = editable.toString();
  const onEdit = editor.isEditable();
  useEffect(() => {
      console.log(editable);
  }, [])
  
  return(
    <>
      <button onClick={() => {editor.setEditable(false)}}>So False</button>
      <button onClick={() => {console.log(editor.isEditable())}}>Now {word}</button>
      <button onClick={() => {editor.setEditable(true)}}>So True</button>
    </>
  )
}


function onError(error) {
  console.error(error);
}

function EditableControlPlugin({ onFocused }) {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    // setEditable  
    editor.setEditable(!!onFocused);
    if (onFocused) {
      setTimeout(() => editor.focus(), 0); // 或更长的延迟
    }
  
    
  }, [editor, onFocused]);

  return null;
}


const Editor = forwardRef((props, ref) => {
  
  const [saveContent, setSaveContent] = useState(null);
  const [editable, setEditable] = useState(false);
  const [editorConfig, setEditorConfig] = useState(
    {
      namespace: 'MyEditor', 
      theme: theme,
      editable: false,
      onError,
      nodes: [
        HeadingNode,
        ListNode,
        ListItemNode,
        QuoteNode,
        CodeNode,
        CodeHighlightNode,
        TableNode,
        TableCellNode,
        TableRowNode,
        AutoLinkNode,
        LinkNode]
    });

  const onFocused = props.onFocused;
  const placeholder = props.essayNo;

  const layer = props.essayNo.layer
  const maxLength = layer === 1 ? 750 : (layer === 2  ? 1300 : (layer === 3 ? 3300 : 0))



  
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="editor-container" ref={ref}>
        <div className='editor-toolbar' style={{visibility: onFocused === true ? 'visible' : 'hidden' }}>
          <ToolbarPlugin />
        </div>
        <div className="editor-inner">
          <RichTextPlugin
            contentEditable={<ContentEditable className='editor-input'  />}
            placeholder={<Placeholder essayNo={placeholder}/>}
            ErrorBoundary={LexicalErrorBoundary}
          /> 
          <MaxLengthPlugin maxLength={maxLength} />
          <OnChangePlugin onChange={onChange} />
          {/* <TreeViewPlugin /> */}
          <HistoryPlugin />
          <EditableControlPlugin onFocused={onFocused} />
          
          <ListPlugin />
          <LinkPlugin />
          <AutoLinkPlugin />
          <ListMaxIndentLevelPlugin maxDepth={7} />
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
            {/* <SaveContentButton editable={editable}/>
            <button onClick={()=>{setEditable(true)}}>parent!</button> */}
        </div>
      </div> 
    </LexicalComposer>
  );
});

export default Editor;

function Placeholder({essayNo}) {
  const holderSample1 = `The Talmud (/ˈtɑːlmʊd, -məd, ˈtæl-/; Hebrew: תַּלְמוּד‎, romanized: Talmūḏ) is the central text of Rabbinic Judaism and the primary source of Jewish religious law (halakha) and Jewish theology.[1][2] Until the advent of modernity, in nearly all Jewish communities, the Talmud was the centerpiece of Jewish cultural life and was foundational to "all Jewish thought and aspirations", serving also as "the guide for the daily life" of Jews.[3]`
  const holderSample2 = `The term Talmud normally refers to the collection of writings named specifically the Babylonian Talmud (Talmud Bavli), although there is also an earlier collection known as the Jerusalem Talmud (Talmud Yerushalmi).[4] It may also traditionally be called Shas (ש״ס), a Hebrew abbreviation of shisha sedarim, or the "six orders" of the Mishnah.</n>The Talmud has two components: the Mishnah (משנה, c. 200 CE), a written compendium of the Oral Torah; and the Gemara (גמרא, c. 500 CE), an elucidation of the Mishnah and related Tannaitic writings that often ventures onto other subjects and expounds broadly on the Hebrew Bible. The term "Talmud" may refer to either the Gemara alone, or the Mishnah and Gemara together.`
  const holderSample3 = `The entire Talmud consists of 63 tractates, and in the standard print, called the Vilna Shas, there are 2,711 double-sided folios.[5] It is written in Mishnaic Hebrew and Jewish Babylonian Aramaic and contains the teachings and opinions of thousands of rabbis (dating from before the Common Era through to the fifth century) on a variety of subjects, including halakha, Jewish ethics, philosophy, customs, history, and folklore, and many other topics. The Talmud is the basis for all codes of Jewish law and is widely quoted in rabbinic literature.`
  
  const layer = essayNo.layer
  const holderContext = layer === 1 ? holderSample1 : (layer === 2 ? holderSample2 : holderSample3)


  return (
    <div className="editor-placeholder">
      <h1>Essay {essayNo.no}</h1>
      <div>{holderContext}</div>
      
    </div>
  );
}