import NewDocButton from "../../components/NewDocButton";
import { images } from "../../constants";
function Contact() {
  return (
    <div className="contact">
      <div className="contact-details">
        <div className="contact-content">
          <h2>Welcome to our support page!</h2>
          <p>
            We're here to help you with any problems you may be having with our
            product.
          </p>
        </div>
        <div className="contact-img">
          <img src={images.support} alt="Movies Image" />
        </div>
      </div>
      <div className="contact-form">
        <div className="contact-row">
          <div className="contact-cell">
            <h4>First Name</h4>
            <input type="text" placeholder="Enter First Name" />
          </div>
          <div className="contact-cell">
            <h4>Last Name</h4>
            <input type="text" placeholder="Enter Last Name" />
          </div>
        </div>
        <div className="contact-row">
          <div className="contact-cell">
            <h4>Email</h4>
            <input type="text" placeholder="Enter your Email" />
          </div>
          <div className="contact-cell">
            <h4>Phone Number</h4>
            <div className="contact-choice">
              <input type="text" placeholder="Enter Phone Number" />
            </div>
          </div>
        </div>
        <div className="contact-row">
          <div className="contact-cell">
            <h4>Mesdage</h4>
            <textarea placeholder="Enter your Email" />
          </div>
        </div>
        <div className="contact-row">
          <div className="contact-action">
            <input type="checkbox" name="agree" />
            <p>I agree with Terms of Use and Privacy Policy</p>
          </div>
          <NewDocButton className="btn-primary button" buttonName="Send Message" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
