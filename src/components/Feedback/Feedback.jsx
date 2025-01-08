// g,n,b
import "./Feedback.modal.css";
const Feedback = ({ feedback }) => {
  if (feedback.good === 0 && feedback.neutral === 0 && feedback.bad === 0) {
    return (
      <div className="no-feedback">
        <p>No feedback yet</p>
      </div>
    );
  }
  return (
    <ul>
      <li>Good: {feedback.good}</li>
      <li>Neutral: {feedback.neutral}</li>
      <li>Bad: {feedback.bad}</li>
    </ul>
  );
};
export default Feedback;
