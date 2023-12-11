import { useState } from "react";
import { HiMinusSm, HiOutlinePlusSm } from "react-icons/hi";

interface QuestionProps {
  question: string;
  answer: string;
  number?: number;
}

function Question({question, answer, number}: QuestionProps) {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!toggle);
  }

  const formattedNumber = number !== undefined ? (number < 10 ? `0${number}` : `${number}`) : '';

  return (
    <div className="question">
      <div className="question_number">
        <span>{formattedNumber}</span>
      </div>
      <div className={`question_container ${toggle ? "" : "center"}`}>
        <div className="question_content">
          <h3>{question}</h3>

          {toggle ? (
            <p>{answer}</p>
          ) : null}
        </div>

        <span onClick={() => handleToggle()}>
          {toggle ? <HiMinusSm /> : <HiOutlinePlusSm />}
        </span>
      </div>
    </div>
  );
}

export default Question;
