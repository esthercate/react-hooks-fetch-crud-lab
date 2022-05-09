import React, {useEffect, useState} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then((res) => res.json())
    .then((data) => setQuestions(data));
  }, []);

  function handledeleted(query) {
    console.log(query);
    const questionsLeft = questions.filter((data) => data.id !== query.id)
    setQuestions(questionsLeft);
  }

  function handleUpdate(updated) {
    console.log(updated)
    const updatedList = questions.map((question) => {
      if(question.id === updated.id){
        return updated;
      } else {
        return question;
      }
    })
    setQuestions(updatedList);
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question) => (
        <QuestionItem key={question.id} question={question} onDelete={handledeleted} updateAnswer={handleUpdate} />
      ))}</ul>
    </section>
  );
}

export default QuestionList;
