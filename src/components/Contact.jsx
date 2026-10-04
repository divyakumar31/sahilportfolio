import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("sending");

    try {
      // KEEP YOUR EXISTING GOOGLE APPS SCRIPT URL HERE
      const scriptUrl = "https://script.google.com/macros/s/AKfycbxl0DMREDZJPkPvlXEn2s9qRIZ2ORldQx-F0OIwOZy-XhT5uIyo-weXDc3vs4QTGWfKeA/exec";

      await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(formData),
      });

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    }
  };

  return (
    <>
      <section
        id="contact"
        className="relative overflow-hidden bg-[#0b0b0b] px-5 py-24 text-white sm:px-10 sm:py-32 lg:px-16 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">

          {/* HEADER */}
          <div className="reveal border-b border-white/[0.08] pb-8">

            <p className="text-[9px] font-medium uppercase tracking-[0.35em] text-rose-400 sm:text-[10px]">
              06 — Contact
            </p>

            <h2 className="mt-6 max-w-5xl text-[clamp(3.4rem,8vw,8rem)] font-semibold leading-[0.85] tracking-[-0.075em]">
              Have an idea?
              <br />
              Let's build
              <br />
              <span className="text-white/30">
                something great
              </span>
              <span className="text-rose-500">.</span>
            </h2>

          </div>

          {/* CONTACT CONTENT */}
          <div className="grid gap-16 pt-14 lg:grid-cols-12 lg:gap-20 lg:pt-20">

            {/* LEFT */}
            <div className="lg:col-span-5">

              <div className="reveal-left">

                <p className="max-w-md text-base leading-7 text-white/40 sm:text-lg sm:leading-8">
                  Whether you have a project in mind, an idea you want to
                  explore, or simply want to say hello — I'd love to hear from
                  you.
                </p>

                <div className="mt-12">

                  <p className="text-[8px] uppercase tracking-[0.3em] text-white/20">
                    Email
                  </p>

                  <a
                    href="mailto:sahildarji1610@gmail.com"
                    className="animated-link mt-3 inline-block text-base text-white/70 transition-colors hover:text-white sm:text-lg"
                  >
                    sahildarji1610@gmail.com
                  </a>

                </div>

                <div className="mt-10">

                  <p className="text-[8px] uppercase tracking-[0.3em] text-white/20">
                    Based in
                  </p>

                  <p className="mt-3 text-base text-white/60">
                    Ahmedabad, India
                  </p>

                </div>

                <div className="mt-10 flex items-center gap-3">

                  {/* EMAIL */}
                  <a
                    href="mailto:sahildarji1610@gmail.com"
                    aria-label="Email Sahil"
                    className="contact-icon"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      aria-hidden="true"
                    >
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m3 7 9 6 9-6" />
                    </svg>

                    <span className="contact-icon-tooltip">
                      Email
                    </span>
                  </a>

                  {/* INSTAGRAM */}
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="contact-icon"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      aria-hidden="true"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle
                        cx="17.3"
                        cy="6.7"
                        r="0.8"
                        fill="currentColor"
                        stroke="none"
                      />
                    </svg>

                    <span className="contact-icon-tooltip">
                      Instagram
                    </span>
                  </a>

                  {/* LINKEDIN */}
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="contact-icon"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M6.5 8.2H3.2V21h3.3V8.2ZM4.85 3A1.95 1.95 0 1 0 4.85 6.9 1.95 1.95 0 0 0 4.85 3ZM21 13.65c0-3.85-2.05-5.65-4.78-5.65-2.2 0-3.18 1.2-3.73 2.04V8.2H9.2V21h3.29v-6.34c0-1.67.32-3.29 2.39-3.29 2.04 0 2.07 1.92 2.07 3.4V21H20.3l.7-7.35Z" />
                    </svg>

                    <span className="contact-icon-tooltip">
                      LinkedIn
                    </span>
                  </a>

                </div>

              </div>

            </div>

            {/* FORM */}
            <div className="lg:col-span-7">

              <form
                onSubmit={handleSubmit}
                className="reveal-right"
              >

                {/* NAME */}
                <div className="contact-field">

                  <label htmlFor="name">
                    <span>01</span>
                    Your name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                </div>

                {/* EMAIL */}
                <div className="contact-field">

                  <label htmlFor="email">
                    <span>02</span>
                    Email address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                </div>

                {/* MESSAGE */}
                <div className="contact-field">

                  <label htmlFor="message">
                    <span>03</span>
                    Tell me about it
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Tell me a little about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />

                </div>

                {/* STATUS */}
                {status === "success" && (
                  <div className="contact-status contact-status-success">
                    <span>✓</span>
                    Thanks — your message has been sent.
                  </div>
                )}

                {status === "error" && (
                  <div className="contact-status contact-status-error">
                    Something went wrong. Please try again or email me
                    directly.
                  </div>
                )}

                {/* SUBMIT */}
                <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                  <div className="contact-response">
                    <span className="contact-response-label">
                      USUALLY REPLY WITHIN
                    </span>

                    <span className="contact-response-time">
                      12–24 HOURS.
                    </span>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="contact-submit magnetic group"
                  >
                    <span>
                      {status === "sending"
                        ? "Sending..."
                        : "Send message"}
                    </span>

                    <span className="contact-submit-arrow">
                      ↗
                    </span>
                  </button>

                </div>

              </form>

            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      {/* <footer className="border-t border-white/[0.08] bg-[#0b0b0b] px-5 py-8 text-white sm:px-10 lg:px-16">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">

            <div>

              <a
                href="#home"
                className="text-xl font-semibold tracking-[-0.05em]"
              >
                sahil<span className="text-rose-500">.</span>dev
              </a>

              <p className="mt-3 text-[8px] uppercase tracking-[0.25em] text-white/20">
                Frontend Developer
              </p>

            </div>

            <div className="flex flex-col gap-3 sm:items-end">

              <p className="text-[8px] uppercase tracking-[0.25em] text-white/20">
                Ahmedabad / India
              </p>

              <p className="text-[8px] uppercase tracking-[0.25em] text-white/20">
                © 2026 Sahil Darji
              </p>

            </div>

          </div>

        </div>

      </footer> */}
    </>
  );
};

export default Contact;