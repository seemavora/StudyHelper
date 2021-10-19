import { React, useState, setLoader } from "react";
import "./ContactUs.css";
import "../../index.css";
// import { db } from "./firebase";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setLoader(true);

  //   db.collection("contacts")
  //     .add({
  //       name: name,
  //       email: email,
  //       message: message,
  //     })
  //     .then(() => {
  //       alert("Message has been submitted");
  //       setLoader(false);
  //     })
  //     .catch((error) => {
  //       alert(error.message);
  //       setLoader(false);
  //     });

  //   setName("");
  //   setEmail("");
  //   setMessage("");
  // };

  return (
    <form
      className="form"
      // onSubmit={handleSubmit}
    >
      <h1>Contact Us</h1>

      <label>Full Name</label>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Your Email Address</label>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Your Message</label>
      <textarea
        placeholder="Type your Message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        type="submit"
        // style={{ background: loader ? ":#ccc" : "rgb(2,2,110)" }}
      >
        Submit
      </button>
    </form>
  );
};

export default ContactUs;
