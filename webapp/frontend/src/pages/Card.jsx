import React, { useState, useEffect } from "react";

function parseCsv(text) {
  // Implement your logic to parse the CSV data into an object structure
  // This example assumes a simple structure with "parentID" and other data fields
  const rows = text.split("\n").map((row) => row.split(","));
  const dataById = {};
  rows.forEach((row) => {
    const [parentID, ...data] = row;
    if (!dataById[parentID]) {
      dataById[parentID] = [];
    }
    dataById[parentID].push({ data }); // Assuming data is an array of other fields
  });
  return dataById;
}

/*
const readFile = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target.result;
      const parsedData = parseCsv(text);
      setDataById(parsedData);
      const flashcards = convertToFlashcards(parsedData[selectedParentId] || []);
      setFlashcards(flashcards);
    };
    reader.readAsText(file);
  };
*/

function Card() {
    const [dataById, setDataById] = useState({});
    const [selectedParentId, setSelectedParentId] = useState(null);
    const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
    const [currentRowData, setCurrentRowData] = useState(null);
    const [flashcards, setFlashcards] = useState([]); // State for flashcards




  useEffect(() => {
    const readFile = async (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target.result;
        const parsedData = parseCsv(text);
        setDataById(parsedData);
        console.log("dataById:", dataById);
        const flashcards = convertToFlashcards(parsedData[selectedParentId] || []); // Assuming data for selected parent
        setFlashcards(flashcards);
        setDataById(parsedData);
      };
      reader.readAsText(file);
    };

    // Trigger file reading on component mount (optional)
    readFile();
  }, [selectedParentId]);

  const handleParentSelect = (e) => {
    setSelectedParentId(e.target.value);
    setCurrentGroupIndex(0);
    setCurrentRowData(null);
  };

 // Function to convert data to flashcards
 const convertToFlashcards = (data) => {
    return data.map((row) => ({
      question: row.data[0], // Assuming question is the first element in "data"
      answer: row.data[1], // Assuming answer is the second element in "data"
      interval: 1, // Initial interval (days)
      easeFactor: 2.5, // Starting ease factor
      nextReviewDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), // Initial review date (1 day from now)
    }));
  };

  // Function to update flashcards based on user response (correct/incorrect)
  const updateFlashcard = (card, isCorrect) => {
    const updatedFlashcards = [...flashcards];
    const cardIndex = updatedFlashcards.findIndex((f) => f === card);
    if (cardIndex !== -1) {
      const updatedCard = { ...card };
      if (isCorrect) {
        updatedCard.interval *= updatedCard.easeFactor;
        updatedCard.easeFactor = Math.min(updatedCard.easeFactor + 0.1, 3.5);
      } else {
        updatedCard.interval = 1;
        updatedCard.easeFactor = Math.max(updatedCard.easeFactor - 0.1, 1.3);
      }
      updatedCard.nextReviewDate = new Date(
        Date.now() + updatedCard.interval * 24 * 60 * 60 * 1000
      );
      updatedFlashcards[cardIndex] = updatedCard;
      setFlashcards(updatedFlashcards);
    }
  };

  // Function to get flashcards for review (based on next review date)
  const getFlashcardsForReview = () => {
    return flashcards.filter(
      (card) => new Date(card.nextReviewDate) <= new Date()
    );
  };


  const renderCurrentGroup = () => {
    if (!selectedParentId) return <p>Select a parent row.</p>;

    const currentGroupData = dataById[selectedParentId]; // Get data for selected parent

    // Check if there's data for the selected parent
    if (!currentGroupData || currentGroupData.length === 0) {
      return <p>No data for selected parent.</p>;
    }


    const reviewFlashcards = getFlashcardsForReview();
    if (!reviewFlashcards.length) {
        return <p>No flashcards to display.</p>;
      }
    // Flashcard display and user interaction logic (needs implementation)
    return (
      <div>
        <h2>Data for Parent: {selectedParentId}</h2>
        {reviewFlashcards.length > 0 ? (
          <div>
            <h3>Flashcards due for review:</h3>
            {reviewFlashcards.map((card, index) => (
              <div key={index}>
                <p>Question: {card.question}</p>
                {/* Button to reveal answer */}
                <button onClick={() => console.log("Answer:", card.answer)}>
                  Show Answer
                </button>
                {/* Buttons to record user response (correct/incorrect) */}
                <button onClick={() => updateFlashcard(card, true)}>
                  Correct
                </button>
                <button onClick={() => updateFlashcard(card, false)}>
                  Incorrect
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p>No flashcards due for review.</p>
        )}
      </div>
    );
    
    // You can customize the rendering logic here to display the data in a desired format (e.g., table, list)
    return (
      <div>
        <h2>Data for Parent: {selectedParentId}</h2>
        {currentGroupData.map((row, index) => (
          <div key={index}>
            {/* Access and display data from each row object */}
            <p>Data: {row.data.join(", ")}</p>  {/* Assuming data is an array, join with comma and space */}
          </div>
        ))}
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
      {renderCurrentGroup()}
    </div>
  );
}

export default Card;
