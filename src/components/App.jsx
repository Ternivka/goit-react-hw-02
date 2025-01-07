// import { useState } from "react";
import "./App.css";
import Description from "./Description/description";

function App() {
  // const [feedback, setFeedback] = useState({
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // });
  return (
    <>
      <Description title="Sip Happens Café">
        Please leave your feedback about our service by selecting one of the
        options below.
      </Description>
    </>
  );
}

export default App;
