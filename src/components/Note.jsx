import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={(e) => {
          e.preventDefault();
          props.deleteNote(props.id);
        }}
        className="deleteButton"
      >
        <DeleteIcon />
      </button>
    </div>
  );
}
export default Note;
