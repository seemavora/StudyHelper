import { React, useState } from "react";
import "./ContactUs.css";
import "../../index.css";
import { useHistory } from "react-router-dom";
import NavBar from "../../Components/NavBar (2)/NavBar";
// import { db } from "./firebase";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();

  const handleRoute = () => {
    history.push("/");
  }

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
    <div>
      <NavBar />
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
          onClick={handleRoute}
        // style={{ background: loader ? ":#ccc" : "rgb(2,2,110)" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
