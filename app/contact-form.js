"use client";

import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xkodlgpw";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  async function handleSubmit(event) {
    event.preventDefault();

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
      <div className="form-group">
        <p className="form-group-label">The basics</p>

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
          <label className="form-label" htmlFor="business">
            Business or brand name{" "}
            <span className="form-label-optional">(optional)</span>
          </label>
          <input
            className="form-input"
            type="text"
            id="business"
            name="business"
          />
        </div>

        <div className="form-field">
          <label className="form-label" htmlFor="website">
            Website <span className="form-label-optional">(optional)</span>
          </label>
          <input className="form-input" type="url" id="website" name="website" />
        </div>
      </div>

      <div className="form-group">
        <p className="form-group-label">Your project</p>

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

        <div className="form-field">
          <label className="form-label" htmlFor="services">
            What kind of support are you looking for?{" "}
            <span className="form-label-optional">(optional)</span>
          </label>
          <input
            className="form-input"
            type="text"
            id="services"
            name="services"
            placeholder="e.g. campaign concept, website copy, brand voice"
          />
        </div>

        <div className="form-field">
          <label className="form-label" htmlFor="timing">
            When are you hoping to start?{" "}
            <span className="form-label-optional">(optional)</span>
          </label>
          <input
            className="form-input"
            type="text"
            id="timing"
            name="timing"
            placeholder="e.g. flexible, within a month, ASAP"
          />
        </div>
      </div>

      {status === "error" ? (
        <p className="form-status form-status-error">
          Something went wrong sending that — mind trying again, or emailing
          alexandracolgan@gmail.com directly?
        </p>
      ) : null}

      <button className="form-submit" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send it my way"}
      </button>

      <p className="form-privacy-note">
        Your details will only be used to reply to your message.
      </p>
    </form>
  );
}
