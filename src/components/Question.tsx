import { useState } from "react";
import { HiMinusSm, HiOutlinePlusSm } from "react-icons/hi";

function Question() {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!toggle);
  }
  return (
    <div className="question">
      <div className="question_number">
        <span>01</span>
      </div>
      <div className={`question_container ${toggle ? '' : 'center'}`}>
        <div className="question_content">
          <h3>What is StreamVibe?</h3>

          {toggle ? (
            <p>
              StreamVibe is a streaming service that allows you to watch movies
              and shows on demand.
            </p>
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
