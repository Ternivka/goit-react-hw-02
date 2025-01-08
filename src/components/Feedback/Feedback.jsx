import s from "./Feedback.module.css";
const Feedback = () => {
  return (
    <div className={s.container}>
      <button>Good</button>
      <button>Neutral</button>
      <button>Bad</button>
    </div>
  );
};
export default Feedback;
