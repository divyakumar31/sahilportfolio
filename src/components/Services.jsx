import React from "react";

const Services = () => {
  const services = [
    {
      name: "Responsive website",
      description:
        "Which means your website will open and intergate with all types of devices like mobile, Tablet, Desktop, etc. For all devices your website look pretty attractive.",
    },
    {
      name: "Redesign Old Website",
      description:
        "Your Website looking old & slow? No one want to open ugly & slower webpages. Don't worry I am here to Redeign your current website and convert it into attractive & creative.",
    },
    {
      name: "Ux Design",
      description:
        "Creating a seamless and intuitive user experience and optimize the layout, navigation, and interactivity of the website to enhance user engagement and satisfaction.",
    },
  ];
  return (
    <div
      id="service"
      className="bg-[#d8d2da] py-8 sm:py-20 px-4 md:px-20 lg:px-36 space-y-8"
    >
      <div className="text-3xl md:text-5xl font-semibold">My Services</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center mt-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-8 rounded-lg bg-[#886d6d] hover:bg-rose-500 space-y-4 lg:hover:scale-105 transition-all duration-500 hover:-translate-y-4 h-full"
          >
            <h2 className="text-2xl font-medium">{service.name}</h2>
            <p className="text-justify">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
