import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Input, Typography } from "@mui/material";
import "./contact.us.scss";
import { IsMobileWidth } from "../../../components/utils/utils";
import clsx from "clsx";
import SiteLabelTextField from '../../../components/site.label.textfield/site.label.textfield'

const ContactUs = (props) => {
  const {} = props;
  const mobileWidth = IsMobileWidth();

  const form = useRef();

  const sendEmail = (e) => {
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
          console.log(result.text);
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
      <div>
        <SiteLabelTextField
         
         
          onChange={(event) =>
            props.handleChange("description", event.target.value)
          }
          // value={description}
          topAdornment="Description"
          placeholder="Type description"
        />
        {/* <form ref={form} onSubmit={sendEmail}>
          <Input placeholder="Placeholder" value="hello khaismah" name="message"/>
          <input type="submit" value="Send" />
        </form> */}
      </div>
    </div>
  );
};

export default ContactUs;
