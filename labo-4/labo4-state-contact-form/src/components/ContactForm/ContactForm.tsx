import {useState} from "react";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [confirmationText, setConfirmationText] = useState("");

  const validSubmit =
    firstName.length > 0 &&
    lastName.length > 0 &&
    email.length > 0 &&
    email.includes("@");

  return (
    <>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
        action="#"
        onSubmit={(e) => {
          e.preventDefault();

          setConfirmationText(
            `Thanks ${firstName} ${lastName}! We will contact you at ${email}.`,
          );
          setFirstName("");
          setLastName("");
          setEmail("");
          setMessage("");
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <label htmlFor="firstName">First Name: </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text"
            name="LastName"
            id="lastName"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <label htmlFor="textarea">Message: </label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            style={{resize: "none"}}
            name="textarea"
            id="textarea"
            value={message}
          ></textarea>
        </div>
        <button disabled={!validSubmit} type="submit">
          Send
        </button>
      </form>
      {confirmationText && <p>{confirmationText}</p>}
    </>
  );
};

export default ContactForm;
