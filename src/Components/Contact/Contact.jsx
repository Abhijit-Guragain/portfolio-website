import React, { useState } from "react";

import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    try {
      const response = await fetch("https://formspree.io/f/mwkdlzak", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        // Clear the form fields after successful submission
        setFormData({
          name: "",
          email: "",
          message: "",
        });

        alert("Message sent successfully!");
      } else {
        alert("An error occurred while sending the message.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("An error occurred while sending the message.");
    }
  };
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-content">
        <div className="contact-form">
          <h3>Send me a message</h3>
          <form>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="inputFeild name"
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="inputFeild email"
            />
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="inputFeild"
            />
            <div className="submit-btn">
              <button type="submit" onClick={handleSubmit}>
                SEND
              </button>
            </div>
          </form>
        </div>
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>
            Email:{" "}
            <a href="mailto:abhijitguragain546@gmail.com">
              abhijitguragain546@gmail.com
            </a>
            <br />
            Phone: <a href="tel:+977 9843999079">+977 9843999079</a>
          </p>
          <div className="social-links">
            <a
              href="https://www.instagram.com/iamabhijitguragain/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} /> Instagram
            </a>
            <br />
            <a
              href="https://twitter.com/nep_weebs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} /> Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
