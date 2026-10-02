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
      className="relative overflow-hidden bg-[#0b0b0b] px-6 py-16 sm:px-10 sm:py-16 lg:px-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10 border-b border-white/10 pb-5">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-rose-400">
            03 — Contact
          </p>

          <h2 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Let's build something
            <span className="block text-white/35">
              great together.
            </span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">

          {/* Contact Information */}
          <div className="lg:col-span-5">
            <div className="reveal-left">

              {/* Description */}
              <p className="max-w-md text-lg leading-8 text-white/60">
                Have an idea, project or business solution in mind? Let's turn
                it into a digital product that actually makes an impact.
              </p>

              {/* Email / LinkedIn / Instagram */}
              <div className="mt-8 flex items-center gap-3">

                {/* Email */}
                <a
                  href="mailto:sahildarji1610@gmail.com"
                  aria-label="Email me"
                  title="Email me"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-white/50 transition-all duration-300 hover:-translate-y-1 hover:border-rose-400/50 hover:bg-rose-400/10 hover:text-rose-400"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[18px] w-[18px]"
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
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-white/50 transition-all duration-300 hover:-translate-y-1 hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10 hover:text-[#0A66C2]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-[18px] w-[18px]"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.997h3.414v1.561h.046c.477-.9 1.637-1.849 3.37-1.849 3.602 0 4.267 2.37 4.267 5.455v6.288ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0-4.124ZM3.555 8.997h3.564v11.455H3.555V8.997Z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  title="Instagram"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-white/50 transition-all duration-300 hover:-translate-y-1 hover:border-rose-500/50 hover:bg-rose-500/10 hover:text-rose-400"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-[19px] w-[19px]"
                    aria-hidden="true"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="5"
                    />

                    <circle
                      cx="12"
                      cy="12"
                      r="4.2"
                    />

                    <circle
                      cx="17.4"
                      cy="6.6"
                      r="1"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                </a>

              </div>

              {/* Availability */}
              <div className="mt-7 flex items-center gap-3">
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
        <div className="mt-16 flex flex-col justify-between gap-5 border-t border-white/10 pt-7 text-xs text-white/30 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Sahil Darji. All rights reserved.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;