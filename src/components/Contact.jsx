import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState("");
  const [sending, setSending] = useState(false);

  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  setSending(true);
  setSubmitted("");

  const scriptURL =
      "https://script.google.com/macros/s/AKfycbxl0DMREDZJPkPvlXEn2s9qRIZ2ORldQx-F0OIwOZy-XhT5uIyo-weXDc3vs4QTGWfKeA/exec";

  fetch(scriptURL, {
    method: "POST",
    body: new URLSearchParams(formData),
  })
    .then(() => {
      setSubmitted("success");

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitted("");
      }, 4000);
    })
    .catch((error) => {
      console.error("Error!", error.message);

      setSubmitted("error");

      setTimeout(() => {
        setSubmitted("");
      }, 4000);
    })
    .finally(() => {
      setSending(false);
    });
};

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[##0b0b0b] px-6 py-28 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 border-b border-white/10 pb-6">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-rose-400">
            03 — Contact
          </p>

          <h2 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Let's build something
            <span className="block text-white/35">great together.</span>
          </h2>
        </div>

        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Contact Info */}
          <div className="lg:col-span-5">
            <div className="reveal-left">
              <p className="max-w-md text-lg leading-8 text-white/60">
                Have an idea, project or business solution in mind? Let's turn
                it into a digital product that actually makes an impact.
              </p>

              {/* Email */}
              <a
                href="mailto:sahildarji1610@gmail.com"
                className="group mt-10 block w-fit"
              >
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-white/40">
                  Email
                </p>

                <div className="flex items-center gap-3 text-base font-medium text-white transition-colors duration-300 group-hover:text-rose-400">
                  {/* Email Icon */}
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] transition-all duration-300 group-hover:border-rose-400/40 group-hover:bg-rose-400/10">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                    >
                      <path
                        d="M4 5H20C20.55 5 21 5.45 21 6V18C21 18.55 20.55 19 20 19H4C3.45 19 3 18.55 3 18V6C3 5.45 3.45 5 4 5Z"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      <path
                        d="M3 6L12 13L21 6"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  <span>sahildarji1610@gmail.com</span>

                  <span className="text-white/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-rose-400">
                    ↗
                  </span>
                </div>
              </a>

              {/* Availability */}
              <div className="mt-12 flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-rose-400" />
                </span>

                <span className="text-sm text-white/50">
                  Available for new projects
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="reveal-right rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8"
            >
              {/* Name */}
              <div className="mb-7">
                <label
                  htmlFor="name"
                  className="mb-3 block text-xs font-medium uppercase tracking-[0.18em] text-white/40"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInput}
                  placeholder="Enter your name"
                  required
                  className="w-full border-b border-white/15 bg-transparent px-0 py-3 text-base text-white outline-none placeholder:text-white/25 transition-colors duration-300 focus:border-rose-400"
                />
              </div>

              {/* Email */}
              <div className="mb-7">
                <label
                  htmlFor="email"
                  className="mb-3 block text-xs font-medium uppercase tracking-[0.18em] text-white/40"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInput}
                  placeholder="you@example.com"
                  required
                  className="w-full border-b border-white/15 bg-transparent px-0 py-3 text-base text-white outline-none placeholder:text-white/25 transition-colors duration-300 focus:border-rose-400"
                />
              </div>

              {/* Message */}
              <div className="mb-8">
                <label
                  htmlFor="message"
                  className="mb-3 block text-xs font-medium uppercase tracking-[0.18em] text-white/40"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInput}
                  placeholder="Tell me about your project..."
                  required
                  rows="5"
                  className="w-full resize-none border-b border-white/15 bg-transparent px-0 py-3 text-base text-white outline-none placeholder:text-white/25 transition-colors duration-300 focus:border-rose-400"
                />
              </div>

              {/* Status */}
              {submitted && (
  <div
    className={`mb-5 flex items-center gap-3 rounded-xl border px-4 py-3 text-sm transition-all duration-300 ${
      submitted === "success"
        ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-400"
        : "border-rose-400/20 bg-rose-400/10 text-rose-400"
    }`}
  >
    <span
      className={`flex h-6 w-6 items-center justify-center rounded-full border ${
        submitted === "success"
          ? "border-emerald-400/40 bg-emerald-400/15"
          : "border-rose-400/40 bg-rose-400/15"
      }`}
    >
      {submitted === "success" ? "✓" : "!"}
    </span>

    <span>
      {submitted === "success"
        ? "Message sent successfully"
        : "Something went wrong. Please try again."}
    </span>
  </div>
)}

              {/* Submit */}
              <button
                type="submit"
                disabled={sending}
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-black transition-all duration-300 hover:bg-rose-400 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {sending ? "Sending..." : "Send Message"}

                {!sending && (
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 flex flex-col justify-between gap-5 border-t border-white/10 pt-7 text-xs text-white/30 sm:flex-row">
          <p>© {new Date().getFullYear()} Sahil Darji. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;