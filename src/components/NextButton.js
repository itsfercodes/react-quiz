function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null;

  // If there are questions left
  if (index < numQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  }

  // If there are not questions left
  return (
    <button className="btn btn-ui" onClick={() => dispatch({ type: "finish" })}>
      Finish
    </button>
  );
}
export default NextButton;
