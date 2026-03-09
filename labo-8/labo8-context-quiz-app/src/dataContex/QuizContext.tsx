import {createContext, useContext} from "react";
import type {IQuestions} from "./QuizProvider";

interface IDataContex {
  questionsArray: IQuestions[];
  isLoading: boolean;
  handleCheckQuestion: (index: number, answer: string) => void;
  handleMoreQuestions: () => void;
}

export const DataContex = createContext<IDataContex>({
  questionsArray: [],
  isLoading: true,
  handleCheckQuestion: () => {},
  handleMoreQuestions: () => {},
});

export const useQuizData = () => {
  return useContext(DataContex);
};
