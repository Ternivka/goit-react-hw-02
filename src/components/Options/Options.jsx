// btn
import s from "./Options.module.css";
const Options = ({ onUpdateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div className={s.container}>
      <button onClick={() => onUpdateFeedback("good")}>Good</button>
      <button onClick={() => onUpdateFeedback("neutral")}>Neutral</button>
      <button onClick={() => onUpdateFeedback("bad")}>Bad</button>
      {totalFeedback === 0 ? null : (
        <button onClick={resetFeedback}>Reset</button>
      )}
    </div>
  );
};
export default Options;
