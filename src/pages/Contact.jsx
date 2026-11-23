import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitError("");

    const nameOk = name.trim() !== "";
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    const subjectOk = subject.trim() !== "";
    const messageOk = message.trim() !== "";

    setIsNameValid(nameOk);
    setIsEmailValid(emailOk);
    setIsSubjectValid(subjectOk);
    setIsMessageValid(messageOk);

    if (!nameOk || !emailOk || !subjectOk || !messageOk) {
      return;
    }

    setIsSubmitting(true);
    const data = {
      service_id: "service_21cxrbi",
      template_id: "template_c6auk5g",
      user_id: "9-edHskMveIOzuhYE",
      template_params: {
        name: name.trim(),
        email: email.trim(),
        subject: subject.trim(),
        message: message.trim(),
      },
    };

    fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
          setIsSubmitted(true);
        } else {
          throw new Error(response.statusText || "Failed to send message");
        }
      })
      .catch(() => {
        setSubmitError(
          "Something went wrong sending your message. Please try emailing azshen@umich.edu directly."
        );
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <ScreenWrapper>
      <Header />

      <section className="pt-10 sm:pt-14 flex flex-col items-center">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="pokemonFont text-2xl sm:text-3xl md:text-4xl text-white tracking-wide">
            Get In Touch With Me!
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Have a consulting project, engineering role, or question? Send a
            message below or reach out directly.
          </p>
        </div>

        <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Channels Sidebar */}
          <aside className="lg:col-span-4 rpg-panel p-6 flex flex-col gap-5">
            <h2 className="pokemonFont text-sm text-poke-gold">
              DIRECT CHANNELS
            </h2>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Email
                </p>
                <a
                  href="mailto:azshen@umich.edu"
                  className="text-slate-100 font-medium hover:text-poke-sky transition-colors"
                >
                  azshen@umich.edu
                </a>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                  GitHub
                </p>
                <a
                  href="https://github.com/azshen23"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-100 font-medium hover:text-poke-sky transition-colors"
                >
                  github.com/azshen23 ↗
                </a>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                  LinkedIn
                </p>
                <a
                  href="https://linkedin.com/in/azshen23"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-100 font-medium hover:text-poke-sky transition-colors"
                >
                  linkedin.com/in/azshen23 ↗
                </a>
              </div>
            </div>
          </aside>

          {/* RPG Message Form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="lg:col-span-8 rpg-dialogue p-6 sm:p-8 flex flex-col gap-5"
          >
            <div>
              <label
                htmlFor="name"
                className="block pokemonFont text-xs text-slate-800 mb-2"
              >
                Your Name
              </label>
              <input
                className="w-full rounded-lg border-2 border-slate-900 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-poke-crimson"
                type="text"
                id="name"
                name="user_name"
                autoComplete="name"
                placeholder="Full Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (!isNameValid) setIsNameValid(true);
                }}
              />
              {!isNameValid && (
                <p className="text-xs font-medium text-poke-crimson mt-1.5">
                  Name is required.
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block pokemonFont text-xs text-slate-800 mb-2"
              >
                Your Email
              </label>
              <input
                className="w-full rounded-lg border-2 border-slate-900 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-poke-crimson"
                type="email"
                id="email"
                name="user_email"
                autoComplete="email"
                placeholder="youremail@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (!isEmailValid) setIsEmailValid(true);
                }}
              />
              {!isEmailValid && (
                <p className="text-xs font-medium text-poke-crimson mt-1.5">
                  Please enter a valid email address.
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block pokemonFont text-xs text-slate-800 mb-2"
              >
                Subject
              </label>
              <input
                className="w-full rounded-lg border-2 border-slate-900 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-poke-crimson"
                type="text"
                id="subject"
                name="subject"
                placeholder="What is this regarding?"
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                  if (!isSubjectValid) setIsSubjectValid(true);
                }}
              />
              {!isSubjectValid && (
                <p className="text-xs font-medium text-poke-crimson mt-1.5">
                  Subject is required.
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block pokemonFont text-xs text-slate-800 mb-2"
              >
                Message
              </label>
              <textarea
                rows={5}
                className="w-full rounded-lg border-2 border-slate-900 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-poke-crimson resize-y"
                name="message"
                id="message"
                placeholder="Write your message here..."
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  if (!isMessageValid) setIsMessageValid(true);
                }}
              />
              {!isMessageValid && (
                <p className="text-xs font-medium text-poke-crimson mt-1.5">
                  Message is required.
                </p>
              )}
            </div>

            {submitError && (
              <p className="rounded-lg bg-red-50 border border-red-300 px-4 py-2.5 text-xs font-medium text-red-700">
                {submitError}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 inline-flex items-center justify-center rounded-lg border-2 border-slate-900 bg-poke-crimson px-6 py-3.5 pokemonFont text-xs sm:text-sm text-white shadow-sm transition hover:bg-poke-crimsonHover disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-poke-gold"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Success Modal */}
        <AnimatePresence>
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 backdrop-blur-sm p-4"
            >
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                className="rpg-dialogue max-w-md w-full p-6 sm:p-8 text-center"
              >
                <h2 className="pokemonFont text-lg text-slate-900 mb-3">
                  Success!
                </h2>
                <p className="text-sm text-slate-700 mb-6">
                  Your message has been submitted successfully. Thanks for
                  reaching out!
                </p>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-slate-900 bg-poke-crimson px-6 py-2.5 pokemonFont text-xs text-white hover:bg-poke-crimsonHover transition"
                  onClick={() => setIsSubmitted(false)}
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </ScreenWrapper>
  );
}

export default Contact;
