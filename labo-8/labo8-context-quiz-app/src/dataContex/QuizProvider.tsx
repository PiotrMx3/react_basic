import React, {useEffect, useRef, useState} from "react";
import {DataContex} from "./QuizContext";
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

export const DataProvider = ({children}: {children: React.ReactNode}) => {
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
    <DataContex.Provider
      value={{
        questionsArray,
        isLoading,
        handleCheckQuestion,
        handleMoreQuestions,
      }}
    >
      {children}
    </DataContex.Provider>
  );
};
