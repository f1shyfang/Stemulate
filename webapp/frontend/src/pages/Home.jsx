import { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Note"
import "../styles/Home.css"







function parseCsv(text) {
    const rows = text.split("\n").map((row) => row.split(","));
    const dataById = {};
    rows.forEach((row) => {
      const [parentText, parentFilename, ...data] = row; // Split parent ID
      const parentId = `${parentText}-${parentFilename}`; // Combine text and filename
      if (!dataById[parentId]) {
        dataById[parentId] = [];
      }
      dataById[parentId].push({ data }); // Assuming data is an array of other fields
    });
    return dataById;
  }
  

function Home() {
  const [dataById, setDataById] = useState({});
  const [selectedParentId, setSelectedParentId] = useState(null);
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
  const [currentRowData, setCurrentRowData] = useState(null);

  useEffect(() => {
    const readFile = async (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target.result;
        const parsedData = parseCsv(text);
        setDataById(parsedData);
      };
      reader.readAsText(file);
    };

    // Trigger file reading on component mount (optional)
    readFile();
  }, []);

  const handleParentSelect = (parentId) => {
    setSelectedParentId(parentId);
    setCurrentGroupIndex(0);
    setCurrentRowData(null);
  };

  const handleNextGroup = () => {
    if (selectedParentId) {
      const childRows = dataById[selectedParentId] || [];
      const nextIndex = Math.min(currentGroupIndex + 1, childRows.length - 1);
      setCurrentGroupIndex(nextInt);
    }
  };

  const handlePreviousGroup = () => {
    if (selectedParentId) {
      setCurrentGroupIndex(Math.max(currentGroupIndex - 1, 0));
    }
  };

  const handleChildSelect = (childRow) => {
    setCurrentRowData(childRow);
  };

  const renderCurrentGroup = () => {
    if (!selectedParentId) return <p>Select a parent row.</p>;
    const childRows = dataById[selectedParentId] || [];
    if (!childRows.length) return <p>No child rows for this parent.</p>;

    const currentRow = childRows[currentGroupIndex];
    // Display content of the current row based on your data structure (currentRow.data)
    return (
      <div key={currentRow.id}> {/* Replace with actual ID field */}
        {/* Display data fields from currentRow.data */}
      </div>
    );
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={(e) => readFile(e)} />
      <select
        value={selectedParentId}
        onChange={(e) => handleParentSelect(e.target.value)}
      >
        <option value="">Select Parent</option>
        {Object.keys(dataById).map((parentId) => (
          <option key={parentId} value={parentId}>
            Parent ID: {parentId}
          </option>
        ))}
      </select>
      <button onClick={handlePreviousGroup} disabled={!selectedParentId}>
        Previous Group
      </button>
      <button onClick={handleNextGroup} disabled={!selectedParentId}>
        Next Group
      </button>
      {renderCurrentGroup()}
      {currentRowData && (
        <div>
          {/* Optionally display details of the selected child row (currentRowData) */}
          <option key={parentId} value={parentId}>
            Parent ID: {parentId}  {/* Display full parent ID */}
            </option>
        </div>
      )}
    </div>
  );
}

export default Home;






/*




function Home() {
    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");

    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = () => {
        api
            .get("/api/notes/")
            .then((res) => res.data)
            .then((data) => {
                setNotes(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };

    const deleteNote = (id) => {
        api
            .delete(`/api/notes/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Note deleted!");
                else alert("Failed to delete note.");
                getNotes();
            })
            .catch((error) => alert(error));
    };

    const createNote = (e) => {
        e.preventDefault();
        api
            .post("/api/notes/", { content, title })
            .then((res) => {
                if (res.status === 201) alert("Note created!");
                else alert("Failed to make note.");
                getNotes();
            })
            .catch((err) => alert(err));
    };

    return (
        <div>
            <div>
                <h2>Notes</h2>
                {notes.map((note) => (
                    <Note note={note} onDelete={deleteNote} key={note.id} />
                ))}
            </div>
            <h2>Create a Note</h2>
            <form onSubmit={createNote}>
                <label htmlFor="title">Title:</label>
                <br />
                <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <label htmlFor="content">Content:</label>
                <br />
                <textarea
                    id="content"
                    name="content"
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <br />
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}

export default Home;

*/