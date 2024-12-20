import { useState } from "react";
import { quiz } from "./Data";
import "./quiz.css";
import SidebarUser from "./Sidebar";
const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const { question, choices, correctAnswer } = questions[activeQuestion];

  const onClickNext = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  const addLeadingZero = (number) => (number > 9 ? number :  `0${number}`);

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <SidebarUser />
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: "#f5f5f5",
        }}
      >
        {/* all the  quizz */}
        
        


        {/* Quiz Container */}
        <div
          className="quiz-container"
          style={{
            width: "60%",
            maxWidth: "600px",
            padding: "20px",
            background: "white",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            border: "1px solid #ddd",
          }}
        >
          {!showResult ? (
            <div>
              <div>
                <span className="active-question-no">
                  {addLeadingZero(activeQuestion + 1)}
                </span>
                <span className="total-question">
                  /{addLeadingZero(questions.length)}
                </span>
              </div>
              <h2>{question}</h2>
              <ul>
                {choices.map((answer, index) => (
                  <li
                    onClick={() => onAnswerSelected(answer, index)}
                    key={answer}
                    className={
                      selectedAnswerIndex === index ? "selected-answer" : null
                    }
                    style={{
                      cursor: "pointer",
                      padding: "10px",
                      margin: "8px 0",
                      borderRadius: "4px",
                      backgroundColor:
                        selectedAnswerIndex === index ? "#e0e7ff" : "#f9f9f9",
                      border: "1px solid #ddd",
                    }}
                  >
                    {answer}
                  </li>
                ))}
              </ul>
              <div style={{ textAlign: "right" }}>
                <button
                  onClick={onClickNext}
                  disabled={selectedAnswerIndex === null}
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: selectedAnswerIndex === null ? "not-allowed" : "pointer",
                    opacity: selectedAnswerIndex === null ? 0.6 : 1,
                  }}
                >
                  {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
                </button>
              </div>
            </div>
          ) : (
            <div className="result" style={{ textAlign: "center" }}>
              <h3>Result</h3>
              <p>
                Total Question: <span>{questions.length}</span>
              </p>
              <p>
                Total Score: <span>{result.score}</span>
              </p>
              <p>
                Correct Answers: <span>{result.correctAnswers}</span>
              </p>
              <p>
                Wrong Answers: <span>{result.wrongAnswers}</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz; 