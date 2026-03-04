interface IQuestions {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface IData {
  results: IQuestions[];
}

const QuizApp = () => {
  return <h1>hej</h1>;
};

export default QuizApp;
