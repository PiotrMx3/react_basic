import MultipleChoiceQuestion from "../MultipleChoiceQuestion/MultipleChoiceQuestion";
import type {IQuestions} from "../QuizApp/QuizApp";
import TrueFalseQuestion from "../TrueFalseQuestion/TrueFalseQuestion";

export interface QuestionsProps {
  question: IQuestions;
  onHandleCheckQuestion: (index: number, answer: string) => void;
  index: number;
}

const Question = ({question, onHandleCheckQuestion, index}: QuestionsProps) => {
  if (question.type === "multiple") {
    return (
      <MultipleChoiceQuestion
        question={question}
        onHandleCheckQuestion={onHandleCheckQuestion}
        index={index}
      />
    );
  } else {
    return (
      <TrueFalseQuestion
        question={question}
        onHandleCheckQuestion={onHandleCheckQuestion}
        index={index}
      />
    );
  }
};

export default Question;
