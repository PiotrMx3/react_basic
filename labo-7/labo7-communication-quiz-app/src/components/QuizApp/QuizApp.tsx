import {useEffect, useRef, useState} from "react";
import Question from "../Question/Question";
import {Circles} from "react-loader-spinner";

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
  const isMounted = useRef(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);

    try {
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
    } catch (error) {
      console.error(error);
      return [];
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    isMounted.current = true;

    if (isMounted.current) {
      fetchData().then((result) => {
        if (isMounted.current) setQuestionsArray(result);
      });
    }
    return () => {
      isMounted.current = false;
    };
  }, []);

  const handleCheckQuestion = (index: number, answer: string) => {
    const cp = [...questionsArray];
    cp[index].user_answer = answer;
    setQuestionsArray(cp);
  };

  const handleMoreQuestions = () => {
    fetchData().then((result) => {
      if (isMounted.current) setQuestionsArray((prev) => [...prev, ...result]);
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

      {isLoading && (
        <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}

      <br />
      <button onClick={handleMoreQuestions} type="button">
        Load More
      </button>
    </>
  );
};

export default QuizApp;
