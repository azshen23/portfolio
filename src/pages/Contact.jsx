import { useState } from "react";
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
    <div className="flex flex-col w-full items-center justify-center">
      <Header />
      <div className="pt-20"></div>
      <div className="flex flex-row w-full pokemonFont pb-20">
        <div className="flex flex-col w-full items-center ">
          <h1 className="text-2xl pb-10 w-full text-center">
            {" "}
            Get In Touch With Me!
          </h1>
          <form className="flex flex-col text-start w-full md:w-3/5 lg:w-2/5">
            <label
              htmlFor="name"
              className="pt-5 pb-5 font-bold w-full pl-2 md:pl-0"
            >
              Your Name
            </label>
            <textarea
              className="border-4 box pt-6 pl-3 pr-2 font-thin w-full"
              type="text"
              id="name"
              name="user_name"
              autoComplete="name"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {!isNameValid && (
              <p className="text-red-500 pt-2 w-full">*Name is required</p>
            )}

            <label
              htmlFor="email"
              className="pt-10 pb-5 font-bold w-full pl-2 md:pl-0"
            >
              Your Email
            </label>
            <input
              className="box border-4 pt-6 pb-6 font-thin pl-3 w-full"
              type="text"
              id="email"
              name="user_name"
              autoComplete="email"
              placeholder="youremail@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {!isEmailValid && (
              <p className="text-red-500 pt-2 w-full">*Email is required</p>
            )}

            <label
              htmlFor="subject"
              className="pt-10 pb-5 font-bold w-full pl-2 md:pl-0"
            >
              Subject
            </label>
            <textarea
              className="box border-4 pt-6 font-thin pl-3 w-full"
              type="text"
              id="subject"
              name="user_name"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            {!isSubjectValid && (
              <p className="text-red-500 pt-2 w-full">*Subject is required</p>
            )}

            <label
              htmlFor="message"
              className="pt-10 pb-5 font-bold w-full pl-2 md:pl-0"
            >
              Message
            </label>
            <textarea
              className="box border-4 pt-4 pb-10 text-small font-thin pl-3 pb-20 w-full"
              name="message"
              id="message"
              placeholder="Write Your Message Here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            {!isMessageValid && (
              <p className="text-red-500 pt-2 w-full">*Message is required</p>
            )}
          </form>
          <button
            className="box border-4 w-1/2 md:w-1/4 cursor-pointer text-black pb-4 pt-4 mt-10 font-bold text-center"
            onClick={() => handleSubmit()}
          >
            Send Message
          </button>
          {isSubmitted && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="box bg-white border-4 p-8 shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Success!</h2>
                <p>Your message has been submitted successfully.</p>
                <button
                  className="mt-6 font-bold py-2 px-4 border-black border-2 rounded-lg"
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
  );
}

export default Contact;
