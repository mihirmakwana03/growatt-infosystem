import { useState } from "react";
import axios from "axios";

const SendEmail = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await axios.post("http://localhost:5000/send-email", {
        email,
        subject,
        message,
      });

      setStatus(response.data.success);
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      setStatus("Error: " + error.response?.data?.error || error.message);
    }
  };

  return (
    <div
      style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}
    >
      <h2>Send an Email</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Recipient Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        <br />
        <br />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <br />
        <br />
        <button type="submit">Send</button>
      </form>
      <p>{status}</p>
    </div>
  );
};

export default SendEmail;
