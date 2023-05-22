import { sendContactForm } from "@/lib/api";
import { useEffect } from "react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Styles from "@/styles/contact.module.css";
import ThankYou from "@/pages/thankyou";

const initValues = {
  name: "",
  email: "",
  mobile: "",
  subject: "",
  message: "",
};
const initState = { values: initValues };

function ContactMe() {
  const router = useRouter();
  const [username, setUserName] = useState("");
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});
  const { values, error } = state;
  const [thankyou, setThankyou] = useState(false);
  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async (event) => {
    event.preventDefault();
    setState((prev) => ({
      ...prev,
    }));
    setUserName(values.name);

    try {
      await sendContactForm(values, error);
      setTouched({});
      setState(initState);
      setThankyou(true);
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: error.message,
      }));
    }
  };

  {
    if (thankyou === true) {
      return <ThankYou name={username} />;
    } else
      return (
        <div>
          <div className={Styles.content}>
            {error && <div style={{ color: "red" }}>{error}</div>}

            <div className="mx-auto ">
              <form>
                <div className="form-row">
                  <div className=" mb-3">
                    <label htmlFor="validationServer01">Name*</label>
                    <input
                      type="text"
                      name="name"
                      value={values.name}
                      className={
                        touched.name && !values.name
                          ? "form-control is-invalid"
                          : "form-control "
                      }
                      id="validationServer01"
                      placeholder="Simon Dark"
                      required
                      onChange={handleChange}
                      onBlur={onBlur}
                    />
                    <div className={"invalid-feedback"}>
                      Please provide your names.
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className=" mb-3">
                    <label htmlFor="validationServer02">email*</label>
                    <input
                      type="email"
                      name="email"
                      value={values.email}
                      className={
                        touched.email && !values.email
                          ? "form-control is-invalid"
                          : "form-control "
                      }
                      id="validationServer02"
                      placeholder="email"
                      onBlur={onBlur}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-row">
                    <div className=" mb-3">
                      <label htmlFor="validationServer03">Mobile No:</label>
                      <input
                        type="text"
                        name="mobile"
                        value={values.mobile}
                        className={
                          touched.mobile && !values.mobile
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        id="validationServer03"
                        placeholder="+254711888888"
                        onBlur={onBlur}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className=" mb-3">
                      <label htmlFor="validationServer05">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={values.subject}
                        className={
                          touched.subject && !values.subject
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        id="validationServer05"
                        placeholder="Subject"
                        onBlur={onBlur}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row mb-3">
                    <div className="form-group">
                      <label htmlFor="exampleFormControlTextarea1">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={values.message}
                        className={
                          touched.message && !values.message
                            ? "form-control is-invalid"
                            : "form-control "
                        }
                        id="validationServer06"
                        onBlur={onBlur}
                        onChange={handleChange}
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <button
                  className={Styles.button}
                  onClick={onSubmit}
                  style={{ float: "right" }}
                  disabled={
                    !values.name ||
                    !values.email ||
                    !values.subject ||
                    !values.message ||
                    !values.mobile
                  }
                >
                  Submit form
                </button>
              </form>
            </div>
          </div>
        </div>
      );
  }
}

export default ContactMe;
