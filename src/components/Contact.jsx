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
      "https://script.google.com/macros/s/AKfycbwY-8I1dzEPhPKOTK192ARvq5hcbXjCK8MgOTclkg0jtlWTHDeVxbIXiLnXISTSHNbrsQ/exec";

    fetch(scriptURL, {
      method: "POST",
      body: new URLSearchParams(formData),
    })
      .then(() => {
        setSubmitted("Message sent successfully.");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error!", error.message);
        setSubmitted("Something went wrong. Please try again.");
      })
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <section
  id="contact"
  className="relative overflow-hidden bg-[#0b0b0b] px-5 pt-12 text-white sm:px-10 sm:pt-16 lg:px-20 xl:px-28"
>
      {/* Glow */}
      <div className="pointer-events-none absolute bottom-[-200px] right-[-250px] h-[600px] w-[600px] rounded-full bg-rose-500/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="reveal border-t border-white/10 pt-10">
          <p className="mb-8 text-xs uppercase tracking-[0.35em] text-rose-500">
            Have a project in mind? / 03
          </p>

          <h2 className="text-[16vw] font-semibold leading-[0.8] tracking-[-0.06em] sm:text-[13vw] lg:text-[10vw]">
            LET'S
            <br />
            <span className="text-rose-500">TALK.</span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid gap-14 pb-24 pt-24 lg:grid-cols-12 lg:gap-20">
          {/* Left */}
          <div className="reveal-left lg:col-span-5">
            <p className="max-w-lg text-xl leading-relaxed text-white/70 sm:text-2xl">
              Have an idea, website or software project you'd like to build?
              Let's turn it into something useful and memorable.
            </p>

            {/* Availability */}
            <div className="mt-10 flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />

                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
              </span>

              <span className="text-sm text-white/40">
                Available for new projects
              </span>
            </div>

            {/* Direct contact */}
            <div className="mt-12 space-y-7">
              <a
                href="mailto:sahildarji1610@gmail.com"
                className="group block"
              >
                <p className="mb-2 text-xs uppercase tracking-[0.25em] text-white/25">
                  Email
                </p>

                <div className="flex items-center gap-3 text-lg transition-colors group-hover:text-rose-500 sm:text-xl">
                  sahildarji1610@gmail.com
                  <span className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                    ↗
                  </span>
                </div>
              </a>

              <a
                href="tel:+919054443318"
                className="group block"
              >
                <p className="mb-2 text-xs uppercase tracking-[0.25em] text-white/25">
                  Phone
                </p>

                <div className="flex items-center gap-3 text-lg transition-colors group-hover:text-rose-500 sm:text-xl">
                  +91 90544 43318
                  <span className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                    ↗
                  </span>
                </div>
              </a>
            </div>

            {/* Actions */}
            <div className="mt-12 flex flex-wrap gap-3">
              <a
                href="/sahilresume.pdf"
                download
                className="rounded-full border border-white/10 px-5 py-3 text-sm text-white/70 transition-all duration-300 hover:border-rose-500 hover:text-rose-500"
              >
                Download CV ↓
              </a>

              <a
                href="#project"
                className="rounded-full border border-white/10 px-5 py-3 text-sm text-white/70 transition-all duration-300 hover:border-rose-500 hover:text-rose-500"
              >
                View work ↗
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="reveal-right lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 lg:p-10"
            >
              {/* Name */}
              <div className="border-b border-white/10 pb-4">
                <label
                  htmlFor="name"
                  className="mb-3 block text-xs uppercase tracking-[0.25em] text-white/25"
                >
                  Your name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInput}
                  placeholder="Enter your name"
                  required
                  className="w-full bg-transparent text-lg outline-none placeholder:text-white/15"
                />
              </div>

              {/* Email */}
              <div className="mt-8 border-b border-white/10 pb-4">
                <label
                  htmlFor="email"
                  className="mb-3 block text-xs uppercase tracking-[0.25em] text-white/25"
                >
                  Email address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInput}
                  placeholder="you@example.com"
                  required
                  className="w-full bg-transparent text-lg outline-none placeholder:text-white/15"
                />
              </div>

              {/* Message */}
              <div className="mt-8 border-b border-white/10 pb-4">
                <label
                  htmlFor="message"
                  className="mb-3 block text-xs uppercase tracking-[0.25em] text-white/25"
                >
                  Project details
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInput}
                  placeholder="Tell me about your project..."
                  required
                  className="w-full resize-none bg-transparent text-lg outline-none placeholder:text-white/15"
                />
              </div>

              {/* Status */}
              {submitted && (
                <p
                  className={`mt-6 text-sm ${
                    submitted.includes("successfully")
                      ? "text-green-400"
                      : "text-rose-400"
                  }`}
                >
                  {submitted}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={sending}
                className="group mt-8 flex items-center gap-5 text-lg font-medium disabled:cursor-not-allowed disabled:opacity-50"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-500 text-xl transition-all duration-300 group-hover:rotate-45 group-hover:scale-110">
                  ↗
                </span>

                <span className="transition-colors group-hover:text-rose-500">
                  {sending ? "Sending..." : "Send Message"}
                </span>
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-white/10 py-8">
          <div className="flex flex-col justify-between gap-5 text-sm text-white/30 sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} Sahil Darji</p>

            <p>Designed & Developed by Sahil</p>

            <a
              href="#home"
              className="transition-colors hover:text-rose-500"
            >
              Back to top ↑
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
