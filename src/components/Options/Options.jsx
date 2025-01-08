// btn
import s from "./Options.module.css";
const Options = ({ onUpdateFeedback }) => {
  return (
    <div className={s.container}>
      <button onClick={() => onUpdateFeedback("good")}>Good</button>
      <button onClick={() => onUpdateFeedback("neutral")}>Neutral</button>
      <button onClick={() => onUpdateFeedback("bad")}>Bad</button>
    </div>
  );
};
export default Options;
