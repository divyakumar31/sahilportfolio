import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState("");

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwY-8I1dzEPhPKOTK192ARvq5hcbXjCK8MgOTclkg0jtlWTHDeVxbIXiLnXISTSHNbrsQ/exec";

    fetch(scriptURL, { method: "POST", body: formData })
      .then((response) => {
        setSubmitted("Message sent successfully 🚀");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => console.error("Error!", error.message));
  };

  return (
    <div
      id="contact"
      className="bg-[#d8d2da] py-8 sm:py-20 px-4 md:px-20 lg:px-36 flex flex-col md:flex-row gap-4 items-start"
    >
      <div className="flex flex-col gap-4 w-full md:w-5/12">
        <h1 className="text-3xl md:text-5xl font-semibold mb-4">Contact Me</h1>
        <a href="mailto:sahildarji1610@gmail.com" className="flex w-fit gap-2">
          <img src="email.svg" alt="Email icon" />
          <p>sahildarji1610@gmail.com</p>
        </a>
        <a href="tel:+91 90544 43318" className="flex w-fit gap-2">
          <img src="phone.svg" alt="Phone icon" />
          <p>+91 90544 43318</p>
        </a>
        <a
          href="sahilresume.pdf"
          download={true}
          className="rounded-md py-4 px-6 bg-rose-500 hover:bg-rose-600 text-white w-fit mt-4"
        >
          Download CV
        </a>
      </div>
      <div className="w-full md:w-6/12">
        <form
          onSubmit={handleSubmit}
          name="submit-to-google-sheet"
          className="space-y-4 w-full"
        >
          <input
            type="text"
            value={formData.name}
            name="name"
            placeholder="Your Name"
            onChange={handleInput}
            className="bg-black text-lg p-2.5 rounded-md text-white w-full"
            required
          />
          <input
            type="email"
            value={formData.email}
            name="email"
            placeholder="Your Email"
            onChange={handleInput}
            className="bg-black text-lg p-2.5 rounded-md text-white w-full"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            placeholder="Your Message"
            onChange={handleInput}
            rows="5"
            className="bg-black text-lg p-2.5 rounded-md text-white w-full resize-none"
            required
          ></textarea>

          <p className="text-rose-500">{submitted}</p>
          <input
            type="submit"
            className="rounded-md py-4 px-10 bg-rose-500 hover:bg-rose-600 text-white cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
