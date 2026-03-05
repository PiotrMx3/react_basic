import type {QuestionsProps} from "../Question/Question";

const MultipleChoiceQuestion = ({
  question,
  onHandleCheckQuestion,
  index,
}: QuestionsProps) => {
  const allQuestion = [
    ...question.incorrect_answers,
    question.correct_answer,
    // eslint-disable-next-line react-hooks/purity
  ].sort(() => Math.random() - 0.5);

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
        <select
          onChange={(e) => onHandleCheckQuestion(index, e.target.value)}
          defaultValue={""}
        >
          <option disabled value="">
            Select an answer
          </option>
          {allQuestion.map((e, i) => (
            <option key={i} value={e}>
              {e}
            </option>
          ))}
        </select>
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

export default MultipleChoiceQuestion;
