"use client";

import { useState } from "react";

// Sign up at https://formspree.io, create a form, and replace this with
// your endpoint (e.g. "https://formspree.io/f/abcdwxyz"). Until then,
// submissions will fail with a clear error rather than silently vanishing.
const FORMSPREE_ENDPOINT = "";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  async function handleSubmit(event) {
    event.preventDefault();

    if (!FORMSPREE_ENDPOINT) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    const form = event.target;
    const data = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="form-status form-status-success">
        Thanks — I&rsquo;ll be in touch soon.
      </p>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label className="form-label" htmlFor="name">
          Name
        </label>
        <input className="form-input" type="text" id="name" name="name" required />
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="email">
          Email address
        </label>
        <input
          className="form-input"
          type="email"
          id="email"
          name="email"
          required
        />
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="message">
          What are you making, and how can I help?
        </label>
        <textarea
          className="form-input form-textarea"
          id="message"
          name="message"
          rows={6}
          required
        />
      </div>

      {status === "error" ? (
        <p className="form-status form-status-error">
          {FORMSPREE_ENDPOINT
            ? "Something went wrong sending that — mind trying again, or emailing alexandracolgan@gmail.com directly?"
            : "The contact form isn't fully wired up yet — email alexandracolgan@gmail.com directly for now."}
        </p>
      ) : null}

      <button className="hp-button" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send it my way"}
      </button>

      <p className="form-privacy-note">
        Your details will only be used to reply to your message.
      </p>
    </form>
  );
}
