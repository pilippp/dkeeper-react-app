import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");
  const [placeHolderTitle, setPlaceHolderTitle] = useState("Title");
  const [placeHolderContent, setPlaceHolderContent] =
    useState("Take a note...");
  const [isExpanded, setExpanded] = useState(false);

  function handleTitle(event) {
    setInputTitle(event.target.value);
  }

  function handleContent(event) {
    setInputContent(event.target.value);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded ? (
          <input
            name="title"
            placeholder={placeHolderTitle}
            value={inputTitle}
            onChange={handleTitle}
          />
        ) : null}
        <textarea
          onClick={() => setExpanded(true)}
          onChange={handleContent}
          name="content"
          placeholder={placeHolderContent}
          rows={isExpanded ? 3 : 1}
          value={inputContent}
        />
        <Zoom in={isExpanded ? true : false}>
          <Fab
            onClick={(e) => {
              e.preventDefault();
              props.addNote(inputTitle, inputContent);
              setInputTitle("");
              setInputContent("");
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
