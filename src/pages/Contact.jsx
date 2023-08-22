import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isSubjectValid, setIsSubjectValid] = useState(true);
  const [isMessageValid, setIsMessageValid] = useState(true);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitError, setIsSubmitError] = useState(false);

  function handleSubmit() {
    setIsNameValid(true);
    setIsEmailValid(true);
    setIsSubjectValid(true);
    setIsMessageValid(true);

    if (name.trim() === "") {
      setIsNameValid(false);
    }
    if (email.trim() === "") {
      setIsEmailValid(false);
    }
    if (subject.trim() === "") {
      setIsSubjectValid(false);
    }
    if (message.trim() === "") {
      setIsMessageValid(false);
    }

    var data = {
      service_id: "service_21cxrbi",
      template_id: "template_sflz257",
      user_id: "9-edHskMveIOzuhYE",
      template_params: {
        name: name,
        email: email,
        subject: subject,
        message: message,
      },
    };
    if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
      fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add any other headers if needed
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.ok) {
            console.log("success", response);
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
            setIsSubmitted(true);
          } else {
            throw new Error(response.statusText);
          }
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    }
  }

  return (
    <div className="flex flex-col w-full items-center justify-center">
      <Header />
      <div className="pt-20"></div>
      <div className="flex flex-row w-full pl-40">
        <div className="flex flex-col w-1/2 ">
          Get In Touch
          <form className="flex flex-col ">
            <label for="name" className="pt-5 pb-5 font-bold">
              Your Name
            </label>
            <input
              className="border-4 box pt-4 pb-4 pl-3 pr-2 text-base font-thin"
              type="text"
              id="name"
              name="user_name"
              autoComplete="name"
              placeholder="Full Name"
              value={name}
            />
            {!isNameValid && <p className="text-red-500">*Name is required</p>}

            <label for="email" className="pt-10 pb-5 font-bold">
              Your Email
            </label>
            <input
              className="box border-4 pt-4 pb-4 text-small font-thin pl-3"
              type="text"
              id="email"
              name="user_name"
              autocomplete="email"
              placeholder="youremail@example.com"
              bind:value={email}
            />

            {!isEmailValid && (
              <p className="text-red-500">*Email is required</p>
            )}

            <label for="subject" className="pt-10 pb-5 font-bold">
              Subject
            </label>
            <input
              className="box border-4 pt-4 pb-4 text-small font-thin pl-3"
              type="text"
              id="subject"
              name="user_name"
              placeholder="Subject"
              bind:value={subject}
            />
            {!isSubjectValid && (
              <p className="text-red-500">*Subject is required</p>
            )}

            <label for="message" className="pt-10 pb-5 font-bold">
              Message
            </label>
            <textarea
              className="box border-4 pt-4 pb-4 text-small font-thin pl-3"
              name="message"
              id="message"
              placeholder="Write Your Message Here"
              bind:value={message}
            />

            {!isMessageValid && (
              <p className="text-red-500">*Message is required</p>
            )}

            <input
              className="rounded-lg bg-primary hover:bg-accent cursor-pointer text-white pb-4 pt-4 mt-10 font-bold"
              type="submit"
              value="Send Message"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
