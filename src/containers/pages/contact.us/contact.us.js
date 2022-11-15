import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Button,
  FormControl,
  Input,
  OutlinedInput,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import "./contact.us.scss";
import { IsMobileWidth } from "../../../components/utils/utils";
import clsx from "clsx";
import SiteLabelTextField from "../../../components/site.label.textfield/site.label.textfield";
import InputField from "../../../components/input.field/input.field";
import LoaderButton from "../../../components/loader.button/loader.button";

const ContactUs = (props) => {
  const {} = props;
  const mobileWidth = IsMobileWidth();

  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    isLoading: "",
  });

  const handleChange = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const form = useRef();

  const sendEmail = (e) => {
    setState({ ...state, isLoading: true });
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ex5nwbk",
        "template_uh41u2i",
        form.current,
        "HN3HV0IfMBnIN2zjS"
      )
      .then(
        (result) => {
          console.log(state);
          setState({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
            isLoading: false,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      id="contact-us"
      className={clsx(!mobileWidth && "m-5", mobileWidth && "")}
    >
      <div
        className={clsx(
          !mobileWidth && "d-flex w-100",
          mobileWidth && "d-flex flex-column"
        )}
      >
        <div
          className={clsx(
            "d-flex flex-column justify-content-center text-theme",
            !mobileWidth && "w-50 px-5",
            mobileWidth && "w-100 px-4 mb-padding"
          )}
        >
          <Typography variant="subtitle1" className="pb-2">
            Contact
          </Typography>
          <Typography
            className="fw-bold"
            variant={clsx(!mobileWidth && "h1", mobileWidth && "h2")}
          >
            Get In Touch
          </Typography>
          <Typography
            className="fw-bold"
            variant={clsx(!mobileWidth && "h1", mobileWidth && "h2")}
          >
            With Us
          </Typography>
        </div>
        <div
          className={clsx(
            "connectImage",
            !mobileWidth && "w-50",
            mobileWidth && "w-100"
          )}
        ></div>
      </div>
      <div
        className={clsx(
          !mobileWidth && "d-flex w-100",
          mobileWidth && "d-flex flex-column-reverse"
        )}
      >
        <div
          className={clsx(
            "appointmentImage",
            !mobileWidth && "w-50",
            mobileWidth && "w-100"
          )}
        ></div>
        <div
          className={clsx(
            "d-flex flex-column justify-content-center text-theme",
            !mobileWidth && "w-50 px-5",
            mobileWidth && "w-100 py-5 px-4"
          )}
        >
          <Typography variant="h2" className="pb-4">
            Make an Appointment
          </Typography>
          <div className="py-3">
            <Typography variant="subtitle1" className="text-theme fw-bold">
              Our Facebook Page:
            </Typography>
            <Typography variant="subtitle1">
              <a
                href="https://www.facebook.com/porchamstore/"
                target="_blank"
                className="link2 pe-2"
              >
                facebook page
              </a>
              of Porcham
            </Typography>
          </div>
          <div className="py-3">
            <Typography variant="subtitle1" className="text-theme fw-bold">
              General Inquiries:
            </Typography>
            <Typography variant="subtitle1" className="text-theme fw-semi-bold">
              Call +92 3352683699
            </Typography>
          </div>
          <div className="py-3">
            <Typography variant="subtitle1" className="text-theme fw-bold">
              Our Location:
            </Typography>
            <Typography variant="subtitle1" className="text-theme fw-semi-bold">
              Shop No. 3, 394, Block 3 Liaquatabad Town, Karachi.
            </Typography>
          </div>
          <div>
            <iframe
              style={{ height: "260px", width: "100%" }}
              class="gmap_iframe"
              width="100%"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=porcham karachi&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="py-5 w-100 d-flex flex-column">
        <Typography
          variant={clsx(!mobileWidth && "h2", mobileWidth && "h5")}
          className="text-center font-weight-bolder text-theme pt-5 main-heading"
        >
          For Any Queries
        </Typography>
        <Typography
          variant="caption"
          className="text-center txt-gray pt-2 pb-5"
        >
          Feel free to contact us ...
        </Typography>
        <form
          className="w-100 justify-content-center"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="w-100 d-flex justify-content-center">
            <div
              className={clsx(
                "d-flex justify-content-center flex-wrap",
                !mobileWidth && "w-70",
                mobileWidth && "w-100"
              )}
            >
              <div
                className={clsx(
                  !mobileWidth && "w-50 p-3",
                  mobileWidth && "w-100 p-3"
                )}
              >
                <InputField
                  topAdornment="Enter Your Name"
                  placeholder="First Name"
                  value={state.firstName}
                  onChange={(e) => handleChange("firstName", e.target.value)}
                  name="c_name"
                />
              </div>
              <div
                className={clsx(
                  !mobileWidth && "w-50 p-3",
                  mobileWidth && "w-100 p-3"
                )}
              >
                <InputField
                  topAdornment="Enter Your Last Name"
                  placeholder="Last Name"
                  value={state.lastName}
                  onChange={(e) => handleChange("lastName", e.target.value)}
                />
              </div>
              <div className="w-100 p-3">
                <InputField
                  topAdornment="Enter Your Email Address"
                  placeholder="Email Address"
                  value={state.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  name="reply_to"
                />
              </div>
              <div className="w-100 p-3">
                <TextareaAutosize
                  aria-label="minimum height"
                  minRows={3}
                  placeholder="Type your message ..."
                  className="w-100 paper-root p-3"
                  value={state.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  name="message"
                />
              </div>
              <div
                className={clsx(
                  !mobileWidth && "w-30",
                  mobileWidth && "w-100 mx-3"
                )}
              >
                <LoaderButton
                  variant="contained"
                  // className="w-50 m-3"
                  color="secondary"
                  type="submit"
                  onClick={sendEmail}
                  loading={state.isLoading}
                >
                  Send a Message
                </LoaderButton>
              </div>
            </div>
          </div>
        </form>

        {/* <form ref={form} onSubmit={sendEmail}>
          <Input placeholder="Placeholder" value="hello khaismah" name="message"/>
          <input type="submit" value="Send" />
        </form> */}
      </div>
    </div>
  );
};

export default ContactUs;
