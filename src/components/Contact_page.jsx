import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const data = {
  name: "",
  phone: "",
  email: "",
  address: "",
  message: "",
};

const Contact_page = () => {
  const [formData, setFormData] = useState(data);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ulnvg65", "template_kdfzwb4", form.current, {
        publicKey: "meaZJ5Nx4kVZNzUiA",
      })
      .then(
        () => {
          toast.success("SUCCESS!");
        },
        (error) => {
          toast.error("FAILED...", error.text);
        }
      );

    setFormData(data);
  };
  return (
    <div className="container mx-auto my-10 p-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Contact Form Section */}
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-6">
          <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-400">
            Name
          </label>
          <input
            value={formData.name}
            name="from_name"
            type="text"
            onChange={(e) => {
              setFormData({ ...formData, ["name"]: e.target.value });
            }}
            className="bg-blue-100 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Enter your name?"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-400">
            Phone Number
          </label>
          <input
            value={formData.phone}
            name="phone"
            type="text"
            onChange={(e) => {
              setFormData({ ...formData, ["phone"]: e.target.value });
            }}
            className="bg-blue-100 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Enter your Phone Number?"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-400">
            Email
          </label>
          <input
            value={formData.email}
            name="from_email"
            type="email"
            onChange={(e) => {
              setFormData({ ...formData, ["email"]: e.target.value });
            }}
            className="bg-blue-100 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Enter your E-mail?"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-400">
            Adress
          </label>
          <input
            value={formData.address}
            name="address"
            type="text"
            onChange={(e) => {
              setFormData({ ...formData, ["address"]: e.target.value });
            }}
            className="bg-blue-100 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Enter your Address?"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-400">
            Message
          </label>
          <textarea
            value={formData.message}
            name="message"
            onChange={(e) => {
              setFormData({ ...formData, ["message"]: e.target.value });
            }}
            className="bg-blue-100 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Your Message"
            rows="4"
          ></textarea>
        </div>
        <input
          className="bg-blue-500  hover:bg-blue-700 px-4 py-2  rounded-xl text-white cursor-pointer"
          type="submit"
          value="Send"
        />
      </form>
      {/* Map and Address Section */}
      <div>
        <div className="mb-6">
          <p className="text-xl font-medium text-gray-900 dark:text-gray-400">
            Working hours
          </p>
          <p className="text-xl text-gray-600">Mon-Fri: 10:00 - 07:00</p>
        </div>
        <div className="h-full w-full">
          <iframe
            className="h-[80%] w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.0142818271784!2d72.55866571188982!3d23.059937979060564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8b65f2c3f296c2c7%3A0x9642c5ef8c48cb2b!2sBlue%20Soltech%20LLP.!5e0!3m2!1sen!2sin!4v1710138363917!5m2!1sen!2sin"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact_page;
