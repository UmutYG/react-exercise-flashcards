import { useState } from "react";
import { questions } from "./quetions";
import "./styles.css";

const allQuestions = questions;

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

function FlashCards() {
  return (
    <div className="flashcards">
      {allQuestions.map((q) => (
        <Question key={q.id} question={q} />
      ))}
    </div>
  );
}

function Question({ question }) {
  const [isAnswerOpen, setIsAnswerOpen] = useState(false);
  function clickHandler() {
    setIsAnswerOpen((state) => !state);
  }
  return (
    <div onClick={clickHandler} className={isAnswerOpen ? "selected" : ""}>
      {!isAnswerOpen ? question.question : question.answer}
    </div>
  );
}
