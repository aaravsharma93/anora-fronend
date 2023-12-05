import * as React from "react";
import dynamic from "next/dynamic";
import { convertToRaw, EditorState } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import { stateFromHTML } from "draft-js-import-html";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

const TextEditor = ({ handleInput, question }) => {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createWithContent(stateFromHTML(question.answer))
  );

  const handleChange = ({ html, text }) => {
    const rawContentState = convertToRaw(editorState.getCurrentContent());
    const markup = draftToHtml(rawContentState);
    handleInput(markup, question);
  };

  return (
    <>
      <Editor
        editorState={editorState}
        onChange={handleChange}
        onEditorStateChange={setEditorState}
        editorClassName={{
          height: "100px!importtant",
          borderRadius: 2,
          border: "2px solid #000",
          padding: 5,
          maxWidth: "100%",
        }}
      />
    </>
  );
};

export default TextEditor;
