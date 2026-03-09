import Question from "../Question/Question";
import {Circles} from "react-loader-spinner";
import {useQuizData} from "../../dataContex/QuizContext";
import {useTheme} from "../../dataContex/ThemeContext";

const QuizApp = () => {
  const {questionsArray, isLoading, handleCheckQuestion, handleMoreQuestions} =
    useQuizData();

  const {toggleTheme} = useTheme();

  return (
    <>
      <button onClick={toggleTheme} type="button">
        Theme
      </button>

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
