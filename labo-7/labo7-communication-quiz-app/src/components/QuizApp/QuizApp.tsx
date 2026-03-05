import {useEffect, useRef, useState} from "react";
import Question from "../Question/Question";

export interface IQuestions {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  user_answer: string | null;
}

interface IData {
  results: IQuestions[];
}

const QuizApp = () => {
  const [questionsArray, setQuestionsArray] = useState<IQuestions[]>([]);
  const isMouted = useRef(false);

  const fetchData = async () => {
    const response = await fetch("https://opentdb.com/api.php?amount=10");
    if (!response.ok) throw new Error("fetch failed");
    const data: IData = await response.json();

    const modifided: IQuestions[] = data.results.map((e) => {
      return {
        ...e,
        user_answer: null,
      };
    });

    return modifided;
  };

  useEffect(() => {
    isMouted.current = true;

    if (isMouted.current) {
      fetchData().then((result) => setQuestionsArray(result));
    }
    return () => {
      isMouted.current = false;
    };
  }, []);

  const handleCheckQuestion = (index: number, answer: string) => {
    const cp = [...questionsArray];
    cp[index].user_answer = answer;
    setQuestionsArray(cp);
  };

  const handleMoreQuestions = () => {
    fetchData().then((result) => {
      if (isMouted.current) setQuestionsArray((prev) => [...prev, ...result]);
    });
  };

  return (
    <>
      {questionsArray.map((e, i) => (
        <Question
          key={i}
          question={e}
          onHandleCheckQuestion={handleCheckQuestion}
          index={i}
        />
      ))}
      <br />
      <button onClick={handleMoreQuestions} type="button">
        Load More
      </button>
    </>
  );
};

export default QuizApp;
