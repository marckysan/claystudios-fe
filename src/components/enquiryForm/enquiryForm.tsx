import React, { FC } from "react";
import "./enquiryForm.css";

const EnquiryForm: FC = () => {
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
            />
            <div className="kv-ee-error-container"></div>
          </div>
          <div className="formGroup">
            <label className="labelText">Last name: </label>
            <input
              className="inputFormControl"
              id="fieldLastName"
              type="text"
              placeholder=""
              required={true}
            />
            <div className="kv-ee-error-container"></div>
          </div>
          <div className="formGroup ">
            <label className="labelText">Your email: </label>
            <input
              className="inputFormControl"
              id="fieldEmail"
              type="text"
              placeholder=""
              required={true}
            />
            <div className="kv-ee-error-container"></div>
          </div>
          <div className="formGroup">
            <label className="labelText">Email subject: </label>
            <input
              className="inputFormControl"
              id="fieldSubject"
              type="text"
              placeholder=""
              required={true}
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
            ></textarea>
            <div className="kv-ee-error-container"></div>
          </div>
          <div className="formGroupCheckbox">
            <label className="checkBoxDescription">
              <input
                type="checkbox"
                id="fieldSubscribe"
                value="false"
                style={{ marginRight: "1vw", color: "black" }}
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
            <button className="submitBtn">
              <div>Send Message</div>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EnquiryForm;
