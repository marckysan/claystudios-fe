import emailjs from "emailjs-com";
import React, { FC, useState } from "react";
import emailKeys from "../../utils/email/emailkey";
import "./enquiryForm.css";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
  isAgreed: boolean;
};

const EnquiryForm: FC = () => {
  const initialState: FormValues = {
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
    isAgreed: false,
  };

  const [formValues, setFormValues] = useState(initialState);
  const [isValidationDisplayed, setIsValidationDisplayed] = useState(false);

  const updateValues = (prop) => (event) => {
    let newState: FormValues = {
      ...formValues,
      [prop]: prop === "isAgreed" ? event.target.checked : event.target.value,
    };
    setFormValues(newState);

    if (prop === "isAgreed" && event.target.checked === true) {
      setIsValidationDisplayed(false);
    }
  };

  const handleSubmit = (event) => {
    console.log(formValues);
    if (
      formValues.isAgreed &&
      formValues.firstName !== "" &&
      formValues.lastName !== "" &&
      formValues.email !== "" &&
      formValues.subject !== "" &&
      formValues.message !== ""
    ) {
      event.preventDefault();
      sendFeedback(emailKeys.TEMPLATE_ID, formValues);
    } else {
      event.preventDefault();
      setIsValidationDisplayed(true);
    }
  };

  const sendFeedback = (templateId, variables) => {
    emailjs
      .send(
        "service_iawc9fn",
        templateId,
        variables,
        "user_snWopnnN98yTn96rrjvCF"
      )
      .then((res) => {
        console.log("Email successfully sent!");
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: "2vw",
      }}
    >
      <form className="form" id="contact-form">
        <div className="formContainer">
          <div className="formGroup">
            <label className="labelText">First name:</label>
            <input
              className="inputFormControl"
              id="fieldFirstName"
              type="text"
              placeholder=""
              required={true}
              onChange={updateValues("firstName")}
            />
          </div>
          <div className="formGroup">
            <label className="labelText">Last name: </label>
            <input
              className="inputFormControl"
              id="fieldLastName"
              type="text"
              placeholder=""
              required={true}
              onChange={updateValues("lastName")}
            />
          </div>
          <div className="formGroup ">
            <label className="labelText">Your email: </label>
            <input
              className="inputFormControl"
              id="fieldEmail"
              type="email"
              placeholder=""
              required={true}
              onChange={updateValues("email")}
            />
          </div>
          <div className="formGroup">
            <label className="labelText">Email subject: </label>
            <input
              className="inputFormControl"
              id="fieldSubject"
              type="text"
              placeholder=""
              required={true}
              onChange={updateValues("subject")}
            />
            <div className="kv-ee-error-container"></div>
          </div>
          <div className="formGroupMessage">
            <label className="labelText">Your message: </label>
            <textarea
              className="inputFormControlTextArea"
              id="fieldMessage"
              placeholder=""
              required={true}
              onChange={updateValues("message")}
            ></textarea>
          </div>
          <div className="formGroupCheckbox">
            <label className="checkBoxDescription">
              <input
                type="checkbox"
                id="fieldSubscribe"
                value="false"
                style={{ marginRight: "1vw" }}
                onChange={updateValues("isAgreed")}
              />
              By checking this box and submitting your information, you are
              granting us permission to email you. You may unsubscribe at any
              time.
            </label>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              marginBottom: "2vw",
            }}
          >
            {isValidationDisplayed && (
              <p className="errorMessage">
                Please ensure all fields are filled and check the checkbox
                before submitting.
              </p>
            )}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <button className="submitBtn" onClick={handleSubmit}>
                <div>Send Message</div>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EnquiryForm;
