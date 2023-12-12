import Button from "../../components/NewDocButton";
import Question from "../../components/Question";
import data from "../../constants/data";

interface QuestionProps {
  question: string;
  answer: string;
  number?: number;
}

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
        <Button className="btn-primary" buttonName="Ask Question" />
      </div>
      <div className="faq-questions">
        {data.questions.map((question: QuestionProps, index) => (
          <Question
            key={index}
            question={question.question}
            answer={question.answer}
            number={index + 1}
          />
        ))}
      </div>
    </div>
  );
}

export default FAQ;
