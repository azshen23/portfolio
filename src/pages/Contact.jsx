import { useState } from "react";
import Header from "../components/Header";
import ScreenWrapper from "../components/ScreenWrapper";

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

  const handleSubmit = () => {
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
      template_id: "template_c6auk5g",
      user_id: "9-edHskMveIOzuhYE",
      template_params: {
        name: name,
        email: email,
        subject: subject,
        message: message,
      },
    };
    if (name !== "" && email !== "" && subject !== "" && message !== "") {
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
  };

  return (
    <ScreenWrapper>
      <div className="flex flex-col w-full items-center justify-center">
        <Header />
        <div className="pt-20"></div>
        <div className="flex flex-row w-full pokemonFont pb-20">
          <div className="flex flex-col w-full items-center px-4">
            <h1 className="text-2xl pb-10 w-full text-center shadow-sm">
              Get In Touch With Me.
            </h1>
            <form className="flex flex-col text-start w-full md:w-3/5 lg:w-2/5">
              <label
                htmlFor="name"
                className="pt-5 pb-3 font-bold w-full pl-2 md:pl-0 text-sm md:text-base"
              >
                Your Name
              </label>
              <input
                className="border-4 box pt-4 pb-4 pl-3 pr-2 font-thin w-full text-base shadow-sm"
                type="text"
                id="name"
                name="user_name"
                autoComplete="name"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {!isNameValid && (
                <p className="text-red-500 pt-2 w-full text-sm">*Name is required</p>
              )}

              <label
                htmlFor="email"
                className="pt-8 pb-3 font-bold w-full pl-2 md:pl-0 text-sm md:text-base"
              >
                Your Email
              </label>
              <input
                className="box border-4 pt-4 pb-4 font-thin pl-3 pr-2 w-full text-base shadow-sm"
                type="email"
                id="email"
                name="user_email"
                autoComplete="email"
                placeholder="youremail@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {!isEmailValid && (
                <p className="text-red-500 pt-2 w-full text-sm">*Email is required</p>
              )}

              <label
                htmlFor="subject"
                className="pt-8 pb-3 font-bold w-full pl-2 md:pl-0 text-sm md:text-base"
              >
                Subject
              </label>
              <input
                className="box border-4 pt-4 pb-4 font-thin pl-3 pr-2 w-full text-base shadow-sm"
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              {!isSubjectValid && (
                <p className="text-red-500 pt-2 w-full text-sm">*Subject is required</p>
              )}

              <label
                htmlFor="message"
                className="pt-8 pb-3 font-bold w-full pl-2 md:pl-0 text-sm md:text-base"
              >
                Message
              </label>
              <textarea
                className="box border-4 pt-4 pb-4 pl-3 pr-2 h-40 text-sm md:text-base font-thin w-full resize-y shadow-sm"
                name="message"
                id="message"
                placeholder="Write Your Message Here"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              {!isMessageValid && (
                <p className="text-red-500 pt-2 w-full text-sm">*Message is required</p>
              )}
            </form>
            <button
              className="box border-4 w-full md:w-1/4 cursor-pointer text-black py-4 mt-10 font-bold text-center shadow-md hover:bg-gray-100 transition-colors duration-200"
              onClick={() => handleSubmit()}
            >
              Send Message
            </button>
            {isSubmitted && (
              <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm">
                <div className="box bg-white border-4 p-8 shadow-2xl max-w-md w-full mx-4">
                  <h2 className="text-2xl font-bold mb-4 shadow-sm">Success.</h2>
                  <p className="text-base mb-6 font-medium">Your message has been submitted successfully.</p>
                  <button
                    className="font-bold py-2 px-6 border-black border-4 rounded-xl shadow-sm hover:bg-gray-100 transition-colors duration-200"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </ScreenWrapper>
  );
}

export default Contact;
