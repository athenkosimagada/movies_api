import Button from "../components/Button";
import Question from "../components/Question";

function FAQ() {
  return (
    <div className="container faq">
      <div className="faq__container">
        <div className="faq-content">
          <h2>Frequently Asked Questions</h2>
          <p>
            Got questions? We've got answers! Check out our FAQ section to find
            answers to the most common questions about StreamVibe.
          </p>
        </div>
        <Button />
      </div>
      <div className="faq-questions">
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
      </div>
    </div>
  );
}

export default FAQ;
