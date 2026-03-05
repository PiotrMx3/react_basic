import type {QuestionsProps} from "../Question/Question";

const TrueFalseQuestion = ({
  question,
  onHandleCheckQuestion,
  index,
}: QuestionsProps) => {
  const correct: boolean | null = question.user_answer
    ? question.user_answer === question.correct_answer
    : null;

  return (
    <div
      style={{
        backgroundColor: correct === null ? "" : correct ? "green" : "red",
      }}
    >
      <p>{question.question}</p>
      {question.user_answer === null ? (
        <>
          <input
            onChange={() => onHandleCheckQuestion(index, "True")}
            type="radio"
            name="true"
          />
          <label htmlFor="true">True</label>

          <input
            onChange={() => onHandleCheckQuestion(index, "False")}
            type="radio"
            name="false"
          />
          <label htmlFor="false">False</label>
        </>
      ) : correct ? (
        <p>You answered {question.user_answer} wich is the correct answer</p>
      ) : (
        <p>
          You answered {question.user_answer} and the correct answer was
          {question.correct_answer}
        </p>
      )}
    </div>
  );
};

export default TrueFalseQuestion;
